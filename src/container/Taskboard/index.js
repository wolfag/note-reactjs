import React, { Component } from 'react';
import { withStyles, Grid, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

import styles from './styles';
import { STATUS } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'read book',
    status: 0,
  },
  {
    id: 2,
    title: 'Read book2',
    description: 'read book',
    status: 1,
  },
  {
    id: 3,
    title: 'Read book3',
    description: 'read book',
    status: 2,
  },
  {
    id: 4,
    title: 'Read book4',
    description: 'read book',
    status: 2,
  },
  {
    id: 5,
    title: 'Read book5',
    description: 'read book',
    status: 0,
  },
];

class Taskboard extends Component {
  state = {
    visibleTaskForm: false,
  };

  handleCloseTaskForm = () => {
    this.setState({ visibleTaskForm: false });
  };

  handleOkTaskForm = () => {
    this.setState({ visibleTaskForm: false });
  };

  openTaskForm = () => {
    this.setState({
      visibleTaskForm: true,
    });
  };

  renderBoard() {
    let xhml = null;
    xhml = (
      <Grid container spacing={2}>
        {STATUS.map((status, index) => {
          const tasks = listTask.filter((t) => t.status === status.value);
          return <TaskList key={status.value} tasks={tasks} status={status} />;
        })}
      </Grid>
    );

    return xhml;
  }

  render() {
    const { classes } = this.props;
    const { visibleTaskForm } = this.state;
    return (
      <div className={classes.taskboard}>
        <Button
          onClick={this.openTaskForm}
          variant='contained'
          color='primary'
          className={classes.btn}>
          <AddIcon /> New task
        </Button>
        {this.renderBoard()}
        <TaskForm
          visible={visibleTaskForm}
          onClose={this.handleCloseTaskForm}
          onOk={this.handleOkTaskForm}
        />
      </div>
    );
  }
}

export default withStyles(styles)(Taskboard);
