import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <h3>{coffee.roast}</h3>
      <h3>{coffee.origin}</h3>
      <h3>${coffee.price}</h3>
      <hr />
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button >
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default CoffeeDetail;