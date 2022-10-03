import type { ReactElement } from 'react';

type TRangeController = {
  min: number;
  max: number;
  current: number;
  hintTitle: string;
  hintRight?: ReactElement;
};

export type { TRangeController };
