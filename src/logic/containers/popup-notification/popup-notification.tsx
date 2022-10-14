import type { FC } from 'react';
import { PopupNotificationComponent } from '../../components/popup-notification';
import { PopupWithDimmerContainer } from '../popup-with-dimmer';
import type { TPopupNotification } from './popup-notification.type';

const PopupNotificationContainer: FC<TPopupNotification> = ({
  title,
  message,
  isOpened,
  onClose,
}) => (
  <PopupWithDimmerContainer isOpened={isOpened} onClose={onClose}>
    <PopupNotificationComponent title={title} message={message} onClose={onClose} />
  </PopupWithDimmerContainer>
);
export { PopupNotificationContainer };
