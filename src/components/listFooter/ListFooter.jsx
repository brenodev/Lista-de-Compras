import React from "react";

// STYLE 
import './ListFooter.css'

const ListFooter = (props) => (
  <div className="list-footer">
    <p>{props.date}</p>
    <p>{props.total}</p>
  </div>
);

export default ListFooter;
