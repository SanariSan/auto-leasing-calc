import React from 'react';
import { RangeControllerComponent } from '../../components/range-controller';

const RangeControllersContainer: React.FC = () => {
  const a = 1;

  return (
    <>
      <RangeControllerComponent />
      <RangeControllerComponent />
      <RangeControllerComponent />
    </>
  );
};

export { RangeControllersContainer };
