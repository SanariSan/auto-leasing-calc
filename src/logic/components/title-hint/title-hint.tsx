import type { FC } from 'react';
import s from './title-hint.module.scss';

type TSumm = {
  hint: string;
};

const TitleHintComponent: FC<TSumm> = ({ hint }) => <h4 className={s.hint}>{hint}</h4>;
export { TitleHintComponent };
