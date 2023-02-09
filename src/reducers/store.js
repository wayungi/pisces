import { configureStore } from '@reduxjs/toolkit';
import fishReducer from './fishSlice';

const store = configureStore({
  reducer: {
    fish: fishReducer,
  },
});

export default store;
