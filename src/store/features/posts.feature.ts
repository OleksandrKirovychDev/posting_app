import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import * as api from "../../api";
import { IPost } from "../../shared/interfaces/post.interface";
import { IPostState } from "../interfaces/postsState.interface";

export const getPosts = createAsyncThunk(
  "posts/get-all",
  async (data, thunkApi) => {
    try {
      const { data } = await api.fetchPosts();
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
};

const postSice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<IPost[]>) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default postSice.reducer;
