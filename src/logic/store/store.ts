import { configureStore } from '@reduxjs/toolkit';
import { calcParams, submitParams } from './slices';

const Store = configureStore({
  reducer: {
    calcParams,
    submitParams,
  },
});

export { Store };
