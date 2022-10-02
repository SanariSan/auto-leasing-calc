import type { FC } from 'react';
import s from './summ.module.scss';

type TSumm = {
  amount: number | string;
};

const SummComponent: FC<TSumm> = ({ amount }) => (
  <div className={s.amount}>
    {amount} <span className={s.symbol}>₽</span>
  </div>
);
export { SummComponent };
