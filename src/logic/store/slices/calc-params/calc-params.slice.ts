import { createSlice } from '@reduxjs/toolkit';
import { INITIAL_STATE } from './calc-params.const';

/* eslint-disable no-param-reassign */

const calcParamsSlice = createSlice({
  name: 'calcParams',
  initialState: INITIAL_STATE,
  reducers: {
    setCarPrice(state, action: { payload: string }) {
      const { payload } = action;
      const {
        carPrice: { carPriceMin, carPriceMax },
        firstPayment: { firstPaymentPercCurrent },
        carPrice,
        firstPayment,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      let payloadInt = Number.parseInt(payload, 10);

      if (payloadInt < carPriceMin) payloadInt = carPriceMin;
      else if (payloadInt > carPriceMax) payloadInt = carPriceMax;

      carPrice.carPriceCurrent = payloadInt;
      // when car price changed - recalculate firstPayment value
      firstPayment.firstPaymentCurrent = Math.round((payloadInt / 100) * firstPaymentPercCurrent);
    },
    setFirstPayment(state, action: { payload: string }) {
      const { payload } = action;
      const {
        carPrice: { carPriceCurrent },
        firstPayment: { firstPaymentPercMin, firstPaymentPercMax },
        firstPayment,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      const derivedFirstPaymentMin = (carPriceCurrent / 100) * firstPaymentPercMin;
      const derivedFirstPaymentMax = (carPriceCurrent / 100) * firstPaymentPercMax;
      let payloadInt = Number.parseInt(payload, 10);

      if (payloadInt < derivedFirstPaymentMin) payloadInt = derivedFirstPaymentMin;
      else if (payloadInt > derivedFirstPaymentMax) payloadInt = derivedFirstPaymentMax;

      firstPayment.firstPaymentCurrent = payloadInt;
      // when payment changed - recalculate firstPaymentPerc value
      firstPayment.firstPaymentPercCurrent = Math.round((payloadInt / carPriceCurrent) * 100);
    },
    setFirstPaymentPerc(state, action: { payload: string }) {
      const { payload } = action;
      const {
        carPrice: { carPriceCurrent },
        firstPayment: { firstPaymentPercMin, firstPaymentPercMax },
        firstPayment,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      let payloadInt = Number.parseInt(payload, 10);

      if (payloadInt < firstPaymentPercMin) payloadInt = firstPaymentPercMin;
      else if (payloadInt > firstPaymentPercMax) payloadInt = firstPaymentPercMax;

      firstPayment.firstPaymentPercCurrent = payloadInt;
      // when percent changed - recalculate firstPayment value
      firstPayment.firstPaymentCurrent = Math.round((carPriceCurrent / 100) * payloadInt);
    },
    setRepaymentLength(state, action: { payload: string }) {
      const { payload } = action;
      const {
        repaymentLength: { repaymentLengthMin, repaymentLengthMax },
        repaymentLength,
      } = state;

      if (!/^\d+$/gi.test(payload)) return;

      let payloadInt = Number.parseInt(payload, 10);

      if (payloadInt < repaymentLengthMin) payloadInt = repaymentLengthMin;
      else if (payloadInt > repaymentLengthMax) payloadInt = repaymentLengthMax;

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

      summ.totalPayment = Math.round(
        firstPaymentCurrent + repaymentLengthCurrent * monthlyRepayment,
      );
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

      const interestRate = 0.035;
      summ.monthlyRepayment = Math.round(
        ((carPriceCurrent - firstPaymentCurrent) *
          (interestRate * (1 + interestRate) ** repaymentLengthCurrent)) /
          ((1 + interestRate) ** repaymentLengthCurrent - 1),
      );
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
