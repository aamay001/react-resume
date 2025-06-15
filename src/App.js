import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import classNames from 'classnames';
import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import routes from './routes';
import './styles/App.css';
import './styles/darkmode.css';

const { ROUTES } = constants;
const { Home } = routes;

function App({
  editorOpen,
  toolbarOpen,
  moreVisibilityOpen,
  darkMode,
  autoSave,
}) {
  const [autoSaveToastId, setToastId] = useState('');
  useEffect(() => {
    if (!autoSave) {
      const id = toast.warn(
        'To prevent data loss, download your resume using the Download button or turn on auto save!',
        {
          autoClose: false,
          position: 'bottom-right',
          closeOnClick: false,
        },
      );
      setToastId(id);
    } else {
      toast.dismiss(autoSaveToastId);
      setToastId('');
    }
  }, [autoSave]);

  if (darkMode) {
    document.body.style.background = '#2d2d2d';
  } else {
    document.body.style.background = '#fff';
  }
  return (
    <div className={classNames('App', { darkMode })}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
        progressStyle={{
          background: 'lightgray',
        }}
        bodyClassName="resume-toast-body"
        theme={darkMode ? 'dark' : 'light'}
      />
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME.PATH} element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <FocusTrap full={editorOpen} mobile={toolbarOpen || moreVisibilityOpen} />
    </div>
  );
}

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
  autoSave: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  editorOpen: state.app.editorOpen,
  toolbarOpen: state.app.toolbarOpen,
  moreVisibilityOpen: state.app.moreVisibilityOpen,
  darkMode: state.tools.darkMode,
  autoSave: state.tools.autoSave,
});

export default connect(mapStateToProps)(App);
