import React from "react";
import "./PostAddForm.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import { setText } from "../../redux/reducers/main_slice";

export default function PostAddForm() {
  const { data, text } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(text, data));
    dispatch(setText(""));
  };

  return (
    <form className="bottom-panel d-flex" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="What are you thinking about?"
        className="form-control new-post-label"
        value={text}
        onChange={(e) => dispatch(setText(e.target.value))}
      />
      <button type="submit" className="btn btn-outline-secondary">
        Add Post
      </button>
    </form>
  );
}
