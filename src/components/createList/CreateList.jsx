import React from "react";

// STYLE
import './CreateList.css'

//CUSTOM COMPONENT
import Form from "../../common/forms";
import ListItemCard from '../listItemcard'


const CreateList = () => (
  <div className="page-container">
    <Form />

    <div className="list-items-container">
      <ListItemCard />
    </div>
  </div>
);

export default CreateList;
