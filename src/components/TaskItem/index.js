import {
  Card,
  CardActions,
  CardContent,
  Fab,
  Grid,
  Icon,
  Typography,
  withStyles,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { STATUS } from '../../constants';
import styles from './styles';

class TaskItem extends PureComponent {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              {STATUS[status].label}
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.actions}>
          <Fab
            size="small"
            className={classes.fab}
            color="primary"
            arial-label="edit"
          >
            <Icon fontSize="small">edit_icon</Icon>
          </Fab>
          <Fab
            size="small"
            className={classes.fab}
            color="secondary"
            arial-label="edit"
          >
            <Icon fontSize="small">delete_icon</Icon>
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

TaskItem.propTypes = {
  classes: PropTypes.object,
  task: PropTypes.object,
  status: PropTypes.number,
};

export default withStyles(styles)(TaskItem);
