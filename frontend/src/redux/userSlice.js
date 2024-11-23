import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const initialState = {
  posts: [],
};

const userSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPost: (state, action) => {
      state.posts = action.payload; // Actualiza los posts en el estado
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload); // Elimina el post con el id proporcionado
    },
    createPost: (state, action) => {
      // Agrega el nuevo post al estado
      state.posts.push(action.payload);
    },
  },
});

export const { setPost, deletePost, createPost } = userSlice.actions;

export default userSlice.reducer;
