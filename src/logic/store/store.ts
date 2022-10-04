import { configureStore } from '@reduxjs/toolkit';
import { calcParams, submitParams } from './slices';

const Store = configureStore({
  reducer: {
    calcParams,
    submitParams,
  },
  // https://redux-toolkit.js.org/api/getDefaultMiddleware
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(), // .concat(logger)
});

export { Store };
