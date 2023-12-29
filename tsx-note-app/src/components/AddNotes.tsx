import { NoteData, Tag } from "../App";
import "../index.css";
import { CreateNote } from "./CreateNote";

type NewNoteProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export function AddNotes({ onSubmit, onAddTag, availableTags }: NewNoteProps) {
  return (
    <div className="add-note">
      <h1>Add Note</h1>

      <CreateNote
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      ></CreateNote>
    </div>
  );
}
