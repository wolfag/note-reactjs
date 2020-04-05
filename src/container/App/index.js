import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Provider } from 'react-redux';
import theme from '../../common/Theme';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard';
import styles from './style';

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Taskboard />
      </ThemeProvider>
    </Provider>
  );
}

export default withStyles(styles)(App);
