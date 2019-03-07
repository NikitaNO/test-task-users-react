import * as React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserList } from '../../store/actions/user';

import Table from './Table';

const UserTable: React.StatelessComponent<{ getUserList, users }> = (props) => {
  useEffect(() => {
    props.getUserList()
  }, []);

  return <Table
    users={props.users} />
};

const mapStateToProps = (state) => ({
  users: state.users.list,
});

const enhance = compose(
  connect(
    mapStateToProps,
    {
      getUserList,
    }
  )
);

export default enhance(UserTable);
