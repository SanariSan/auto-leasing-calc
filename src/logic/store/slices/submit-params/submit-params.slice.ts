import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Request } from '../../../../access-layer/services';
import type { TStore } from '../../store.type';
import type { TInitialState, TInitialStateThunk } from './submit-params.slice.type';

/* eslint-disable no-param-reassign */

const initialState: TInitialState = {
  status: 'idle',
  response: undefined,
  error: undefined,
};

const submitAllParams = createAsyncThunk(
  'submitParams/submitAllParams',
  async (_: undefined, { getState, signal }) => {
    try {
      const state = getState() as ReturnType<TStore['getState']>;
      const body = JSON.stringify({
        carPriceCurrent: state.calcParams.carPrice.carPriceCurrent,
        firstPaymentCurrent: state.calcParams.firstPayment.firstPaymentCurrent,
        firstPaymentPercCurrent: state.calcParams.firstPayment.firstPaymentPercCurrent,
        repaymentLengthCurrent: state.calcParams.repaymentLength.repaymentLengthCurrent,
      });

      const response = await Request.post({
        // url: `https://eoj3r7f3r4ef6v4.m.pipedream.net`,
        url: `https://webhook.site/521a2a69-d51e-495c-bd73-8aa78dfebf46`,
        headers: { 'Content-Type': 'application/json' },
        body,
        abortSignal: signal,
      });

      try {
        return (await response.clone().json()) as Record<string, unknown>;
      } catch {
        return await response.text();
      }
    } catch (error: unknown) {
      console.log(`Req error in thunk _ ${String(error)}`);
      // console.log(error);
      throw error;
    }
  },
  {
    condition: (_: undefined, { getState }) => {
      const state = getState() as TInitialStateThunk;
      const { status } = state.submitParams;

      if (['loading', 'succeeded', 'failed'].includes(status)) {
        return false;
      }
      return true;
    },
  },
);

const submitParamsSlice = createSlice({
  name: 'submitParams',
  initialState,
  reducers: {
    setIdle(state) {
      state.status = 'idle';
    },
  },
  extraReducers(builder) {
    builder
      .addCase(submitAllParams.pending, (state) => {
        state.status = 'loading';
        state.response = undefined;
        state.error = undefined;
      })
      .addCase(submitAllParams.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.response = action.payload;
      })
      .addCase(submitAllParams.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

const submitParams = submitParamsSlice.reducer;
const { setIdle } = submitParamsSlice.actions;

export { submitParams, submitAllParams, setIdle };
