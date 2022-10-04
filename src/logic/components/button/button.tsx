import classNames from 'classnames';
import type { FC } from 'react';
import s from './button.module.scss';
import type { TButton } from './button.type';

const ButtonComponent: FC<TButton> = ({ children, onClick, disabled = false, loading = false }) => (
  <button disabled={disabled} className={classNames(s.btn)} onClick={onClick}>
    {loading ? <span className={s.circle}></span> : children}
  </button>
);
export { ButtonComponent };
