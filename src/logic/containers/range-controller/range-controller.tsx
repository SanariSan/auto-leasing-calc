import type { FC } from 'react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { debounceWrap } from '../../../helpers/util';
import { RangeControllerComponent } from '../../components/range-controller';
import type { TRangeController } from './range-controller.type';

const RangeControllerContainer: FC<TRangeController> = ({
  min,
  max,
  current,
  hintTitle,
  hintRight,
}) => {
  const [sliderValue, setSliderValue] = useState(current);
  const [textareaValue, setTextareaValue] = useState(String(current));

  // change input value when moving slider
  useEffect(() => {
    setTextareaValue(String(sliderValue));
  }, [sliderValue]);

  // check if value acceptable, correct if needed, update for both input/slider
  const applyTextareaValueToSlider = useCallback(
    (inputValue: string) => {
      const localInputValue = inputValue;
      if (!/^\d+$/gi.test(inputValue)) return;

      let localInputValueInt = Number.parseInt(localInputValue, 10);

      if (localInputValueInt < min) localInputValueInt = min;
      else if (localInputValueInt > max) localInputValueInt = max;

      setTextareaValue(String(localInputValueInt));
      setSliderValue(localInputValueInt);
    },
    [min, max],
  );

  const applyTextareaValueToSliderDebounced = useMemo(
    () => debounceWrap(applyTextareaValueToSlider, 1000),
    [applyTextareaValueToSlider],
  );

  const onTextareaInput = useCallback(
    (evt: React.FormEvent<HTMLTextAreaElement>) => {
      evt.preventDefault();
      if (evt.currentTarget.value.length >= 12) return;

      const inputValue = evt.currentTarget.value;

      // set any typed value, just to show to the user
      setTextareaValue(inputValue);
      // plan applying this value to slider, with additional checks
      applyTextareaValueToSliderDebounced(inputValue);
    },
    [applyTextareaValueToSliderDebounced],
  );

  const onSliderInput = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setSliderValue(Number.parseInt(evt.currentTarget.value, 10));
  }, []);

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
