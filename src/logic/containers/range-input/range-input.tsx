import type { FC, FormEvent } from 'react';
import { useMemo, useEffect, useState, useCallback } from 'react';
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

  const getFormattedValue = useCallback(
    () => String(`${prepend}${template({ value: String(current) })}${postpend}`),
    [template, prepend, current, postpend],
  );

  const [textareaValue, setTextareaValue] = useState(getFormattedValue());

  useEffect(() => {
    setTextareaValue(String(`${prepend}${template({ value: String(current) })}${postpend}`));
  }, [current, prepend, postpend, template]);

  const applyTextareaValueToStore = useCallback(
    (value: string) => {
      dispatch(actionCreator(value));
      setTextareaValue(getFormattedValue());
    },
    [dispatch, actionCreator, getFormattedValue],
  );

  const applyTextareaValueToStoreDebounced = useMemo(
    () => debounceWrap(applyTextareaValueToStore, 1000),
    [applyTextareaValueToStore],
  );

  const onTextareaInput = useCallback(
    (evt: FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();

      const { value } = evt.currentTarget;
      let valueNoPrePostPend = value;

      if (prepend.length > 0 || postpend.length > 0) {
        if (prepend.length > 0 && !value.startsWith(prepend)) return;
        if (postpend.length > 0 && !value.endsWith(postpend)) return;

        valueNoPrePostPend = value.replace(prepend, '').replace(postpend, '');
      }

      const valueRaw = deTemplate({ value: valueNoPrePostPend });

      if (valueRaw.length > maxInputLength) return;
      if (!/^\d+$/gi.test(valueRaw) && valueRaw !== '') return;

      setTextareaValue(value);
      applyTextareaValueToStoreDebounced(valueRaw);
    },
    [applyTextareaValueToStoreDebounced, maxInputLength, prepend, postpend, deTemplate],
  );

  return (
    <RangeInputComponent
      onTextareaInput={onTextareaInput}
      textareaValue={textareaValue}
      type={type}
    />
  );
};

export { RangeInputContainer };
