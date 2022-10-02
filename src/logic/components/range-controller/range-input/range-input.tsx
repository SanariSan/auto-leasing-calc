import type { FC } from 'react';
import s from './range-input.module.scss';

type TRangeInput = {
  textareaValue: string;
  onTextareaInput: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
};

const RangeInputComponent: FC<TRangeInput> = ({ textareaValue, onTextareaInput }) => (
  <textarea
    className={s.textArea}
    aria-multiline={false}
    value={textareaValue}
    onInput={onTextareaInput}
  />
);

export { RangeInputComponent };
