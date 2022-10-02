import React from 'react';
import Col from 'react-bootstrap/Col';
import { SummComponent } from '../../components/summ';
import { TitleHintComponent } from '../../components/title-hint';

type TSumm = {
  hint: string;
  amount: number | string;
};

const SummContainer: React.FC<TSumm> = ({ hint, amount }) => (
  <Col>
    <TitleHintComponent hint={hint} />
    <SummComponent amount={amount} />
  </Col>
);

export { SummContainer };
