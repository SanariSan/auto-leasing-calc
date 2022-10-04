import type { FC } from 'react';
import s from './title-main.module.scss';
import type { TTitleMain } from './title-main.type';

const TitleMainComponent: FC<TTitleMain> = ({ text }) => <h1 className={s.text}>{text}</h1>;

export { TitleMainComponent };
