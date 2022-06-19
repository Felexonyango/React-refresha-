import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "../features/counter/counterSlice"
import PostReducer from "../features/Posts/PostSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts:PostReducer
  },
})