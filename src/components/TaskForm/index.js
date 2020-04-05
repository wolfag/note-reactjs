import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  withStyles,
  TextField,
} from '@material-ui/core';
import styles from './styles';

class TaskForm extends Component {
  render() {
    const { visible, onClose, onOk, classes } = this.props;
    return (
      <Dialog open={visible} onClose={onClose}>
        <DialogTitle>New task</DialogTitle>
        <DialogContent>
          <TextField label='Name' margin='normal' />
          <TextField label='Description' multiline margin='normal' />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
