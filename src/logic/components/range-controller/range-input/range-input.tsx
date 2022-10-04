import type { FC } from 'react';
import s from './range-input.module.scss';
import type { TRangeInput } from './range-input.type';

const RangeInputComponent: FC<TRangeInput> = ({
  textareaValue,
  hint,
  onTextareaInput,
  styleInject,
}) => (
  <>
    <textarea
      className={s.textArea}
      style={styleInject}
      aria-multiline={false}
      value={textareaValue}
      onInput={onTextareaInput}
    />
    <span className={s.hint}>{hint}</span>
  </>
);

export { RangeInputComponent };
