import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import s from './range-input.module.scss';

const RangeInputComponent: FC<any> = ({ value, onTextareaInput }) => {
  const isActive = useRef(true);

  useEffect(() => {
    isActive.current = true;
    return () => {
      isActive.current = false;
    };
  });

  useEffect(() => {
    if (!isActive.current) return;
  }, []);

  return (
    <div className={s.inputWrapper}>
      <textarea value={value} onInput={onTextareaInput} className={s.textArea} />
    </div>
  );
};

export { RangeInputComponent };
