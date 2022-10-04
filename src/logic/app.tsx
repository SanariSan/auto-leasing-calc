import type { FC, FormEvent } from 'react';
import { useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { MainContainer } from './containers/main';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { useScreenDetails } from './hooks/use-screen-details';
import { setIdle, submitAllParams, submitParamsSelector } from './store';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(submitParamsSelector);
  const {
    screenResolutionDetails: {
      default: { w, h },
    },
  } = useScreenDetails();

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      dispatch(setIdle());
    }
  }, [dispatch, status]);

  const onSubmit = useCallback(
    (evt: FormEvent<HTMLElement>) => {
      evt.preventDefault();
      void dispatch(submitAllParams());
    },
    [dispatch],
  );

  return (
    <>
      <Switch>
        <Route exact path={`/${process.env.REACT_APP_URL_PATH}`}>
          <pre style={{ fontSize: '15px' }}>
            Current page size - {`${w} x ${h}`} | $screen-xs-min: 0px; | $screen-sm-min: 320px; |
            $screen-md-min: 768px; | $screen-lg-min: 1024px; | $screen-xl-min: 1440px;
          </pre>
          <Container className={s.appWrap}>
            <Container as={'form'} onSubmit={onSubmit} fluid className={s.app}>
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
