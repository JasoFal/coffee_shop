import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList() {
  return (
    <React.Fragment>
      <hr />
      {props.coffeeList.sort((coffee1, coffee2) => coffee1.price - coffee2.price).map((coffee) =>
        <Coffee
          name={coffee.name}
          origin={coffee.origin}
          roast={coffee.roast}
          price={coffee.price}
          poundsLeft={coffee.poundsLeft}
          id={coffee.id}
          key={coffee.id}
        />
      )};
    </React.Fragment>
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
};

export default CoffeeList;