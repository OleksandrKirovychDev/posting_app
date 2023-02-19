import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

import * as api from '../../api';
import { IComment } from '../../shared/entities/comment.entity';
import { IPost } from '../../shared/entities/post.entity';
import { IPostDetaisState } from '../interfaces/postDetailsState.interface';

export const getPostDetails = createAsyncThunk(
  'postDetails/getPostDetails',
  async (id: number, thunkApi) => {
    try {
      const { data } = await api.getPostDetails(id);
      return data;
    } catch (err: any) {
      alert(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

export const postComment = createAsyncThunk(
  'postDetails/postComment',
  async (comment: Omit<IComment, 'id'>, thunkApi) => {
    try {
      console.log(comment);
      await api.postComment(comment);
      return comment;
    } catch (err: any) {
      alert(err.message);
      return thunkApi.rejectWithValue(err.message);
    }
  },
);

const initialState: IPostDetaisState = {
  isLoading: false,
  isCommentLoading: false,
  error: null,
  post: null,
  comments: [],
};

const postDetailsSlice = createSlice({
  name: 'postDetails',
  initialState,
  reducers: {
    discardPostDetails(state) {
      state.post = null;
      state.comments = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getPostDetails.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPostDetails.fulfilled,
        (state, action: PayloadAction<IPost & { comments: IComment[] }>) => {
          state.isLoading = false;
          state.error = null;
          state.post = action.payload;
          state.comments = action.payload.comments;
        },
      )
      .addCase(getPostDetails.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(postComment.pending, (state) => {
        state.isCommentLoading = true;
      })
      .addCase(
        postComment.fulfilled,
        (state, action: PayloadAction<Omit<IComment, 'id'>>) => {
          state.isCommentLoading = false;
          state.error = null;
          state.comments.push({
            ...action.payload,
            id: Math.ceil(Math.random() * 100),
          });
        },
      )
      .addCase(postComment.rejected, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { discardPostDetails } = postDetailsSlice.actions;

export default postDetailsSlice.reducer;
