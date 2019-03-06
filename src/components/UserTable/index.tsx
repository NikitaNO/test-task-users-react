import * as React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Table from './Table';

const UserTable: React.StatelessComponent<{}> = (props) => {
  useEffect(() => {
    // TODO request
  }, []);

  return <Table />
};

const mapStateToProps = (state: any) => ({
  users: state.users.list,
});

const enhance = compose(
    connect(
        mapStateToProps
    )
);

export default enhance(UserTable);
