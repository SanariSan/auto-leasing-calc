import type { FC } from 'react';
import s from './button.module.scss';
import type { TButton } from './button.type';

const ButtonComponent: FC<TButton> = ({ children }) => (
  <button className={s.btn}>{children}</button>
);
export { ButtonComponent };
