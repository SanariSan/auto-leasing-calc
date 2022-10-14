import React, { useCallback, useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ButtonComponent } from '../../components/button';
import { DimmerComponent } from '../../components/dimmer';
import { TitleMainComponent } from '../../components/title';
import { useAppSelector } from '../../hooks/redux';
import { useResponseStatus } from '../../hooks/response-status';
import { submitParamsSelector, summSelector } from '../../store';
import { PopupNotificationContainer } from '../popup-notification';
import { RangeControllersContainer } from '../range-controllers';
import { SummContainer } from '../summ-container';

const MainContainer: React.FC = () => {
  const { status } = useAppSelector(submitParamsSelector);
  const { totalPayment, monthlyRepayment } = useAppSelector(summSelector);
  const { message, shouldBeDisplayed } = useResponseStatus();
  const [isOpened, setIsOpened] = useState(false);

  useEffect(() => {
    if (shouldBeDisplayed) setIsOpened(true);
  }, [shouldBeDisplayed]);

  const onPopupClose = useCallback((evt: React.MouseEvent<HTMLDivElement>) => {
    evt.preventDefault();
    setIsOpened(false);
  }, []);

  return (
    <>
      <Row className="mb-4">
        <Col xl={6} lg={12} md={12} xs={10}>
          <TitleMainComponent text={'Рассчитайте стоимость автомобиля в лизинг'} />
        </Col>
      </Row>
      <Row className="mb-4">
        <Col className="px-3 position-relative">
          <RangeControllersContainer />
          <DimmerComponent dimmed={status === 'loading'} />
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
      <PopupNotificationContainer isOpened={isOpened} onClose={onPopupClose} message={message} />
    </>
  );
};

export { MainContainer };
