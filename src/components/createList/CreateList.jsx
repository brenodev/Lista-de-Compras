import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { InputAdornment } from "@material-ui/core";

const units = [
  'kg', 'lt', 'un'
]

const CreateList = () => (
  <div className="page-container">
    <form action="" className="form-container">
      <TextField
        value={""}
        name="list"
        label="Lista"
        className=""
        onChange={() => {}}
        required
      />
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
        {
          units.map(option => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
      </TextField>
      <TextField
        value={""}
        name="price"
        label="Preço"
        className=""
        onChange={() => {}}
        InputProps={{
          startAdornment: <InputAdornment position='start'>R$</InputAdornment>
        }}
      />
    </form>
  </div>
);

export default CreateList;
