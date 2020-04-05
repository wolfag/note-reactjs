import React, { Component } from 'react';
import { withStyles, Grid, Box } from '@material-ui/core';

import styles from './styles';
import TaskItem from '../TaskItem';

class TaskList extends Component {
  render() {
    const { classes, tasks, status } = this.props;
    return (
      <Grid key={status.value} item md={4} xs={12}>
        <Box mt={1} mb={1}>
          <div className={classes.status}>{status.label.toUpperCase()}</div>
        </Box>
        <div className={classes.wraperListTask}>
          {tasks.map((task) => {
            return <TaskItem key={task.id} status={status.value} task={task} />;
          })}
        </div>
      </Grid>
    );
  }
}

export default withStyles(styles)(TaskList);
