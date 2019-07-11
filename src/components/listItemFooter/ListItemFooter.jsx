import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

// CUSTOM COMPONENT
import { Creators as FormActions } from '../../store/actions/Form'

// STYLE
import './ListItemFooter.css'

const ListItemFooter = (props) => (
  <div className="list-card-footer">
    <div className="list-card-footer-actions">
      <FontAwesomeIcon 
        onClick={() => props.startUpdate(props.list, props.item)}
        icon={faPen} 
        color='#631976' 
        size='1x' 
      />
      <FontAwesomeIcon 
        onClick={() => props.deleteProduct(props.item.id)}
        icon={faTrash} 
        color='#3f51b5' 
        size='1x' 
      />
    </div>
    <p>Total: R$ {props.item.total}</p>
  </div>
)

const mapDispatchToProps = dispatch =>
  bindActionCreators(FormActions, dispatch);

export default connect(null, mapDispatchToProps)(ListItemFooter)