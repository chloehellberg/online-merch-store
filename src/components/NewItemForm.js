import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';

function NewItemForm(props){
  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, quantity: event.target.quantity.value, description: event.target.description.value, price: event.target.price.value, id: v4()});
    // console.log(event.target.name.value);
    // console.log(event.target.quantity.value);
    // console.log(event.target.description .value);
    // console.log(event.target.price.value);
  }
  
  return (
    <React.Fragment>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder = 'name' />
        <input
          type='text'
          name='quantity'
          placeholder = "quantity" />
          <textarea
          type='text'
          name='description' 
          placeholder = 'description'/>
        <input
          name='price'
          placeholder='price' />
        <button type='submit'>Add Item</button>
      </form>
    </React.Fragment>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;