import { Button, Grid, withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as taskAction from '../../actions/task';
import TaskForm from '../../components/TaskForm';
import TaskList from '../../components/TaskList';
import { STATUS } from '../../constants';
import styles from './styles';

class Taskboard extends Component {
  state = {
    visibleTaskForm: false,
  };

  componentDidMount() {
    const { taskActionCreator } = this.props;
    // taskActionCreator.fetchListTaskRequest();
    taskActionCreator.fetchListTask();
  }

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
    const { listTask } = this.props;
    let xhml = null;
    xhml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const tasks =
            listTask && listTask.filter((t) => t.status === status.value);
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
          variant="contained"
          color="primary"
          className={classes.btn}
        >
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

Taskboard.propTypes = {
  classes: PropTypes.object,
  taskActionCreator: PropTypes.shape({
    fetchListTaskRequest: PropTypes.func,
    fetchListTask: PropTypes.func,
  }),
  listTask: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    listTask: state.task.list,
    loading: state.task.loading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    taskActionCreator: bindActionCreators(taskAction, dispatch),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Taskboard)
);
