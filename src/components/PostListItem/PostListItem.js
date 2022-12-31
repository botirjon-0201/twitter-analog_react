import React from "react";
import "./PostListItem.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  onToggleImportant,
  onToggleLiked,
} from "../../redux/actions";

export default function PostListItem(props) {
  const { id, label, important, like } = props;
  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  let classNames = "app-list-item d-flex justify-content-between";
  classNames += important ? " important" : "";
  classNames += like ? " like" : "";

  return (
    <div className={classNames}>
      <span
        className="app-list-item-label"
        onClick={() => dispatch(onToggleLiked(id, data))}
      >
        {label}
      </span>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-star btn-sm"
          onClick={() => dispatch(onToggleImportant(id, data))}
        >
          <i className="fa fa-star"></i>
        </button>
        <button
          type="button"
          onClick={() => dispatch(deleteItem(id, data))}
          className="btn-trash btn-sm"
        >
          <i className="fa fa-trash"></i>
        </button>
        <i className="fa-solid fa-thumbs-up"></i>
      </div>
    </div>
  );
}
