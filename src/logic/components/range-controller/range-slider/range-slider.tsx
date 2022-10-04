import type { FC } from 'react';
import { useEffect, useRef } from 'react';
import s from './range-slider.module.scss';
import type { TRangeSlider } from './range-slider.type';

const RangeSliderComponent: FC<TRangeSlider> = ({ min, max, value, onSliderInput }) => {
  const filledRangeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (filledRangeRef.current === null) return;

    const perc = ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100;
    filledRangeRef.current.style.width = `${perc}%`;
  }, [value, max, min]);

  return (
    <div className={s.rangeWrapper}>
      <input
        type={'range'}
        min={min}
        max={max}
        value={value}
        onInput={onSliderInput}
        className={s.rangeInput}
      />
      <div className={s.rangeProgress}>
        <div className={s.beforeThumb} ref={filledRangeRef} />
      </div>
    </div>
  );
};

export { RangeSliderComponent };
