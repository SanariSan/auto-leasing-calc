import type { FC, FormEvent } from 'react';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { debounceWrap } from '../../../helpers/util';
import { DimmerComponent } from '../../components/dimmer';
import { RangeInputComponent } from '../../components/range-controller/range-input';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import {
  carPriceSelector,
  firstPaymentSelector,
  repaymentLengthSelector,
  setCarPrice,
  setFirstPaymentPerc,
  setRepaymentLength,
  submitParamsSelector,
  summSelector,
  updateMonthlyRepayment,
  updateTotalPayment,
} from '../../store';
import { RangeControllerContainer } from '../range-controller';

const priceHint = <pre style={{ position: 'absolute', right: '8%', top: '50%' }}>₽</pre>;
const PercHintComponent: FC<any> = ({ val }: { val: number }) => {
  const { firstPaymentPercMin, firstPaymentPercMax, firstPaymentPercCurrent, firstPaymentCurrent } =
    useAppSelector(firstPaymentSelector);

  return (
    <RangeInputComponent
      textareaValue={`${firstPaymentPercCurrent}`}
      hint={''}
      onTextareaInput={(evt) => {
        evt.preventDefault();
        if (evt.currentTarget.value.length >= 2) return;
        if (!/^\d+$/gi.test(evt.currentTarget.value) && evt.currentTarget.value !== '') return;

        // setTextareaValue(evt.currentTarget.value);
        // applyTextareaValueToStoreDebounced(evt.currentTarget.value);
      }}
      styleInject={{
        position: 'absolute',
        right: '3%',
        top: '25%',
        width: '100px',
        height: '70px',
        padding: '15px 5px 0px 25px',
        fontSize: '30px',
        backgroundColor: '#ebebec',
      }}
    />
  );
};
const repaymentLengthHint = (
  <pre style={{ position: 'absolute', right: '8%', top: '50%' }}>МЕС.</pre>
);

const RangeControllersContainer: FC = () => {
  const { carPriceMin, carPriceMax, carPriceCurrent } = useAppSelector(carPriceSelector);
  const { repaymentLengthMin, repaymentLengthMax, repaymentLengthCurrent } =
    useAppSelector(repaymentLengthSelector);
  const { firstPaymentPercMin, firstPaymentPercMax, firstPaymentPercCurrent, firstPaymentCurrent } =
    useAppSelector(firstPaymentSelector);
  const { monthlyRepayment } = useAppSelector(summSelector);
  const { status } = useAppSelector(submitParamsSelector);
  const dispatch = useAppDispatch();

  // ---

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

  // ---

  return (
    <Container fluid className="px-0" style={{ position: 'relative' }}>
      <Row>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={carPriceMin}
            max={carPriceMax}
            current={carPriceCurrent}
            actionCreator={setCarPrice}
            hintTitle={'Стоимость автомобиля'}
            hintRight={priceHint}
          />
        </Col>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={firstPaymentPercMin}
            max={firstPaymentPercMax}
            current={firstPaymentPercCurrent}
            actionCreator={setFirstPaymentPerc}
            hintTitle={'Первоначальный взнос'}
            hintRight={<PercHintComponent val={firstPaymentPercCurrent} />}
          />
        </Col>
        <Col xs={12} xl={4}>
          <RangeControllerContainer
            min={repaymentLengthMin}
            max={repaymentLengthMax}
            current={repaymentLengthCurrent}
            actionCreator={setRepaymentLength}
            hintTitle={'Срок лизинга'}
            hintRight={repaymentLengthHint}
          />
        </Col>
        <DimmerComponent dimmed={status === 'loading'} />
      </Row>
    </Container>
  );
};

export { RangeControllersContainer };
