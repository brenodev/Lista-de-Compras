import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

import './ListItemFooter.css'

const ListItemFooter = (props) => (
  <div className="list-card-footer">
  <div className="list-card-footer-actions">
    <FontAwesomeIcon 
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

export default ListItemFooter