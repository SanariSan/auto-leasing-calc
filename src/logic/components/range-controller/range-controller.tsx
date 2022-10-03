import type { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { TitleHintComponent } from '../title-hint';
import type { TRangeController } from './range-controller.type';
import { RangeInputComponent } from './range-input';
import { RangeSliderComponent } from './range-slider';

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
  <Container fluid className="gy-3 px-3">
    <Row>
      <Col className="px-0" style={{ position: 'relative' }}>
        <TitleHintComponent hint={hintTitle} />
        <RangeInputComponent onTextareaInput={onTextareaInput} textareaValue={textareaValue} />
        {hintRight}
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
