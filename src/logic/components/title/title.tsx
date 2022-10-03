import type { FC } from 'react';
import s from './title.module.scss';
import type { TTitle } from './title.type';

const TitleComponent: FC<TTitle> = ({ text }) => <h1 className={s.title}>{text}</h1>;

export { TitleComponent };
