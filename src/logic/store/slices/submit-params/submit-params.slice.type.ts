type TInitialState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  response: Record<string, unknown> | string | undefined;
  error: string | undefined;
};

type TInitialStateThunk = {
  submitParams: TInitialState;
};

export type { TInitialState, TInitialStateThunk };
