import React from 'react';
import { render } from 'react-dom';
import App from 'Containers/Routes';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from 'Store';
import 'antd/dist/antd.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
