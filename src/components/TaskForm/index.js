import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './styles';

class TaskForm extends PureComponent {
  render() {
    const { visible, onClose, onOk } = this.props;
    return (
      <Dialog open={visible} onClose={onClose}>
        <DialogTitle>New task</DialogTitle>
        <DialogContent>
          <TextField label="Name" margin="normal" />
          <TextField label="Description" multiline margin="normal" />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Close</Button>
          <Button onClick={onOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

TaskForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
};

export default withStyles(styles)(TaskForm);
