import React from "react";
import PropTypes from "prop-types";

function Coffee(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <h3>{props.origin}</h3>
      <h3>{props.price}</h3>
      <h3>{props.roast}</h3>
      <h3>{props.poundsLeft}</h3>
      <hr/>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.number,
  roast: PropTypes.string,
  id: PropTypes.string
};

export default Coffee;