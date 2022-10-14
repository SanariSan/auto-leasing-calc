import type { FC, FormEvent } from 'react';
import { useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { MainContainer } from './containers/main';
import { ScreenResContainer } from './containers/screen-res';
import { useAppDispatch } from './hooks/redux';
import { submitAllParams } from './store';

const App: FC = () => {
  const dispatch = useAppDispatch();

  const onSubmit = useCallback(
    (evt: FormEvent<HTMLElement>) => {
      evt.preventDefault();
      void dispatch(submitAllParams());
    },
    [dispatch],
  );

  return (
    <Switch>
      <Route exact path={`/${process.env.REACT_APP_URL_PATH}`}>
        <Container className={s.appWrap}>
          <Container as={'form'} onSubmit={onSubmit} fluid className={s.app}>
            <MainContainer />
          </Container>
        </Container>
        <ScreenResContainer />
      </Route>
    </Switch>
  );
};

export { App };
