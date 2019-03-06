import * as React from 'react';
import * as ReactDOM from 'react-dom';

import Root from './Root';
import './index.css';
import store from './store'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
