type TSuccessResponse = {
  success: boolean;
  [key: string]: unknown;
};

type TInitialState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  response: TSuccessResponse | undefined;
  error: string | undefined;
};

export type { TInitialState, TSuccessResponse };
