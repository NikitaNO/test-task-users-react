import * as React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserList } from '../../store/actions/user';
import { getTaskList } from '../../store/actions/task';

import Table from './Table';

const UserTable: React.StatelessComponent<{ getUserList, getTaskList, users, tasks, isLoading }> = (props) => {
  useEffect(() => {
    props.getUserList();
    props.getTaskList();
    // in real life usually use joined action for few sources
  }, []);

  return <Table
    isLoading={props.isLoading}
    tasks={props.tasks}
    users={props.users} />
};

const mapStateToProps = (state) => ({
  users: state.users.list,
  tasks: state.tasks.list,
  isLoading: state.users.isLoading || state.tasks.isLoading,
});

const enhance = compose(
  connect(
    mapStateToProps,
    {
      getUserList,
      getTaskList,
    }
  )
);

export default enhance(UserTable);
