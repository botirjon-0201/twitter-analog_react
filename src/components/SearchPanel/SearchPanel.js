import React, { useState } from "react";
import "./SearchPanel.css";

export default function SearchPanel(props) {
  const [term, setTerm] = useState("");

  const onUpdateSearch = (evnt) => {
    const term = evnt.target.value;
    setTerm(term);
    props.onUpdateSearch(term);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Search by post"
      onChange={onUpdateSearch}
    />
  );
}
