import * as React from 'react';
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import LinearProgress from '@material-ui/core/LinearProgress/LinearProgress';

import Title from '../common/Title';
import Button from '@material-ui/core/Button';
import { isGreatUser } from 'src/helpers/user';
import UserModal from './UserModal';
import { List, ListItem, Checkbox, ListItemText } from '@material-ui/core';

interface IUserTable {
  users,
  tasks,
  isLoading
}

const UserTable: React.StatelessComponent<IUserTable> = ({ users, tasks, isLoading }) => {
  const [isOpenDialog, setStateDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null as any);
  const [checkedTasks, setCheckedTasks] = useState([] as any);

  const onOpenDialog = (user) => {
    setSelectedUser(user);
    setStateDialog(true);
  };

  const onSelectTask = (taskId) => {
    const currentIndex = checkedTasks.indexOf(taskId);
    const newCheckedTasks = [...checkedTasks];

    if (currentIndex === -1) {
      newCheckedTasks.push(taskId);
    } else {
      newCheckedTasks.splice(currentIndex, 1);
    }

    setCheckedTasks(newCheckedTasks);
  };

  const selectScoreList = (listId) =>
    tasks
      .filter((item) => listId.indexOf(item.id) !== -1)
      .map((item) => item.score);

  return (
      <>
        <Paper style={{ position: 'relative' }}>
          <Title>Users</Title>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First name</TableCell>
                <TableCell align="right">Last name</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Tasks</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <div style={{
                minHeight: 4,
                width: '100%',
                position: 'absolute',
              }}>
                {
                  isLoading && <LinearProgress style={{ width: '100%' }} />
                }
              </div>
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell component="th" scope="row">
                    {
                      isGreatUser(item.age, selectScoreList(item.taskList))
                        ? (
                          <Badge badgeContent="Great" color="primary">
                            <span style={{ paddingRight: 20 }}>{item.firstName}</span>
                          </Badge>
                        )
                        : item.firstName
                    }
                  </TableCell>
                  <TableCell align="right">{item.lastName}</TableCell>
                  <TableCell align="right">{item.age}</TableCell>
                  <TableCell align="right">
                    <Button color="primary" onClick={() => onOpenDialog(item)}>View tasks</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        {
          selectedUser && (
            <UserModal
              checkedTasks={
                tasks
                  .filter(({ id }) => checkedTasks.indexOf(id) !== -1)
                  .map(({ score }) => score)
              }
              selectedUser={selectedUser}
              open={isOpenDialog}
              handleClose={() => {
                setStateDialog(false);
                setCheckedTasks([]);
              }}>
              <List>
                {tasks
                  .filter(({ id }) => selectedUser.taskList.indexOf(id) !== -1)
                  .map(({ id, title, description, score }) => (
                    <ListItem key={id} dense button onClick={() => onSelectTask(id)}>
                      <Checkbox
                        checked={checkedTasks.indexOf(id) !== -1}
                        tabIndex={-1}
                        disableRipple
                      />
                      <ListItemText primary={`${title} ${score}`} secondary={description} />
                    </ListItem>
                  ))}
              </List>
            </UserModal>
          )
        }
      </>
  );
};

export default UserTable;
