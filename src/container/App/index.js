import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import theme from '../../common/Theme';
import Taskboard from '../Taskboard';
import styles from './style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Taskboard />
    </ThemeProvider>
  );
}

export default withStyles(styles)(App);
