import type { MouseEventHandler } from 'react';

type TPopupNotification = {
  title?: string;
  message: string;
  isOpened: boolean;
  onClose: MouseEventHandler<HTMLElement>;
};

export type { TPopupNotification };
