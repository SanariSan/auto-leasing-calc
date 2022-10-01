import type { FC } from 'react';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import s from './main.module.scss';

const MainComponent: FC = () => {
  const a = 1;
  const [val, setVal] = useState(3_300_000);

  const cb = (evt: React.FormEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setVal(Number(evt.currentTarget.value));
  };

  return (
    <Container>
      <Row xs={2}>
        <Col xs={2}>
          <div className={s.tmp}>init</div>
        </Col>
        <Col xs={6}>
          <input type={'range'} min={1_000_000} max={6_000_000} value={val} onInput={cb}></input>
        </Col>
        <Col xs={2}>
          <span>{val}</span>
        </Col>
      </Row>
    </Container>
  );
};

export { MainComponent };
