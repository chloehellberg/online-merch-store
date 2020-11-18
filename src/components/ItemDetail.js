import React from 'react'
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item } = props;

  return (
    <React.Fragment>
      <h1>
        Item Details
      </h1>
      <p>{item.name}, {item.description}, {item.price}, {item.quantity}</p>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  ticket: PropTypes.object
};

export default ItemDetail;