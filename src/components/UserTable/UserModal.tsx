import * as React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';
import { arithmeticMean } from 'src/helpers/user';

interface IUserModal {
  selectedUser,
  handleClose(),
  open: boolean,
  checkedTasks: number[],
}

const UserModal: React.StatelessComponent<IUserModal> =
  ({ handleClose, open, selectedUser, children, checkedTasks }) => (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{selectedUser.firstName} {Math.round(arithmeticMean(checkedTasks) * 100) / 100 || null}</DialogTitle>
      <div>
        {children}
      </div>
    </Dialog>
  );

export default UserModal;
