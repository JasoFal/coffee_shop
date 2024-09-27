import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  let canDecrease = props.poundsLeft > 0 ? true : false;
  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3>{props.name}</h3>
        <h3>{props.origin}</h3>
        <h3>{props.roast}</h3>
        <h3>${props.price} per pound</h3>
        <h3>{props.poundsLeft} pounds left</h3>
      </div>
      {(canDecrease)
        ? (
          <button onClick={() => props.onCoffeePurchase(props.id)}>Add to Cart</button>
        )
        : (
          <button disabled>Out of Stock</button>
        )
      }
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string,
  whenCoffeeClicked: PropTypes.func,
  onCoffeePurchase: PropTypes.func
};

export default Coffee;