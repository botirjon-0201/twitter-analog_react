import React, { useState } from "react";
import "./PostAddForm.css";

export default function PostAddForm({ onAdd }) {
  const [text, setText] = useState("");

  const onValueChange = (evnt) => {
    setText(evnt.target.value);
  };

  const onSubmit = (evnt) => {
    evnt.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
        onChange={onValueChange}
        value={text}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
}
