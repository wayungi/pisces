import { createSlice,  createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const baseUrl = 'https://www.fishwatch.gov/api/species';
const initialState = [];


export const fetchFish = createAsyncThunk('fish/fetchFish', async () => {
    const response = await axios.get(baseUrl);
    const result = response.data;
    return result;
  }
)
export const fishSlice = createSlice({
  name: 'fish',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFish.fulfilled, (state, action) => {
      state.push(action.payload)
    })
  },
});

// Action creators are generated for each case reducer function
export const selectAllFish = (state) => state.fish;
export default fishSlice.reducer