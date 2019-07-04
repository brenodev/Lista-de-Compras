import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5', 
    },
    secondary: {
      main: '#631976',
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <h1>Hello world</h1>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
