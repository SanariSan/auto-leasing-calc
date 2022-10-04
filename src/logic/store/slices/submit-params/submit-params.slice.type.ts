type TInitialState = {
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  response: Record<string, unknown> | string | undefined;
  error: string | undefined;
};

export type { TInitialState };
