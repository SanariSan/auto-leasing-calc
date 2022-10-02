import type { FC } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { MainContainer } from './containers/main';
import { useScreenDetails } from './hooks/use-screen-details';

const App: FC = () => {
  const {
    screenResolutionDetails: {
      default: { w, h },
    },
  } = useScreenDetails();

  return (
    <>
      <Switch>
        <Route exact path={`/${process.env.REACT_APP_URL_PATH}`}>
          <pre style={{ fontSize: '15px' }}>
            Current page size - {`${w} x ${h}`} | $screen-xs-min: 0px; | $screen-sm-min: 320px; |
            $screen-md-min: 768px; | $screen-lg-min: 1024px; | $screen-xl-min: 1440px;
          </pre>
          <Container className={s.appWrap}>
            <Container as={'form'} fluid className={s.app}>
              <MainContainer />
            </Container>
          </Container>
        </Route>
      </Switch>
      <span className={s.bg} />
    </>
  );
};

export { App };
