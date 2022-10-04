import type { FC, ReactElement } from 'react';
import s from './hint-right.module.scss';

const HintRightComponent: FC<{ children?: ReactElement; text?: string }> = ({ children, text }) => (
  <div className={s.hintWrap}>{children || text}</div>
);

export { HintRightComponent };
