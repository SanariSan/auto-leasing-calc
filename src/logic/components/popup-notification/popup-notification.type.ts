import type { MouseEventHandler } from 'react';

type TPopupNotification = {
  title?: string;
  message: string;
  onClose?: MouseEventHandler<HTMLElement>;
};

export type { TPopupNotification };
