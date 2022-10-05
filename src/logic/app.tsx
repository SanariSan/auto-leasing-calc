import type { FC, FormEvent } from 'react';
import { useCallback, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import { sleep } from '../helpers/util';
import s from './app.module.scss';
import { MainContainer } from './containers/main';
import { ResponseStatusPopupContainer } from './containers/response-status-popup';
import { ScreenResContainer } from './containers/screen-res';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { setIdle, submitAllParams, submitParamsSelector } from './store';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const { status } = useAppSelector(submitParamsSelector);

  useEffect(() => {
    if (status === 'succeeded' || status === 'failed') {
      void sleep(3000).then(() => dispatch(setIdle()));
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
          <ResponseStatusPopupContainer />
          <ScreenResContainer />
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
