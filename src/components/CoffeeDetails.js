import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props) {
  const { coffee, onClickingDelete, onCoffeePurchase } = props;
  let canDecrease = coffee.poundsLeft > 0 ? true : false;
  return (
    <React.Fragment>
      <h1>{coffee.name}</h1>
      <h3>{coffee.roast}</h3>
      <h3>{coffee.origin}</h3>
      <h3>${coffee.price} per pound - {coffee.poundsLeft} pounds left</h3>
      {(canDecrease)
        ? (
          <button onClick={() => onCoffeePurchase(coffee.id)}>Add to cart</button>
        ) 
        : (
          <button disabled>Out of Stock</button>
        )
      }
      <hr />
      <button onClick={props.onClickingEdit}>Update Coffee</button>
      <button onClick={() => onClickingDelete(coffee.id)}>Delete Coffee</button >
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onCoffeePurchase: PropTypes.func
};

export default CoffeeDetail;