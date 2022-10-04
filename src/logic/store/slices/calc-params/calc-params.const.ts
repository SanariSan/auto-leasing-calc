import type { TInitialState } from './calc-params.type';

const INITIAL_STATE: TInitialState = {
  carPrice: {
    carPriceMin: 1_000_000,
    carPriceMax: 6_000_000,
    carPriceCurrent: 3_300_000,
  },
  firstPayment: {
    firstPaymentCurrent: 420_000,
    firstPaymentPercMin: 10,
    firstPaymentPercMax: 60,
    firstPaymentPercCurrent: 13,
  },
  repaymentLength: {
    repaymentLengthMin: 1,
    repaymentLengthMax: 60,
    repaymentLengthCurrent: 60,
  },
  summ: {
    totalPayment: 7_347_300,
    monthlyRepayment: 115_455,
  },
};

export { INITIAL_STATE };
