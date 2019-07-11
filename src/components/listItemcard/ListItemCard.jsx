import React from 'react';
import CheckBox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";

// CUSTOM COMPONENT 
import ListItemFooter from '../listItemFooter'
import CustomCard from "../../common/customCard";

//STYLE 
import './ListItemCard.css'

const ListItemCard = ({item, deleteProduct, toggleProduct, list}) => ( 
  <CustomCard 
    link="#" 
    containerClass="list-item" 
    action={()=> toggleProduct(item.id)}
    footer={
      <ListItemFooter
        list={list}
        deleteProduct={deleteProduct} 
        item={item} 
      />
    }
    image='http://s2.glbimg.com/P6Nn4AXYPq-K1Xek4cCKyONYYyA=/e.glbimg.com/og/ed/f/original/2014/01/15/cafe.jpg'
  >
        <div>
          <div className="list-item-header">
            <Typography variant="subtitle1" component="h2">{item.product}</Typography>
            <CheckBox checked={item.checked} />
          </div>
          <Typography component="p">{item.quantity} {item.unit}</Typography>
          <Typography component="p">R$ {item.price}</Typography>
        </div>
      </CustomCard>
)

export default ListItemCard