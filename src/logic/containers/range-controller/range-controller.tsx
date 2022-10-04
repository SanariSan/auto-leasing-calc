import type { FC, FormEvent } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounceWrap } from '../../../helpers/util';
import { RangeControllerComponent } from '../../components/range-controller';
import { useAppDispatch } from '../../hooks/redux';
import type { TRangeController } from './range-controller.type';

const RangeControllerContainer: FC<TRangeController> = ({
  min,
  max,
  current,
  actionCreator,
  hintTitle,
  hintRight,
}) => {
  const dispatch = useAppDispatch();

  const [sliderValue, setSliderValue] = useState(current);
  const [textareaValue, setTextareaValue] = useState(String(current));

  useEffect(() => {
    // console.log('Current changed and =', current);

    setSliderValue(current);
    setTextareaValue(String(current));
  }, [current]);

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

  const onTextareaInput = useCallback(
    (evt: FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();
      if (evt.currentTarget.value.length >= 12) return;
      if (!/^\d+$/gi.test(evt.currentTarget.value) && evt.currentTarget.value !== '') return;

      setTextareaValue(evt.currentTarget.value);
      applyTextareaValueToStoreDebounced(evt.currentTarget.value);
    },
    [applyTextareaValueToStoreDebounced],
  );

  const onSliderInput = useCallback(
    (evt: React.FormEvent<HTMLInputElement>) => {
      evt.preventDefault();

      dispatch(actionCreator(evt.currentTarget.value));
      applyTextareaValueToStoreDebounced.cancel();
    },
    [dispatch, actionCreator, applyTextareaValueToStoreDebounced],
  );

  return (
    <RangeControllerComponent
      min={min}
      max={max}
      textareaValue={textareaValue}
      sliderValue={sliderValue}
      onTextareaInput={onTextareaInput}
      onSliderInput={onSliderInput}
      hintTitle={hintTitle}
      hintRight={hintRight}
    />
  );
};

export { RangeControllerContainer };
