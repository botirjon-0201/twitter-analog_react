import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      label: "Going to learn React",
      important: false,
      like: false,
      id: 1,
    },
    { label: "That is so good", important: false, like: false, id: 2 },
    { label: "I need a break...", important: false, like: false, id: 3 },
  ],
  term: "",
  filter: "all",
  text: "",
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setTerm(state, action) {
      state.term = action.payload;
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setText(state, action) {
      state.text = action.payload;
    },
  },
});

export const { setData, setTerm, setFilter, setText } = mainSlice.actions;
export default mainSlice.reducer;
