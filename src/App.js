import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
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
        <AppBar position='static' color='primary'>
          <div className='header'>
            <p>Lista de Compras</p>
          </div>
        </AppBar>
        <div>
          <h1></h1>
        </div>
      </MuiThemeProvider>
    )
  }
}

export default App;
