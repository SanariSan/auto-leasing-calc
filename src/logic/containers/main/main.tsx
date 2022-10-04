import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ButtonComponent } from '../../components/button';
import { TitleMainComponent } from '../../components/title';
import { useAppSelector } from '../../hooks/redux';
import { submitParamsSelector, summSelector } from '../../store';
import { RangeControllersContainer } from '../range-controllers';
import { SummContainer } from '../summ-container';

const MainContainer: React.FC = () => {
  const { status } = useAppSelector(submitParamsSelector);
  const { totalPayment, monthlyRepayment } = useAppSelector(summSelector);

  return (
    <>
      <Row>
        <Col xl={6} lg={12} md={12} xs={10}>
          <TitleMainComponent text={'Рассчитайте стоимость автомобиля в лизинг'} />
        </Col>
      </Row>
      <Row>
        <Col className="px-3">
          <RangeControllersContainer />
        </Col>
      </Row>
      <Row sm={1} md={2} xl={3} className="px-3">
        <Col>
          <SummContainer title={'Сумма договора лизинга'} amount={totalPayment} />
        </Col>
        <Col>
          <SummContainer title={'Ежемесячный платеж от'} amount={monthlyRepayment} />
        </Col>
        <Col md={6} lg={4} xl={4} className="pe-5">
          <ButtonComponent loading={status === 'loading'} disabled={status === 'loading'}>
            Оставить заявку
          </ButtonComponent>
        </Col>
      </Row>
    </>
  );
};

export { MainContainer };
