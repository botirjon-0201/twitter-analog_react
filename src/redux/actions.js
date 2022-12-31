import { v4 } from "uuid";
import { setData } from "./reducers/main_slice";

export const deleteItem = (id, data) => (dispatch) => {
  const index = data.findIndex((elem) => elem.id === id);
  const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
  dispatch(setData(newArr));
};

export const addItem = (body, data) => (dispatch) => {
  if (body.length > 0) {
    const newItem = {
      label: body,
      important: false,
      id: v4(),
    };
    dispatch(setData([...data, newItem]));
  } else {
    alert("Blank string is not accepted, please enter some text!");
  }
};

export const onToggleImportant = (id, data) => (dispatch) => {
  const index = data.findIndex((elem) => elem.id === id);
  const oldItem = data[index];
  const newItem = { ...oldItem, important: !oldItem.important };
  const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
  dispatch(setData(newArr));
};

export const onToggleLiked = (id, data) => (dispatch) => {
  const index = data.findIndex((elem) => elem.id === id);
  const oldItem = data[index];
  const newItem = { ...oldItem, like: !oldItem.like };
  const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
  dispatch(setData(newArr));
};

export const searchPost = (items, term) => {
  return term.length === 0
    ? items
    : items.filter((item) => item.label.indexOf(term) > -1);
};

export const filterPost = (items, filter) => {
  return filter === "like" ? items.filter((item) => item.like) : items;
};
