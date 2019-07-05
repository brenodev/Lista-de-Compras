import React from 'react';

import './Home.css'

// CUSTOM COMPONENTE
import NewList from '../../components/list/newList'
import List from '../../components/list'

const Home = (props) => (
  <div className='page-container'>
    <NewList />
    <List />
  </div>
)

export default Home