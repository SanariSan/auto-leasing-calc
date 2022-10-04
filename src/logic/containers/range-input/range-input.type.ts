import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';

type TRangeInput = {
  current: number | string;
  prepend?: string;
  postpend?: string;
  template?: ({ value }: { value: string }) => string;
  deTemplate?: ({ value }: { value: string }) => string;
  maxInputLength?: number;
  actionCreator: ActionCreatorWithPayload<any>;
  type?: 'default' | 'overlay';
};

export type { TRangeInput };
