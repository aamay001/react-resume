import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router } from 'react-router';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory } from 'history';
import classNames from 'classnames';
import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import routes from './routes';
import './styles/App.css';
import './styles/darkmode.css';

const history = createBrowserHistory();
const { ROUTES } = constants;
const { Home } = routes;

const App = ({
  editorOpen, toolbarOpen, moreVisibilityOpen, darkMode,
}) => {
  if (darkMode) {
    document.body.style.background = '#2d2d2d';
  } else {
    document.body.style.background = '#fff';
  }
  return (
    <div className={classNames('App', { darkMode })}>
    <ToastContainer
      position='top-center'
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      closeButton={false}
      rtl={false}
      pauseOnVisibilityChange
      draggable
      pauseOnHover
      progressStyle={{
        background: 'lightgray',
      }}
      bodyClassName='resume-toast-body'
      theme={darkMode ? 'dark' : 'light'}
    />
      <Router history={history}>
        <Switch>
          <Route exact path={ROUTES.HOME.PATH} component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
      <FocusTrap full={editorOpen} mobile={toolbarOpen || moreVisibilityOpen} />
    </div>
  );
};

App.defaultProps = {
  editorOpen: false,
  toolbarOpen: false,
  moreVisibilityOpen: false,
  darkMode: false,
};

App.propTypes = {
  editorOpen: PropTypes.bool,
  toolbarOpen: PropTypes.bool,
  moreVisibilityOpen: PropTypes.bool,
  darkMode: PropTypes.bool,
};

const mapStateToProps = state => ({
  editorOpen: state.app.editorOpen,
  toolbarOpen: state.app.toolbarOpen,
  moreVisibilityOpen: state.app.moreVisibilityOpen,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(App);
