import type { FC } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import s from './main.module.scss';

const MainComponent: FC = () => {
  const a = 1;

  return (
    <Container>
      <Row xs={2}>
        <Col xs={2}>
          <div className={s.tmp}>init</div>
        </Col>
        <Col xs={2}>tmp 2</Col>
      </Row>
    </Container>
  );
};

export { MainComponent };
