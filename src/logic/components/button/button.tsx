import classNames from 'classnames';
import type { FC } from 'react';
import s from './button.module.scss';
import type { TButton } from './button.type';

const ButtonComponent: FC<TButton> = ({
  children,
  onClick,
  disabled = false,
  loading = false,
  size = 'medium',
}) => {
  let sizeClass: string = size;

  if (size === 'small') sizeClass = s.small;
  else if (size === 'medium') sizeClass = s.medium;
  else sizeClass = s.big;

  return (
    <button disabled={disabled} className={classNames(s.btn, sizeClass)} onClick={onClick}>
      {loading ? <span className={s.circle}></span> : children}
    </button>
  );
};
export { ButtonComponent };
