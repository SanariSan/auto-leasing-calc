import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    <Container fluid className="px-0">
      <Row>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={priceMin}
            max={priceMax}
            current={priceCurrent}
            hintTitle={'Стоимость автомобиля'}
            hintRight={priceHint}
          />
        </Col>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={priceMin}
            max={priceMax}
            current={priceCurrent}
            hintTitle={'Первоначальный взнос'}
            hintRight={percHint}
          />
        </Col>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={repaymentLengthMin}
            max={repaymentLengthMax}
            current={repaymentLengthCurrent}
            hintTitle={'Срок лизинга'}
            hintRight={repaymentLengthHint}
          />
        </Col>
      </Row>
    </Container>
  );
};

export { RangeControllersContainer };
