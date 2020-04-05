import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  color: {
    primary: 'pink',
    secondary: '#00bcd4',
    error: '#e64a19',
  },
  typography: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7b1fa2',
    textColor: '#fff',
    borderColor: '#ccc',
  },
});

export default theme;
