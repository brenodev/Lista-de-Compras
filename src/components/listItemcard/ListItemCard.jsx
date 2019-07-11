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
    image={item.img}
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