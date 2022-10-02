import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { TitleComponent } from '../../components/title';
import { ButtonContainer } from '../button';
import { RangeControllersContainer } from '../range-controllers';
import { SummContainers } from '../summ-containers';

const MainContainer: React.FC = () => {
  const a = 1;

  return (
    <>
      <Row>
        <TitleComponent />
      </Row>
      <Row sm={1} xl={3}>
        <RangeControllersContainer />
      </Row>
      <Row sm={1} md={2} xl={3}>
        <SummContainers />
        <Col md={6} lg={4} xl={4}>
          <ButtonContainer />
        </Col>
      </Row>
    </>
  );
};

export { MainContainer };
