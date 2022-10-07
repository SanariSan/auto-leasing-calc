import classNames from 'classnames';
import type { FC } from 'react';
import s from './range-input.module.scss';
import type { TRangeInput } from './range-input.type';

const RangeInputComponent: FC<TRangeInput> = ({
  textareaValue,
  onTextareaInput,
  onTextareaFocus,
  onTextareaBlur,
  type = 'default',
}) => (
  <div className={s.textAreaWrap}>
    <textarea
      className={classNames(s.textArea, type === 'overlay' ? s.textAreaOverlay : undefined)}
      aria-multiline={false}
      value={textareaValue}
      onInput={onTextareaInput}
      onFocus={onTextareaFocus}
      onBlur={onTextareaBlur}
    />
  </div>
);

export { RangeInputComponent };
