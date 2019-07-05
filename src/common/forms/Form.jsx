import React from 'react';
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { InputAdornment } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import "./Form.css";

const units = ["kg", "lt", "un"];

const Form = () => (
  <form action="" className="form-container">
      <div className="form-row">
        <TextField
          value={""}
          name="list"
          label="Lista"
          className=""
          onChange={() => {}}
          required
        />
        <Button variant="outlined" color="secondary">
          Adicionar
        </Button>
      </div>
      <div className="form-row">
        <TextField
          value={""}
          name="product"
          label="Produto"
          className=""
          onChange={() => {}}
          required
        />
        <TextField
          value={""}
          name="quantity"
          label="Quantidade"
          className=""
          onChange={() => {}}
          required
        />
        <TextField
          select
          value={""}
          name="unity"
          label="Unidade"
          className=""
          onChange={() => {}}
          required
        >
          {units.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          value={""}
          name="price"
          label="Preço"
          className=""
          onChange={() => {}}
          InputProps={{
            startAdornment: <InputAdornment position="start">R$</InputAdornment>
          }}
        />
      </div>
    </form>
)

export default Form