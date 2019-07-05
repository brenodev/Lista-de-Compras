import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'

import './App.css';
import Header from './common/Header'
import Home from  './components/home'

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
        <Header />
        <Home />
      </MuiThemeProvider>
    )
  }
}

export default App;
