import * as React from 'react';
import { Provider } from 'react-redux';
import UserTable from "./components/UserTable";

interface RootInterface {
  store: any;
}

const Root = ({ store }: RootInterface) => (
    <Provider store={store}>
      <UserTable />
    </Provider>
);

export default Root

