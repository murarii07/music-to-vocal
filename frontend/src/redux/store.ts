import { configureStore } from '@reduxjs/toolkit';
import audioPlay from './audio'

const store = configureStore({
  reducer: {
    // Add your reducers here
    audioPlay:audioPlay
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
