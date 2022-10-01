import type { FC } from 'react';
import { useCallback, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import s from './range-controller.module.scss';
import { RangeInputComponent } from './range-input';
import { RangeSliderComponent } from './range-slider';

const max = 6_000_000;
const min = 1_000_000;

const RangeControllerComponent: FC = () => {
  const [value, setValue] = useState(3_300_000);

  const onSliderInput = useCallback((evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setValue(Number(evt.currentTarget.value));
  }, []);

  // TODO: add delayed value change to let user input full number before validation
  const onTextareaInput = useCallback((evt: React.FormEvent<HTMLTextAreaElement>) => {
    evt.preventDefault();
    console.log(evt.currentTarget.value);

    let inputValue = evt.currentTarget.value;

    if (!/^\d+$/.test(inputValue)) return;
    if (inputValue.length >= 8) return;

    if (Number(inputValue) < min) inputValue = String(min);
    if (Number(inputValue) > max) inputValue = String(max);

    setValue(Number(inputValue));
  }, []);

  return (
    <Container className="gy-3">
      <Row>
        <Col>
          <RangeInputComponent onTextareaInput={onTextareaInput} value={value} />
        </Col>
      </Row>
      <Row>
        <Col>
          <RangeSliderComponent
            min={1_000_000}
            max={max}
            value={value}
            onSliderInput={onSliderInput}
          />
        </Col>
      </Row>
    </Container>
  );
};

export { RangeControllerComponent };
