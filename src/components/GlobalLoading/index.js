import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import * as uiActions from '../../actions/ui';
import loadingImg from '../../assets/imgs/loading.gif';
import styles from './styles';

class GlobalLoading extends PureComponent {
  render() {
    const { classes, loading } = this.props;
    return (
      loading && (
        <div className={classes.globalLoading}>
          <img className={classes.icon} src={loadingImg} alt="loading" />{' '}
        </div>
      )
    );
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  loading: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    loading: state.ui.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    uiActions: bindActionCreators(uiActions, dispatch),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withStyles(styles), withConnect)(GlobalLoading);
