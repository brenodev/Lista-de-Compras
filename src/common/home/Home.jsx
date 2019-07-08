import React from 'react';
import { connect } from 'react-redux'

import './Home.css'

// CUSTOM COMPONENTE
import NewList from '../../components/newList'
import List from '../../components/list'
import { getListTotal } from '../../store/reducers/List-Reducer'

const Home = (props) => (
  <div className='page-container'>
    <NewList />
    { props.list.items.length > 0 &&
      <List list={props.list.list} total={props.total} />
    }
    
  </div>
)

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
});

export default connect(mapStateToProps, null)(Home)