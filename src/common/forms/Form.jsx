import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./Form.css";

const units = ["kg", "lt", "un"];

class Form extends Component {
  state = {
    list: '',
    product: '',
    quantity: '',
    unit: '',
    price: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = () => {
    const { list, product, quantity, unit, price } = this.state
    this.props.addProduct({ product, quantity, unit, price  }, list)
  }

  render() {
    return (
      <form action="" className="form-container">
      <div className="form-row">
        <TextField
          value={this.state.list}
          name="list"
          label="Lista"
          className=""
          onChange={this.handleChange}
          required
        />
        <Button variant="outlined" color="secondary" onClick={this.handleSubmit}>
          Adicionar
        </Button>
      </div>
      <div className="form-row">
        <TextField
          value={this.state.product}
          name="product"
          label="Produto"
          className=""
          onChange={this.handleChange}
          required
        />
        <TextField
          value={this.state.quantity}
          name="quantity"
          label="Quantidade"
          className=""
          onChange={this.handleChange}
          required
        />
        <TextField
          select
          value={this.state.unit}
          name="unit"
          label="Unidade"
          className=""
          onChange={this.handleChange}
          required
        >
          {units.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={this.state.price}
          name="price"
          label="Preço"
          className=""
          onChange={this.handleChange}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
      </div>
    </form>
    )
  }
}

export default Form