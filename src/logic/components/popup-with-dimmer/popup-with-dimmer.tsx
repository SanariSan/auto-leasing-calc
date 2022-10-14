import classNames from 'classnames';
import type { FC } from 'react';
import { DimmerComponent } from '../dimmer';
import s from './popup-with-dimmer.module.scss';
import type { TPopupWithDimmer } from './popup-with-dimmer.type';

const PopupWithDimmerComponent: FC<TPopupWithDimmer> = ({ children, isOpened, onClose }) => (
  <div className={classNames(s.popup, isOpened ? s.visible : s.hidden)}>
    <DimmerComponent dimmed={isOpened} color={'black'} onClose={onClose} />
    {children}
  </div>
);

export { PopupWithDimmerComponent };
