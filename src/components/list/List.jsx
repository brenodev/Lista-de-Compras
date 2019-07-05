import React from 'react';
import { faShoppingBasket, faCheck } from '@fortawesome/free-solid-svg-icons'

// CUSTOM COMPONENTE
import CustomCard from '../../common/customCard'
import ListFooter from '../listFooter'
import ListItem from '../listItem'

// STYLE 
import './List.css'

const List = (props) => (
  <CustomCard containerClass='list-container' link='/lista' footer={<ListFooter />}>
    <div>
      <p className='title'>Mês</p>
      <div className='list-card-body'>
        <ListItem icon={faShoppingBasket} text='1 Item(s) Restante' />
        <ListItem icon={faCheck} text='2 Item(s) Comprados' />
      </div>
    </div>
  </CustomCard>
)

export default List