import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slice/TodoSlice';

const store = configureStore({
  reducer: {
    todoReducer
  }
});

export default store;
