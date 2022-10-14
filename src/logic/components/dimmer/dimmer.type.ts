import type { MouseEventHandler } from 'react';

type TDimmer = {
  dimmed: boolean;
  color?: 'black' | 'white';
  onClose?: MouseEventHandler<HTMLDivElement>;
};

export type { TDimmer };
