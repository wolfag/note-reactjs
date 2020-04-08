import {
  Button,
  Grid,
  Modal,
  TextField,
  withStyles,
  Box,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './styles';

class TaskForm extends PureComponent {
  render() {
    const { visible, onClose, onOk, classes } = this.props;
    return (
      <Modal open={visible} onClose={onClose}>
        <div className={classes.modal}>
          <form>
            <Grid container spacing={8}>
              <Grid item md={12}>
                <TextField
                  className={classes.textField}
                  label="Name"
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  className={classes.textField}
                  label="Description"
                  multiline
                  margin="normal"
                />
              </Grid>
              <Grid item md={12}>
                <Box display="flex" flexDirection="row-reverse">
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={onOk}
                  >
                    Ok
                  </Button>
                  <Box mr={1}>
                    <Button variant="contained" onClick={onClose}>
                      Close
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </form>
        </div>
      </Modal>
    );
  }
}

TaskForm.propTypes = {
  visible: PropTypes.bool,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  classes: PropTypes.object,
};

export default withStyles(styles)(TaskForm);
