import classNames from 'classnames';
import type { FC } from 'react';
import s from './dimmer.module.scss';
import type { TDimmer } from './dimmer.type';

const DimmerComponent: FC<TDimmer> = ({ dimmed = false, color = 'white', onClose }) => (
  <div
    role={'button'}
    onClick={onClose}
    className={classNames(
      s.dimmer,
      dimmed ? s.visible : s.hidden,
      color === 'white' ? s.white : s.black,
    )}
  ></div>
);

export { DimmerComponent };
