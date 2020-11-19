import React from "react";
import PropTypes from "prop-types";
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'


function Item(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenItemClicked(props.id)}>
      <Button id = "detailButton">Show Details</Button>
        </div>
      <div class= 'container'>
      <div class='row'>
        <div class='card'>
          <h2>{props.name}</h2>
          </div>
          <h3>Quantity:{props.quantity}</h3>
          <p>Description: {props.description}</p>
          <p>Price: {props.price}</p>
          <Button onClick={() => props.whenBuyClicked(props.id)}>Buy!</Button>
          <button onClick={() => props.whenStockClicked(props.id)}>Restock</button>
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
  whenItemClicked: PropTypes.func,
  whenBuyClicked: PropTypes.func,
  whenStockClicked: PropTypes.func
};

export default Item;