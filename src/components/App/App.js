import React, { useState } from "react";
import AppHeader from "../AppHeader";
import PostAddForm from "../PostAddForm";
import PostList from "../PostList";
import PostStatusFilter from "../PostStatusFilter";
import SearchPanel from "../SearchPanel";
import "./App.css";

let maxID = 4;
export default function App() {
  const [data, setData] = useState([
    {
      label: "Going to learn React JS",
      important: false,
      like: false,
      id: 1,
    },
    { label: "That is so good", important: false, like: false, id: 2 },
    { label: "I need a break...", important: false, like: false, id: 3 },
  ]);

  const [term, setTerm] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteItem = (id) => {
    setData((data) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

      return newArr;
    });
  };

  const addItem = (body) => {
    if (body.length > 0) {
      const newItem = {
        label: body,
        important: false,
        id: maxID++,
      };

      setData((data) => {
        const newArr = [...data, newItem];
        return newArr;
      });
    } else {
      alert("Blank string is not accepted, please enter some text!");
    }
  };

  const onToggleImportant = (id) => {
    setData((data) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, important: !oldItem.important };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return newArr;
    });
  };

  const onToggleLiked = (id) => {
    setData((data) => {
      const index = data.findIndex((elem) => elem.id === id);
      const oldItem = data[index];
      const newItem = { ...oldItem, like: !oldItem.like };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return newArr;
    });
  };

  const searchPost = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.label.indexOf(term) > -1;
    });
  };

  const filterPost = (items, filter) => {
    if (filter === "like") {
      return items.filter((item) => item.like);
    } else {
      return items;
    }
  };

  const onUpdateSearch = (term) => {
    setTerm(term);
  };

  const onFilterSelect = (filter) => {
    setFilter(filter);
  };

  const allPosts = data.length;
  const liked = data.filter((item) => item.like).length;
  const visiblePosts = filterPost(searchPost(data, term), filter);

  return (
    <div className="app">
      <AppHeader allPosts={allPosts} liked={liked} />
      <div className="search-panel d-flex">
        <SearchPanel onUpdateSearch={onUpdateSearch} />
        <PostStatusFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <PostList
        posts={visiblePosts}
        onDelete={deleteItem}
        onToggleImportant={onToggleImportant}
        onToggleLiked={onToggleLiked}
      />
      <PostAddForm onAdd={addItem} />
    </div>
  );
}
