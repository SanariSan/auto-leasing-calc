import type { FC } from 'react';
import s from './title-hint.module.scss';
import type { TTitleHint } from './title-hint.type';

const TitleHintComponent: FC<TTitleHint> = ({ hint }) => <h4 className={s.hint}>{hint}</h4>;

export { TitleHintComponent };
