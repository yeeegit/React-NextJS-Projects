import { NoteData, Tag } from "../App";
import "../index.css";
import { CreateNote } from "./CreateNote";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function EditNote({ onSubmit, onAddTag, availableTags }: EditNoteProps) {
  const note = useNote();

  return (
    <div className="add-note">
      <h1>Edit Note</h1>

      <CreateNote
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      ></CreateNote>
    </div>
  );
}
