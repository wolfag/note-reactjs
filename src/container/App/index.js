import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

import styles from './style';
import theme from '../../common/Theme';

import Taskboard from '../Taskboard';

class App extends React.Component {
  render() {
    console.log({ p: this.props });
    const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
