import React from "react";

// STYLE 
import './ListFooter.css'

const ListFooter = (props) => (
  <div className="list-footer">
    <p>05/07/2019</p>
    <p>{props.total}</p>
  </div>
);

export default ListFooter;
