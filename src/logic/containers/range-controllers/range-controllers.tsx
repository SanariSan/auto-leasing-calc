import React from 'react';
import { RangeControllerContainer } from '../range-controller';

const priceHint = <pre style={{ position: 'absolute', right: '8%', top: '50%' }}>₽</pre>;
const percHint = <pre style={{ position: 'absolute', right: '8%', top: '50%' }}>13%</pre>;
const repaymentLengthHint = (
  <pre style={{ position: 'absolute', right: '8%', top: '50%' }}>МЕС.</pre>
);

const RangeControllersContainer: React.FC = () => {
  const priceMin = 1_000_000;
  const priceMax = 6_000_000;
  const priceCurrent = 3_300_000;

  // const percMin = 10;
  // const percMax = 60;
  // const percCurrent = 13;
  // const firstPayMin = priceCurrent / 100 * percMin;
  // const firstPayMax = priceCurrent / 100 * percMax;
  // const firstPayCurrent = priceCurrent / 100 * percCurrent;

  const repaymentLengthMin = 1;
  const repaymentLengthMax = 60;
  const repaymentLengthCurrent = 60;

  return (
    <>
      <RangeControllerContainer
        min={priceMin}
        max={priceMax}
        current={priceCurrent}
        hintTitle={'Стоимость автомобиля'}
        hintRight={priceHint}
      />
      <RangeControllerContainer
        min={priceMin}
        max={priceMax}
        current={priceCurrent}
        hintTitle={'Первоначальный взнос'}
        hintRight={percHint}
      />
      <RangeControllerContainer
        min={repaymentLengthMin}
        max={repaymentLengthMax}
        current={repaymentLengthCurrent}
        hintTitle={'Срок лизинга'}
        hintRight={repaymentLengthHint}
      />
    </>
  );
};

export { RangeControllersContainer };
