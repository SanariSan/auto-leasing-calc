import type { FC } from 'react';
import s from './hint-right.module.scss';

const HintRightComponent: FC<any> = ({ children, text }) => (
  <div className={s.hint}>{children}</div>
);

export { HintRightComponent };
