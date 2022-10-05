import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Request } from '../../../../access-layer/services';
import { sleep } from '../../../../helpers/util';
import type { TStore } from '../../store.type';
import { ThunkError } from './submit-params.error';
import type { TInitialState, TSuccessResponse } from './submit-params.slice.type';

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
        totalPayment: state.calcParams.summ.totalPayment,
        monthlyRepayment: state.calcParams.summ.monthlyRepayment,
      });

      const startTime = Date.now();
      const response = await Request.post({
        url:
          process.env.NODE_ENV === 'production'
            ? process.env.REACT_APP_BACKEND_URL_PROD
            : process.env.REACT_APP_BACKEND_URL_DEV,
        headers: { 'Content-Type': 'application/json' },
        body,
        abortSignal: signal,
      });
      const endTime = Date.now();
      const diff = endTime - startTime;

      // manual throttle for loading showcase, min load time is 1.5 seconds here
      if (diff < 1500) {
        await sleep(1500 - diff);
      }

      const responseJson = (await response.clone().json()) as TSuccessResponse;

      console.log(response);
      console.log(responseJson);

      return responseJson;
    } catch (error: unknown) {
      const thunkError = new ThunkError((error as Error).message, {
        where: 'Send summ data request',
      });

      console.log(JSON.stringify(thunkError));

      throw thunkError;
    }
  },
  {
    condition: (_: undefined, { getState }) => {
      const state = getState() as ReturnType<TStore['getState']>;
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
