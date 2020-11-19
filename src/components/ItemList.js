import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

// const masterItemList = [  
//   {  
//     name: "Bobble Head",
//     quantity: 5,
//     description: "A really cool item",
//     price: 8
//   },
//   {  
//     name: "white t-shirt",
//     quantity: 7,
//     description: "just a good ol tee",
//     price: 14
//   }
// ]

// function NewItemForm(props){
//   function handleNewItemFormSubmission(event) {
//     event.preventDefault();
//     // console.log(event.target.name.value);
//     // console.log(event.target.quantity.value);
//     // console.log(event.target.description .value);
//     // console.log(event.target.price.value);
//   }


function ItemList(props){

  function handleBuyingItemSubmission(event) {
    event.preventDefault();
    console.log(event.target.quantity.value);
  }

  
  return (
    <React.Fragment>
      {props.itemList.map((item) =>
        <Item name={item.name}
        whenItemClicked = { props.onItemSelection }
        whenBuyClicked = { props.onBuyItem }
        quantity ={item.quantity}
        description={item.description}
        price={item.price}
        id = {item.id}
        key = {item.id}/>
      )}
    </React.Fragment>
  );  
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func,
  onBuyItem: PropTypes.func
};

export default ItemList;

