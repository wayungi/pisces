import { configureStore } from '@reduxjs/toolkit'
import fishReducer from './fishSlice';

export const store = configureStore({
  reducer: {
    fish: fishReducer,
  },
})