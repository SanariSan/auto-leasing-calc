import type { MouseEventHandler, ReactNode } from 'react';

type TPopupWithoutDimmer = {
  children: ReactNode;
  isOpened: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

export type { TPopupWithoutDimmer };
