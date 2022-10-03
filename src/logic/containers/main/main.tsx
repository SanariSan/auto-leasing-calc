import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { ButtonContainer } from '../button';
import { RangeControllersContainer } from '../range-controllers';
import { SummContainers } from '../summ-containers';
import { TitleContainer } from '../title';

const MainContainer: React.FC = () => (
  <>
    <Row>
      <Col xl={6} lg={12} md={12} xs={10}>
        <TitleContainer />
      </Col>
    </Row>
    <Row>
      <Col className="px-3">
        <RangeControllersContainer />
      </Col>
    </Row>
    <Row sm={1} md={2} xl={3} className="px-3">
      <SummContainers />
      <Col md={6} lg={5} xl={4} className="pe-5">
        <ButtonContainer />
      </Col>
    </Row>
  </>
);

export { MainContainer };
