import type { FC } from 'react';
import Col from 'react-bootstrap/Col';
import s from './title.module.scss';

const TitleComponent: FC = () => (
  <Col xl={6} lg={12} md={12} xs={10}>
    <h1 className={s.title}>Рассчитайте стоимость автомобиля в лизинг</h1>
  </Col>
);
export { TitleComponent };
