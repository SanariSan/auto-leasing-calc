import type { MouseEventHandler, ReactNode } from 'react';

type TButton = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
};

export type { TButton };
