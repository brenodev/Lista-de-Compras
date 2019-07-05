import React from "react";
import CheckBox from "@material-ui/core/Checkbox";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons'

// STYLE
import './CreateList.css'

//CUSTOM COMPONENT
import Form from "../../common/forms";
import CustomCard from "../../common/customCard";
import { from } from "rxjs";

const CreateList = () => (
  <div className="page-container">
    <Form />

    <div className="list-items-container">
      <CustomCard link="#" containerClass="list-item" footer={<ListItemFooter />}>
        <div>
          <div className="list-item-header">
            <Typography variant="subtitle1" component="h2">Café</Typography>
            <CheckBox />
          </div>
          <Typography component="p">1 Unidade</Typography>
          <Typography component="p">R$ 10.00</Typography>
        </div>
      </CustomCard>
    </div>
  </div>
);

const ListItemFooter = () => (
  <div className="list-card-footer">
    <div className="list-card-footer-actions">
      <FontAwesomeIcon icon={faPen} color='#631976' size='1x' />
      <FontAwesomeIcon icon={faTrash} color='#3f51b5' size='1x' />
    </div>
    <p>Total R$ 50</p>
  </div>
)

export default CreateList;
