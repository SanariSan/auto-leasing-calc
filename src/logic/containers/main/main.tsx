import React from 'react';
import Row from 'react-bootstrap/Row';
import { RangeControllersContainer } from '../range-controllers';

const MainContainer: React.FC = () => {
  const a = 1;

  return (
    <>
      <Row>
        {/* Title container */}
        <h1>Here will be title</h1>
      </Row>
      <Row xs={1} xl={3}>
        <RangeControllersContainer />
      </Row>
      <Row xs={1} sm={2} xl={3}>
        {/* Calc Summary container */}
        {/* Button container */}
        <h3>Here will be summ</h3>
        <h3>Here will be summ2</h3>
        <button>Here will be button</button>
      </Row>
    </>
  );
};

export { MainContainer };
