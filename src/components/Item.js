import React from "react";
import PropTypes from "prop-types";


function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <div class= 'container'>
      <div class='row'>
        <div class='card'>
          <h2>{props.name}</h2>
          </div>
          <h3>Quantity:{props.quantity}</h3>
          <p>Description: {props.description}</p>
          <p>Price: {props.price}</p>
          <button id = "buyButton">Buy</button>
          <button id ='restockButton'>Restock</button>
        </div>
      </div>
      </div>
      

      <hr/>
    </React.Fragment>
  );
}

Item.propTypes = {
  name: PropTypes.string,
  quantity: PropTypes.number,
  description: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
  whenItemClicked: PropTypes.func
};

export default Item;