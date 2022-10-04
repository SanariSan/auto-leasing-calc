import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import type { ReactElement } from 'react';

type TRangeController<> = {
  min: number;
  max: number;
  current: number;
  actionCreator: ActionCreatorWithPayload<any>;
  hintTitle: string;
  hintRight?: ReactElement;
};

export type { TRangeController };
