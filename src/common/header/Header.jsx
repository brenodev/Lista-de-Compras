import React from 'react';
import AppBar from '@material-ui/core/AppBar';

const Header = (prop) => (
  <AppBar position='static' color='primary'>
    <div className='header'>
      <p>Lista de Compras</p>
    </div>
  </AppBar>
)

export default Header