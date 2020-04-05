import React, { Component } from 'react';
import {
  withStyles,
  CardActions,
  Card,
  CardContent,
  Typography,
  Grid,
  Fab,
  Icon,
} from '@material-ui/core';

import styles from './styles';
import { STATUS } from '../../constants';

class TaskItem extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item md={8}>
              <Typography component='h2'>{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {STATUS[status].label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.actions}>
          <Fab
            size='small'
            className={classes.fab}
            color='primary'
            arial-label='edit'>
            <Icon fontSize='small'>edit_icon</Icon>
          </Fab>
          <Fab
            size='small'
            className={classes.fab}
            color='secondary'
            arial-label='edit'>
            <Icon fontSize='small'>delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
