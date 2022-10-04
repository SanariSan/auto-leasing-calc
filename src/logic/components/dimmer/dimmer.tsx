import classNames from 'classnames';
import type { FC } from 'react';
import s from './dimmer.module.scss';
import type { TDimmer } from './dimmer.type';

const DimmerComponent: FC<TDimmer> = ({ dimmed = false, type = 'white', workArea = 'local' }) => (
  <div
    style={{
      visibility: dimmed ? 'visible' : 'hidden',
      opacity: dimmed ? '0.4' : '0',
      position: workArea === 'local' ? 'absolute' : 'fixed',
    }}
    className={classNames(dimmed ? s.dimmer : undefined, type === 'white' ? s.white : s.black)}
  ></div>
);

export { DimmerComponent };
