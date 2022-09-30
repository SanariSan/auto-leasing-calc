import { configureStore } from '@reduxjs/toolkit';
import { todos, fetchTodo } from './slices';

const Store = configureStore({
  reducer: {
    todos,
    fetchTodo,
  },
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // .concat(logger)
});

export { Store };
