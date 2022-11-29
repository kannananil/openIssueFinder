import { configureStore } from '@reduxjs/toolkit';
import { reposReducer } from './slices/repos';

export const store = configureStore({
  reducer: { repos: reposReducer },
  devTools: true,
});