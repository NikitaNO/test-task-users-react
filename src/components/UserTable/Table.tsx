import * as React from 'react';
import { useState } from 'react';
import { compose } from 'redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Title from '../common/Title';
import Button from '../common/Button';
import Badge from '@material-ui/core/Badge';
import { isGreatUser } from 'src/helpers/user';
import UserModal from './UserModal';

const UserTable: React.StatelessComponent<{ users }> = ({ users }) => {
  const [isOpenDialog, setStateDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const onOpenDialog = (user) => {
    setSelectedUser(user);
    console.log(selectedUser);
    setStateDialog(true);
  };

  return (
      <>
        <Paper>
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
              {users.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell component="th" scope="row">
                      {
                        isGreatUser(item.age, [4,4])
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
                      <Button onClick={() => onOpenDialog(item)}>View tasks</Button>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
        <UserModal
          title={`tete`}
          open={isOpenDialog}
          handleClose={() => setStateDialog(false)}>
          <p>asdfasf</p>
        </UserModal>
      </>
  );
};

const enhance = compose();

export default enhance(UserTable);
