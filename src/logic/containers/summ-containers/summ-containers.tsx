import React from 'react';
import Col from 'react-bootstrap/Col';
import { SummContainer } from '../summ-container';

const SummContainers: React.FC = () => (
  <>
    <Col>
      <SummContainer hint={'Сумма договора лизинга'} amount={'1 234 567'} />
    </Col>
    <Col>
      <SummContainer hint={'Ежемесячный платеж от'} amount={'123 456'} />
    </Col>
  </>
);

export { SummContainers };
