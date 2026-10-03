import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
};

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        addPost: (state, action) => {
            state.posts.push(action.payload);
        },
        updatePostState: (state, action) => {
            state.posts = state.posts.map((post) =>
                post.$id === action.payload.$id ? action.payload : post
            );
        },
        deletePostState: (state, action) => {
            state.posts = state.posts.filter((post) => post.$id !== action.payload);
        },
    },
});

export const { setPosts, addPost, updatePostState, deletePostState } = postSlice.actions;
export default postSlice.reducer;