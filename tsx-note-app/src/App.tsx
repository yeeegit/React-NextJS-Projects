import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import { AddNotes } from "./components/AddNotes";
import { useLocalStorage } from "./components/useLocalStorage";
import { useMemo } from "react";
import { v4 as uuidV4 } from "uuid";
import { NoteList } from "./components/NoteList";
import { NoteLayout } from "./components/NoteLayout";
import { Note } from "./components/Note";
import { EditNote } from "./components/EditNote";

export type Note = {
  id: string;
} & NoteData;

export type RawNote = {
  id: string;
} & RawNoteData;

export type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: string[];
};

export type NoteData = {
  title: string;
  tags: Tag[];
  markdown: string;
};

export type Tag = {
  id: string;
  label: string;
};

function App() {
  const [notes, setNotes] = useLocalStorage<RawNote[]>("NOTES", []);
  const [tags, setTags] = useLocalStorage<Tag[]>("TAGS", []);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return {
        ...note,
        tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
      };
    });
  }, [notes, tags]);

  function onNoteCreate({ tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) },
      ];
    });
  }

  function addTag(tag: Tag) {
    setTags((previous) => [...previous, tag]);
  }

  function onNoteEdit(id: string, { tags, ...data }: NoteData) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return { ...note, ...data, tagIds: tags.map((tag) => tag.id) };
        } else return note;
      });
    });
  }

  function onDeleteNote(id: string) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id);
    });
  }

  function updateTag(id: string, label: string) {
    setTags((prevTags) => {
      return prevTags.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label };
        } else {
          return tag;
        }
      });
    });
  }

  function deleteTag(id: string) {
    setTags((prevTags) => {
      return prevTags.filter((tag) => tag.id !== id);
    });
  }

  return (
    <>
      <div className="app-wrapper">
        <Routes>
          <Route
            path="/"
            element={
              <NoteList
                notes={notesWithTags}
                availableTags={tags}
                onUpdateTag={updateTag}
                onDeleteTag={deleteTag}
              ></NoteList>
            }
          ></Route>

          <Route
            path="/new"
            element={
              <AddNotes
                onSubmit={onNoteCreate}
                onAddTag={addTag}
                availableTags={tags}
              ></AddNotes>
            }
          ></Route>

          <Route path="/:id" element={<NoteLayout notes={notesWithTags} />}>
            <Route
              index
              element={<Note onDelete={onDeleteNote}></Note>}
            ></Route>
            <Route
              path="edit"
              element={
                <EditNote
                  onSubmit={onNoteEdit}
                  onAddTag={addTag}
                  availableTags={tags}
                ></EditNote>
              }
            ></Route>
          </Route>

          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
