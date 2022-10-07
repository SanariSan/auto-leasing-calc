import type { FC, FormEvent } from 'react';
import { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { debounceWrap } from '../../../helpers/util';
import { RangeInputComponent } from '../../components/range-controller';
import { useAppDispatch } from '../../hooks/redux';
import type { TRangeInput } from './range-input.type';

const templateDefault = ({ value }: { value: string }) => value;
const deTemplateDefault = ({ value }: { value: string }) => value;

const RangeInputContainer: FC<TRangeInput> = ({
  current,
  prepend = '',
  postpend = '',
  template = templateDefault,
  deTemplate = deTemplateDefault,
  maxInputLength = Number.POSITIVE_INFINITY,
  actionCreator,
  type,
}) => {
  const dispatch = useAppDispatch();

  const formattedValue = useMemo(
    () => `${prepend}${template({ value: String(current) })}${postpend}`,
    [template, prepend, current, postpend],
  );

  const [textareaValue, setTextareaValue] = useState(formattedValue);
  const isFocused = useRef(false);

  useEffect(() => {
    setTextareaValue(isFocused.current ? String(current) : formattedValue);
  }, [current, formattedValue]);

  const applyTextareaValueToStore = useCallback(
    (value: string) => {
      dispatch(actionCreator(value));
      setTextareaValue(String(current));
    },
    [dispatch, actionCreator, current],
  );

  const applyTextareaValueToStoreDebounced = useMemo(
    () => debounceWrap(applyTextareaValueToStore, 1000),
    [applyTextareaValueToStore],
  );

  const onTextareaFocus = useCallback(
    (evt: FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();
      isFocused.current = true;

      let { value } = evt.currentTarget;

      if (prepend.length > 0 && value.startsWith(prepend)) value = value.slice(prepend.length);
      if (postpend.length > 0 && value.endsWith(prepend)) value = value.slice(0, -postpend.length);
      value = deTemplate({ value });

      setTextareaValue(value);
    },
    [prepend, postpend, deTemplate],
  );

  const onTextareaBlur = useCallback(
    (evt: FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();
      isFocused.current = false;

      let { value } = evt.currentTarget;

      value = template({ value });
      if (prepend.length > 0 && !value.startsWith(prepend)) value = `${prepend}${value}`;
      if (postpend.length > 0 && !value.endsWith(postpend)) value += postpend;

      setTextareaValue(value);
    },
    [prepend, postpend, template],
  );

  const onTextareaInput = useCallback(
    (evt: FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();

      const { value } = evt.currentTarget;

      if (value.length > maxInputLength) return;
      if (!/^\d+$/gi.test(value) && value !== '') return;

      setTextareaValue(value);
      applyTextareaValueToStoreDebounced(value);
    },
    [applyTextareaValueToStoreDebounced, maxInputLength],
  );

  return (
    <RangeInputComponent
      onTextareaInput={onTextareaInput}
      onTextareaFocus={onTextareaFocus}
      onTextareaBlur={onTextareaBlur}
      textareaValue={textareaValue}
      type={type}
    />
  );
};

export { RangeInputContainer };
