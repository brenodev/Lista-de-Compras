import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

// STYLE
import "./CreateList.css";

//CUSTOM COMPONENT
import Form from "../../common/forms";
import ListItemCard from "../listItemcard";
import NewItem from '../newItem'
import { Creators as ListActions } from "../../store/actions/List";

class CreateList extends Component {

  addProduct = (product, list) => {
    this.props.addProduct(product, list)
  }

  render() {
    return (
      <div className="page-container">
        <Form 
          addProduct={this.addProduct} 
          updateProduct={this.props.updateProduct}
          url={this.props.match.params.action}
        />

        <div className="list-items-container">
          {
            this.props.list.items.map(item => 
              <ListItemCard
                list={this.props.list.list}
                item={item}
                toggleProduct={this.props.toggleProduct}
                deleteProduct={this.props.deleteProduct} 
                key={item.id}
              />
            )
          }
          {
            this.props.match.params.action === 'edicao' && <NewItem list={this.props.list.list} />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.list
});

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateList);
