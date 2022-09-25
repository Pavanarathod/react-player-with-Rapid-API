import { configureStore } from "@reduxjs/toolkit";
import playerSlice from "./features/playerSlice";
import shazamAPI from "./services/shazamCore";

const store = configureStore({
  reducer: {
    [shazamAPI.reducerPath]: shazamAPI.reducer,
    palyer: playerSlice.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(shazamAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
