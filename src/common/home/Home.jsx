import React from 'react';
import { connect } from 'react-redux'

import './Home.css'

// CUSTOM COMPONENTE
import NewList from '../../components/newList'
import List from '../../components/list'
import { getListTotal, getOpenedItems, getClosedItems } from '../../store/reducers/List-Reducer'

const Home = (props) => (
  <div className='page-container'>
    <NewList />
    { props.list.items.length > 0 &&
      <List 
        list={props.list.list} 
        total={props.total}
        openedItems={props.openedItems} 
        closedItems={props.closedItems}
      />
    }
    
  </div>
)

const mapStateToProps = state => ({
  list: state.list,
  total: getListTotal(state),
  openedItems: getOpenedItems(state),
  closedItems: getClosedItems(state),
});

export default connect(mapStateToProps, null)(Home)