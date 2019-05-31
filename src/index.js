/* globals document */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import store from './store';
import * as serviceWorker from './serviceWorker';

toast.configure({
  position: 'top-center',
  autoClose: 3000,
  hideProgressBar: false,
  newestOnTop: false,
  closeOnClick: true,
  closeButton: false,
  rtl: false,
  pauseOnVisibilityChange: true,
  draggable: true,
  pauseOnHover: true,
  progressStyle: {
    background: 'lightgray',
  },
  bodyClassName: 'resume-toast-body',
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
