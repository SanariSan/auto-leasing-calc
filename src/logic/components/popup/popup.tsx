import type { FC } from 'react';
import { DimmerComponent } from '../dimmer';
import s from './popup.module.scss';
import type { TPopup } from './popup.type';

const PopupComponent: FC<TPopup> = ({ visible, text }) => (
  <>
    <div
      style={{ visibility: visible ? 'visible' : 'hidden', opacity: visible ? '0.6' : '0' }}
      className={s.popup}
    >
      <p>{text}</p>
    </div>
    <DimmerComponent dimmed={visible} type={'black'} workArea={'global'} />
  </>
);

export { PopupComponent };
