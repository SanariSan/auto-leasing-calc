import React, { useMemo } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { template } from '../../../helpers/util';
import { SummComponent } from '../../components/summ';
import { TitleSubComponent } from '../../components/title';
import type { TSumm } from './summ-container.type';

const SummContainer: React.FC<TSumm> = ({ title, amount }) => {
  const amountTemplated = useMemo(() => template({ value: String(amount) }), [amount]);

  return (
    <>
      <Row className="py-2">
        <Col className="px-0">
          <TitleSubComponent text={title} />
        </Col>
      </Row>
      <Row className="py-0 pb-3">
        <Col className="px-0">
          <SummComponent amount={amountTemplated} symbol={'₽'} />
        </Col>
      </Row>
    </>
  );
};

export { SummContainer };
