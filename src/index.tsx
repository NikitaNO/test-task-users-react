import * as React from 'react';
import * as ReactDOM from 'react-dom';
import UserTable from './components/UserTable';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <UserTable />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
