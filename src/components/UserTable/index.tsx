import * as React from 'react';
import { useEffect } from 'react';
import Table from './Table';

const UserTable: React.StatelessComponent<{}> = (props) => {
  useEffect(() => {
    // TODO request
  }, []);

  return <Table />
};

export default UserTable;
