import { createSlice } from "@reduxjs/toolkit";
const articleSlice = createSlice({
  name: "user",
  initialState: {
    article: "",
  },
  reducers: {
    changeArticle(state, { payload }) {
      state.article = payload;
    },
  },
});

export const { changeArticle } = articleSlice.actions;
export default articleSlice.reducer;
