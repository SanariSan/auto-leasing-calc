import classNames from 'classnames';
import type { FC } from 'react';
import { ButtonComponent } from '../button';
import s from './popup-notification.module.scss';
import type { TPopupNotification } from './popup-notification.type';

const PopupNotificationComponent: FC<TPopupNotification> = ({ title, message, onClose }) => (
  <div className={s.popup}>
    <div className={s.section}>
      <h3 className={s.title}>{title ?? 'Notification'}</h3>
    </div>
    <span className={s.delimiter} />
    <div className={s.section}>
      <div className={classNames(s.message)}>{message}</div>
    </div>
    <span className={s.delimiter} />
    <div className={classNames(s.section, s.button)}>
      <ButtonComponent size="small" onClick={onClose}>
        ok
      </ButtonComponent>
    </div>
  </div>
);

export { PopupNotificationComponent };
