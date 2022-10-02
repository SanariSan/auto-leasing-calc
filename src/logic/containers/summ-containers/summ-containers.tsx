import React from 'react';
import { SummContainer } from '../summ-container';

const SummContainers: React.FC = () => (
  <>
    <SummContainer hint={'Сумма договора лизинга'} amount={'1 234 567'} />
    <SummContainer hint={'Ежемесячный платеж от'} amount={'123 456'} />
  </>
);

export { SummContainers };
