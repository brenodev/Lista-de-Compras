import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


// STYLE 
import './ListItem.css'

const ListItem = (props) => (
  <div className='list-card-item'>
  <FontAwesomeIcon icon={props.icon} size='sm' />
  <p>{props.text}</p>
</div>
)

export default ListItem