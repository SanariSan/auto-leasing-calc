import type { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import s from './app.module.scss';
import { MainContainer } from './containers/main';

const App: FC = () => (
  <>
    <Switch>
      <Route exact path={`/${String(process.env.REACT_APP_URL_PATH)}`}>
        <MainContainer />
      </Route>
    </Switch>
    <span className={s.bg} />
  </>
);

export { App };
