import type { TRootState } from '../../store.type';

const carPriceSelector = (state: TRootState) => state.calcParams.carPrice;
const firstPaymentSelector = (state: TRootState) => state.calcParams.firstPayment;
const repaymentLengthSelector = (state: TRootState) => state.calcParams.repaymentLength;
const summSelector = (state: TRootState) => state.calcParams.summ;

export { carPriceSelector, firstPaymentSelector, repaymentLengthSelector, summSelector };
