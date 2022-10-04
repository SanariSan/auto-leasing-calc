import type { FC } from 'react';
import s from './title-sub.module.scss';
import type { TTitleSub } from './title-sub.type';

const TitleSubComponent: FC<TTitleSub> = ({ text }) => <h4 className={s.text}>{text}</h4>;

export { TitleSubComponent };
