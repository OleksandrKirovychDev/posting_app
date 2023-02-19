import { configureStore } from '@reduxjs/toolkit';

import postSlice from './features/posts.feature';
import postDetailsSlice from './features/postDetails.feature';

export const store = configureStore({
  reducer: { posts: postSlice, postDetails: postDetailsSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
