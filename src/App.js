import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import routes from './routes';
import './styles/App.css';

const history = createBrowserHistory();
const { ROUTES } = constants;
const { Home } = routes;

const App = ({ editorOpen, toolbarOpen }) => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route exact path={ROUTES.HOME.PATH} component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
    <FocusTrap full={editorOpen} mobile={toolbarOpen} />
  </div>
);

App.defaultProps = {
  editorOpen: false,
  toolbarOpen: false,
};

App.propTypes = {
  editorOpen: PropTypes.bool,
  toolbarOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  editorOpen: state.app.editorOpen,
  toolbarOpen: state.app.toolbarOpen,
});

export default connect(mapStateToProps)(App);
