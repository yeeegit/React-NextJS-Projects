import { FormEvent, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import { NoteData, Tag } from "../App";
import { v4 as uuidV4 } from "uuid";

type NoteFormProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
} & Partial<NoteData>;

export function CreateNote({
  onSubmit,
  onAddTag,
  availableTags,
  title = "",
  markdown = "",
  tags = [],
}: NoteFormProps) {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = useState<Tag[]>(tags);
  const navigate = useNavigate();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    onSubmit({
      title: titleRef.current!.value,
      markdown: markdownRef.current!.value,
      tags: selectedTags,
    });
    navigate("..");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="note-form-wrapper">
        <div className="note-form-row">
          <div className="note-form-col">
            <div className="note-form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                required
                defaultValue={title}
                className="note-form-control"
                ref={titleRef}
              />
            </div>
          </div>
          <div className="note-form-col">
            <div className="note-form-group">
              <label htmlFor="tags">Tags</label>

              <CreatableSelect
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label };
                  onAddTag(newTag);
                  setSelectedTags((previous) => [...previous, newTag]);
                }}
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id };
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return {
                        label: tag.label,
                        id: tag.value,
                      };
                    })
                  );
                }}
              ></CreatableSelect>
            </div>
          </div>
        </div>
        <div className="note-form-group">
          <label htmlFor="markdown">Body</label>
          <textarea
            defaultValue={markdown}
            id="markdown"
            required
            rows={15}
            className="note-form-control"
            ref={markdownRef}
          ></textarea>
        </div>
        <div
          className="note-form-wrapper"
          style={{ justifyContent: "flex-end" }}
        >
          <button type="submit" className="edit-button edit-button-primary">
            Save
          </button>

          <Link to=".." className="edit-button edit-secondary">
            Cancel
          </Link>
        </div>
      </div>
    </form>
  );
}
