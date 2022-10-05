import type { FC } from 'react';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { deTemplate, template } from '../../../helpers/util';
import { HintRightComponent } from '../../components/range-controller';
import { TitleSubComponent } from '../../components/title';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  carPriceSelector,
  firstPaymentSelector,
  repaymentLengthSelector,
  setCarPrice,
  setFirstPayment,
  setFirstPaymentPerc,
  setRepaymentLength,
  summSelector,
  updateMonthlyRepayment,
  updateTotalPayment,
} from '../../store';
import { RangeInputContainer } from '../range-input';
import { RangeSliderContainer } from '../range-slider';

const RangeControllersContainer: FC = () => {
  const { carPriceMin, carPriceMax, carPriceCurrent } = useAppSelector(carPriceSelector);
  const { repaymentLengthMin, repaymentLengthMax, repaymentLengthCurrent } =
    useAppSelector(repaymentLengthSelector);
  const { firstPaymentPercMin, firstPaymentPercMax, firstPaymentPercCurrent, firstPaymentCurrent } =
    useAppSelector(firstPaymentSelector);
  const { monthlyRepayment } = useAppSelector(summSelector);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(updateMonthlyRepayment());
  }, [dispatch, carPriceCurrent]);

  useEffect(() => {
    dispatch(updateTotalPayment());
  }, [dispatch, monthlyRepayment]);

  useEffect(() => {
    dispatch(updateTotalPayment());
    dispatch(updateMonthlyRepayment());
  }, [dispatch, firstPaymentCurrent, repaymentLengthCurrent]);

  return (
    <Container className="px-0">
      <Row>
        <Col xs={12} xl={4}>
          <Container className="gy-3 px-2">
            <Row className="py-3">
              <Col className="px-0">
                <TitleSubComponent text={'Стоимость автомобиля'} />
              </Col>
            </Row>
            <Row>
              <Col className="px-0 position-relative">
                <RangeInputContainer
                  current={carPriceCurrent}
                  template={template}
                  deTemplate={deTemplate}
                  maxInputLength={10}
                  actionCreator={setCarPrice}
                />
                <HintRightComponent text={'₽'} />
                <RangeSliderContainer
                  min={carPriceMin}
                  max={carPriceMax}
                  current={carPriceCurrent}
                  actionCreator={setCarPrice}
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} xl={4}>
          <Container className="gy-3 px-2">
            <Row className="py-3">
              <Col className="px-0">
                <TitleSubComponent text={'Первоначальный взнос'} />
              </Col>
            </Row>
            <Row className="py-0">
              <Col className="px-0 position-relative">
                <RangeInputContainer
                  current={firstPaymentCurrent}
                  postpend={' ₽'}
                  template={template}
                  deTemplate={deTemplate}
                  maxInputLength={10}
                  actionCreator={setFirstPayment}
                />
                <HintRightComponent>
                  <RangeInputContainer
                    current={firstPaymentPercCurrent}
                    postpend={' %'}
                    template={template}
                    deTemplate={deTemplate}
                    maxInputLength={2}
                    actionCreator={setFirstPaymentPerc}
                    type={'overlay'}
                  />
                </HintRightComponent>
                <RangeSliderContainer
                  min={firstPaymentPercMin}
                  max={firstPaymentPercMax}
                  current={firstPaymentPercCurrent}
                  actionCreator={setFirstPaymentPerc}
                />
              </Col>
            </Row>
          </Container>
        </Col>
        <Col xs={12} xl={4}>
          <Container className="gy-3 px-2">
            <Row className="py-3">
              <Col className="px-0">
                <TitleSubComponent text={'Срок лизинга'} />
              </Col>
            </Row>
            <Row className="py-0">
              <Col className="px-0 position-relative">
                <RangeInputContainer
                  current={repaymentLengthCurrent}
                  maxInputLength={3}
                  actionCreator={setRepaymentLength}
                />
                <HintRightComponent text={'мес.'} />
                <RangeSliderContainer
                  min={repaymentLengthMin}
                  max={repaymentLengthMax}
                  current={repaymentLengthCurrent}
                  actionCreator={setRepaymentLength}
                />
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export { RangeControllersContainer };
