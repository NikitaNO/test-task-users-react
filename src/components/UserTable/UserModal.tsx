import * as React from 'react';
import { Dialog, DialogTitle } from '@material-ui/core';

const UserModal: React.StatelessComponent<{ title: string, handleClose, open: boolean }> = (props) => (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle>{props.title}</DialogTitle>
      <div>
        {props.children}
      </div>
    </Dialog>
);

export default UserModal;
