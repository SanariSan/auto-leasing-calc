import type { FC, ReactElement } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TitleHintComponent } from '../title-hint';
import s from './range-controller.module.scss';
import { RangeInputComponent } from './range-input';
import { RangeSliderComponent } from './range-slider';

type TRangeController = {
  min: number;
  max: number;
  textareaValue: string;
  sliderValue: number;
  onTextareaInput: (evt: React.FormEvent<HTMLTextAreaElement>) => void;
  onSliderInput: (evt: React.FormEvent<HTMLInputElement>) => void;
  hintTitle: string;
  hintRight?: ReactElement;
};

const RangeControllerComponent: FC<TRangeController> = ({
  min,
  max,
  textareaValue,
  sliderValue,
  onTextareaInput,
  onSliderInput,
  hintTitle,
  hintRight,
}) => (
  <Container className="gy-3">
    <Row>
      <Col className="px-2" style={{ position: 'relative' }}>
        <>
          <TitleHintComponent hint={hintTitle} />
          <RangeInputComponent onTextareaInput={onTextareaInput} textareaValue={textareaValue} />
          {hintRight}
        </>
      </Col>
    </Row>
    <Row>
      <Col>
        <RangeSliderComponent
          min={min}
          max={max}
          value={sliderValue}
          onSliderInput={onSliderInput}
        />
      </Col>
    </Row>
  </Container>
);

export { RangeControllerComponent };
