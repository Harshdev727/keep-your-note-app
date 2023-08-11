import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

function Note(props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);

  function handleEditNote() {
    setEditMode(true);
  }

  function handleNoteTitle(event) {
    setTitle(event.target.value);
  }
  function handleNoteContent(event) {
    setContent(event.target.value);
  }

  function handleSave() {
    props.onEdit(props.id, title, content);
    setEditMode(false);
  }
  if (editMode) {
    return (
      <div className="note editable-node">
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            value={title}
            onChange={handleNoteTitle}
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
        </Box>
        <Box sx={{ marginBottom: 2 }}>
          <TextField
            id="outlined-textarea"
            label="Content"
            multiline
            value={content}
            onChange={handleNoteContent}
          />
        </Box>
        {/* <textarea /> */}
        <button onClick={handleSave}>Save</button>
      </div>
    );
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button
        onClick={() => {
          props.onDelete(props.id);
        }}
      >
        <DeleteIcon />
      </button>
      <button onClick={handleEditNote}>
        <EditNoteIcon />
      </button>
    </div>
  );
}

export default Note;
