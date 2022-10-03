import React from 'react';
import { SummComponent } from '../../components/summ';
import { TitleHintComponent } from '../../components/title-hint';
import type { TSumm } from './summ-container.type';

const SummContainer: React.FC<TSumm> = ({ hint, amount }) => (
  <>
    <TitleHintComponent hint={hint} />
    <SummComponent amount={amount} symbol={'₽'} />
  </>
);

export { SummContainer };
