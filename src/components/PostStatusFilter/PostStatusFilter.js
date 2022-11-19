import React from "react";

export default function PostStatusFilter({ filter, onFilterSelect }) {
  const buttonsList = [
    { name: "all", label: "All" },
    { name: "like", label: "Liked" },
  ];

  const buttons = buttonsList.map(({ name, label }) => {
    const active = filter === name;
    const clazz = active ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        key={name}
        type="button"
        className={`btn ${clazz}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}
