import { TextField, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import styles from './styles';

class SearchBox extends PureComponent {
  render() {
    const { classes, onChange } = this.props;
    return (
      <form className={classes.container}>
        <TextField
          className={classes.input}
          placeholder="Type..."
          onChange={onChange}
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  onChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
