import React from "react";
import { useDispatch } from "react-redux";
import { setTerm } from "../../redux/reducers/main_slice";
import "./SearchPanel.css";

export default function SearchPanel() {
  const dispatch = useDispatch();

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search by post"
      onChange={(e) => dispatch(setTerm(e.target.value))}
    />
  );
}
