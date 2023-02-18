import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../../api";
import { IPost } from "../../shared/interfaces/post.interface";
import { IPostState } from "../interfaces/postsState.interface";

export const getPosts = createAsyncThunk(
  "posts/get-all",
  async (data, thunkApi) => {
    try {
      const { data } = await api.fetchPosts();
      return data.reverse();
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const createPost = createAsyncThunk(
  "posts/create",
  async (post: Omit<IPost, "id">, thunkApi) => {
    try {
      const { data } = await api.createPosts(post);
      return data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/delete",
  async (id: number, thunkApi) => {
    try {
      await api.deletePost(id);
      return id;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

export const updatePost = createAsyncThunk(
  "posts/update",
  async (post: IPost, thunkApi) => {
    try {
      const { data } = await api.updatePost(post);
      console.log("aaaaa", data);
      return data;
    } catch (err: any) {
      return thunkApi.rejectWithValue(err.message);
    }
  }
);

const initialState: IPostState = {
  isLoading: false,
  error: null,
  posts: [],
  selected: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    selectPost(state, action: PayloadAction<number>) {
      state.selected = state.posts.find((post) => post.id === action.payload)!;
    },
    clearSelectedPost(state) {
      state.selected = null!;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.isLoading = false;
        state.error = null;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.isLoading = false;
        state.posts.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = null;
        state.error = action.payload;
      })
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(deletePost.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.posts = state.posts.map((post) =>
          post.id === action.payload.id ? action.payload : post
        );
      })
      .addCase(updatePost.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { selectPost, clearSelectedPost } = postSlice.actions;

export default postSlice.reducer;
