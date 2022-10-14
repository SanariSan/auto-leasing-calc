import type { MouseEventHandler, ReactNode } from 'react';

type TPopupWithDimmer = {
  children: ReactNode;
  isOpened: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

export type { TPopupWithDimmer };
