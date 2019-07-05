import React from "react";

// CUSTOM COMPONENTE
import CustomCard from "../../common/customCard";

// STYLE
import "./NewList.css";

const NewList = props => (
  <CustomCard link='/lista' containerClass="new-list-container">
    <div>
      <p className="title">Adicionar Novas Listas!</p>
    </div>
  </CustomCard>
);

export default NewList;
