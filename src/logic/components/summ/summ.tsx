import type { FC } from 'react';
import s from './summ.module.scss';
import type { TSumm } from './summ.type';

const SummComponent: FC<TSumm> = ({ amount, symbol }) => (
  <div className={s.amount}>
    {amount} <span className={s.symbol}>{symbol}</span>
  </div>
);
export { SummComponent };
