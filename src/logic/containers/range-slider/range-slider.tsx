import type { FC, FormEvent } from 'react';
import { useCallback } from 'react';
import { RangeSliderComponent } from '../../components/range-controller';
import { useAppDispatch } from '../../hooks/redux';
import type { TRangeSlider } from './range-slider.type';

const RangeSliderContainer: FC<TRangeSlider> = ({ min, max, current, actionCreator }) => {
  const dispatch = useAppDispatch();

  const onSliderInput = useCallback(
    (evt: FormEvent<HTMLInputElement>) => {
      evt.preventDefault();

      dispatch(actionCreator(evt.currentTarget.value));
    },
    [dispatch, actionCreator],
  );

  return <RangeSliderComponent min={min} max={max} value={current} onSliderInput={onSliderInput} />;
};

export { RangeSliderContainer };
