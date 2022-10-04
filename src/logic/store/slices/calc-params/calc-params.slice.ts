import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './calc-params.const';

/* eslint-disable no-param-reassign */

// TODO: recheck calculations just in case

const calcTotalPayment = ({
  firstPaymentCurrent,
  repaymentLengthCurrent,
  monthlyRepayment,
}: Record<string, number>) =>
  Math.floor(firstPaymentCurrent + repaymentLengthCurrent * monthlyRepayment);

const calcMonthlyRepayment = ({
  carPriceCurrent,
  firstPaymentCurrent,
  repaymentLengthCurrent,
}: Record<string, number>) =>
  Math.floor(
    ((carPriceCurrent - firstPaymentCurrent) * (0.035 * (1 + 0.035) ** repaymentLengthCurrent)) /
      ((1 + 0.035) ** repaymentLengthCurrent - 1),
  );

const calcParamsSlice = createSlice({
  name: 'calcParams',
  initialState: INITIAL_STATE,
  reducers: {
    setCarPrice(state, action: { payload: string }) {
      const { payload } = action;
      const {
        carPrice: { carPriceMin, carPriceMax },
        carPrice,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      let payloadInt = Number.parseInt(payload, 10);

      if (payloadInt < carPriceMin) payloadInt = carPriceMin;
      else if (payloadInt > carPriceMax) payloadInt = carPriceMax;

      carPrice.carPriceCurrent = payloadInt;
    },
    // -------------------------------------------------------------------------------------------
    setFirstPayment(state, action: { payload: number }) {
      state.firstPayment.firstPaymentCurrent = action.payload;
    },
    setFirstPaymentPerc(state, action: { payload: number }) {
      const {
        carPrice: { carPriceCurrent },
        firstPayment,
      } = state;

      // when percent changed - recalculate firstPayment value
      firstPayment.firstPaymentPercCurrent = action.payload;
      firstPayment.firstPaymentCurrent = (carPriceCurrent / 100) * action.payload;
    },
    // -------------------------------------------------------------------------------------------
    setRepaymentLength(state, action: { payload: string }) {
      const { payload } = action;
      const {
        repaymentLength: { repaymentLengthMin, repaymentLengthMax },
        repaymentLength,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      let payloadInt = Number.parseInt(payload, 10);
      console.log(payloadInt);

      if (payloadInt < repaymentLengthMin) payloadInt = repaymentLengthMin;
      else if (payloadInt > repaymentLengthMax) payloadInt = repaymentLengthMax;

      console.log(payloadInt);

      repaymentLength.repaymentLengthCurrent = payloadInt;
    },
    // DISPATCH FROM TARGET CONTAINER
    // WHEN VALUES(firstPaymentCurrent, repaymentLengthCurrent, monthlyRepayment) CHANGE
    updateTotalPayment(state) {
      const {
        firstPayment: { firstPaymentCurrent },
        repaymentLength: { repaymentLengthCurrent },
        summ: { monthlyRepayment },
        summ,
      } = state;

      summ.totalPayment = calcTotalPayment({
        firstPaymentCurrent,
        repaymentLengthCurrent,
        monthlyRepayment,
      });
    },
    // DISPATCH FROM TARGET CONTAINER
    // WHEN VALUES(firstPaymentCurrent, repaymentLengthCurrent, carPriceCurrent) CHANGE
    updateMonthlyRepayment(state) {
      const {
        carPrice: { carPriceCurrent },
        firstPayment: { firstPaymentCurrent },
        repaymentLength: { repaymentLengthCurrent },
        summ,
      } = state;

      summ.monthlyRepayment = calcMonthlyRepayment({
        carPriceCurrent,
        firstPaymentCurrent,
        repaymentLengthCurrent,
      });
    },
  },
});

const calcParams = calcParamsSlice.reducer;
const {
  setCarPrice,
  setFirstPayment,
  setFirstPaymentPerc,
  setRepaymentLength,
  updateTotalPayment,
  updateMonthlyRepayment,
} = calcParamsSlice.actions;

export {
  calcParams,
  setCarPrice,
  setFirstPayment,
  setFirstPaymentPerc,
  setRepaymentLength,
  updateTotalPayment,
  updateMonthlyRepayment,
};
