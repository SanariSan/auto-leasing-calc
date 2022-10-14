import type { MouseEventHandler, ReactNode } from 'react';

type TButton = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  size?: 'small' | 'medium' | 'big';
};

export type { TButton };
