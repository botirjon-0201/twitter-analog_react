import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/reducers/main_slice";

export default function PostStatusFilter() {
  const { filter } = useSelector((state) => state);
  const dispatch = useDispatch();

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
        onClick={() => dispatch(setFilter(name))}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}
