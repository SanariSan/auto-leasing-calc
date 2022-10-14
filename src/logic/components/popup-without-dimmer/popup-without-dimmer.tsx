import classNames from 'classnames';
import type { FC } from 'react';
import s from './popup-without-dimmer.module.scss';
import type { TPopupWithoutDimmer } from './popup-without-dimmer.type';

const PopupWithoutDimmerComponent: FC<TPopupWithoutDimmer> = ({ children, isOpened }) => (
  <div className={classNames(s.popup, isOpened ? s.visible : s.hidden)}>{children}</div>
);

export { PopupWithoutDimmerComponent };
