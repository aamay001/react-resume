import React from 'react';
import { Route, Switch, Router } from 'react-router';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import store from './store';
import { constants } from './config';
import routes from './routes';
import './styles/App.css';

const history = createBrowserHistory();
const { ROUTES } = constants;
const { Home } = routes;

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Provider store={store}>
          <Switch>
            <Route exact path={ROUTES.HOME.PATH} component={Home} />
            <Route component={Home} />
          </Switch>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
