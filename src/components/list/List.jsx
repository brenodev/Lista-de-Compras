import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTE
import CustomCard from '../../common/customCard'
import ListFooter from '../listFooter'
import ListItem from '../listItem'

// STYLE 
import './List.css'

const List = (props) => (
  <CustomCard 
    containerClass='list-container' 
    link='/lista/edicao' 
    footer={<ListFooter total={props.total} />}
    cardClass={props.openedItems < 1 ? 'closed-list' : 'opened-list'}
  >
    <div>
      <p className='title'>{props.list}</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text={`${props.openedItems} Item(s) Restante`} />
        <ListItem icon={faCheck} text={`${props.closedItems} Item(s) Comprados`} />
      </div>
    </div>
  </CustomCard>
)

export default List