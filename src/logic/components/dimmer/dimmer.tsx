import type { FC } from 'react';
import s from './dimmer.module.scss';
import type { TDimmer } from './dimmer.type';

const DimmerComponent: FC<TDimmer> = ({ dimmed = false }) => (
  <div className={dimmed ? s.dimmer : undefined}></div>
);

export { DimmerComponent };
