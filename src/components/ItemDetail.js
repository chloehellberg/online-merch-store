import React from 'react'
import PropTypes from 'prop-types';

function ItemDetail(props) {
  const { item, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>
        {item.name} Details
      </h1>
      <p>{item.name}, {item.description}, {item.price}, {item.quantity}</p>
      <button onClick={()=> onClickingDelete(item.id) }>Delete Item</button>
      <hr/>
    </React.Fragment>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default ItemDetail;