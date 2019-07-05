import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { MuiThemeProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// STYLE
import './App.css';

// CUSTOM COMPONENTE
import CreateList from './components/createList'
import Header from './common/header'
import Home from  './common/home'



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
        <Router>
          <>
          <Header />
          <Switch>
            <Route exact path='/' component={Home}  />
            <Route path='/Lista' component={CreateList}  />
          </Switch>
          </>

        </Router>
      </MuiThemeProvider>
    )
  }
}

export default App;
