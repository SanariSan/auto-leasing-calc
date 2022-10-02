import type { FC, ReactNode } from 'react';
import s from './button.module.scss';

type TButton = {
  children: ReactNode;
};

const ButtonComponent: FC<TButton> = ({ children }) => (
  <button className={s.btn}>{children}</button>
);
export { ButtonComponent };
