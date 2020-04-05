import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core';

import styles from './style';

class App extends React.Component {
  render() {
    console.log({ p: this.props });
    const { classes } = this.props;
    return (
      <div className='App'>
        <Button variant='contained' color='primary'>
          Hello
        </Button>

        <div className={classes.box}>
          <div className={classes.shape}>React</div>
          <div className={classes.shape}>Angular</div>
          <div className={classes.shape}>Vue</div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
