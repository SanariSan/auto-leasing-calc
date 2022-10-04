type TInitialState = {
  carPrice: {
    carPriceMin: number;
    carPriceMax: number;
    carPriceCurrent: number;
  };
  firstPayment: {
    // firstPaymentMin: number;
    // firstPaymentMax: number;
    firstPaymentCurrent: number;
    firstPaymentPercMin: number;
    firstPaymentPercMax: number;
    firstPaymentPercCurrent: number;
  };
  repaymentLength: {
    repaymentLengthMin: number;
    repaymentLengthMax: number;
    repaymentLengthCurrent: number;
  };
  summ: {
    totalPayment: number;
    monthlyRepayment: number;
  };
};

export type { TInitialState };
