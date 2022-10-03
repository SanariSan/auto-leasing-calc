import type { FC } from 'react';
import s from './range-input.module.scss';
import type { TRangeInput } from './range-input.type';

const RangeInputComponent: FC<TRangeInput> = ({ textareaValue, onTextareaInput }) => (
  <textarea
    className={s.textArea}
    aria-multiline={false}
    value={textareaValue}
    onInput={onTextareaInput}
  />
);

export { RangeInputComponent };
