import type { FC } from 'react';
import s from './screen-res.module.scss';
import type { TScreenRes } from './screen-res.type';

const ScreenResComponent: FC<TScreenRes> = ({ w, h }) => (
  <div
    className={s.res}
    onClick={(evt) => {
      const e = evt;
      e.currentTarget.hidden = true;
    }}
  >{`${w} x ${h}`}</div>
);

export { ScreenResComponent };
