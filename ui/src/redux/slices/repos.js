import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { searchRepositories } from '../../api';

const initialState = { reposData: { value: {}, progress: null, error: null }, isLoading: true };

const fetchRepos = createAsyncThunk('/github', async () => {
  const reposData = await searchRepositories();
  return { reposData };
});

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: {
    [ fetchRepos.pending.type ]: (state) => {
      state.reposData = { value: {}, progress: 'Fetching Data.', error: null };
      state.isLoading = true;
    },
    [ fetchRepos.fulfilled.type ]: (state, action) => {
      state.reposData = { value: action.payload.reposData, progress: null, error: null };
      state.isLoading = false;
    },
    [ fetchRepos.rejected.type ]: (state, action) => {
      state.reposData = { value: {}, progress: null, error: action.error.message };
    },
  },
});

export const reposReducer = reposSlice.reducer;

export const reposActions = { fetchRepos };
