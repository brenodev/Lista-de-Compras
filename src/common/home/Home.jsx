import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './Home.css'

// CUSTOM COMPONENTE
import NewList from '../../components/newList'
import List from '../../components/list'
import { getListTotal, getOpenedItems, getClosedItems } from '../../store/reducers/List-Reducer'
import { Creators as ListActions } from '../../store/actions/List' 

const Home = (props) => (
  <div className='page-container home-image'>
    <NewList newList={props.newList}/>
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

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home)