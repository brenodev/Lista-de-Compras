import React from "react";
import CheckBox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'


//CUSTOM COMPONENT
import Form from '../../common/forms'
import CustomCard from '../../common/customCard'

const CreateList = () => (
  <div className="page-container">
    <Form />

    <div className="list-items-container">
      <CustomCard link='#' containerClass='list-item'>
        <div>
          <div className='list-item-header'>
            <Typography variant='subtitle1' component='h2'>Café</Typography>
            <CheckBox />
          </div>
          <Typography component='p'>1 Unidade</Typography>
          <Typography component='p'>R$ 10.00</Typography>
        </div>
      </CustomCard>
    </div>


  </div>
);

export default CreateList;
