import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// project base url : https://www.fishwatch.gov/api/species'
// json server url:   http://localhost:3001/fish
const baseUrl = 'http://localhost:3001/fish';
const initialState = [];

export const fetchFish = createAsyncThunk('fish/fetchFish', async () => {
  const response = await axios.get(baseUrl);
  const result = response.data;
  return result;
});
export const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFish.fulfilled, (state, action) => action.payload);
  },
});

// Action creators are generated for each case reducer function
export const selectAllFish = (state) => state.fish;
export const selectFish = (state, species) => state.fish.find((x) => x['Scientific Name'] === species);

export default fishSlice.reducer;
