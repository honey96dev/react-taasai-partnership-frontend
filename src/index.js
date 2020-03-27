import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {initStateWithPrevTab} from "redux-state-sync";

import apis from "core/apis";
import {setBaseUrl} from "apis/fetch";

import "@fortawesome/fontawesome-pro/css/all.min.css";
import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

import App from 'App';
import * as serviceWorker from 'serviceWorker';
import configureStore from "store";


setBaseUrl(apis.baseUrl);
initStateWithPrevTab(configureStore);

ReactDOM.render(
  <Provider store={configureStore}>
    <App/>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
