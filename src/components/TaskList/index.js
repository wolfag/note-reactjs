import { Box, Grid, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import TaskItem from '../TaskItem';
import styles from './styles';

class TaskList extends PureComponent {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid key={status.value} item md={4} xs={12}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label.toUpperCase()}</div>
        </Box>
        <div className={classes.wraperListTask}>
          {tasks.map((task) => (
            <TaskItem key={task.id} status={status.value} task={task} />
          ))}
        </div>
      </Grid>
    );
  }
}

TaskList.propTypes = {
  classes: PropTypes.object,
  tasks: PropTypes.array,
  status: PropTypes.object,
};

export default withStyles(styles)(TaskList);
