import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          text="text"
          name="name"
          placeholder="Coffee Name"
        />
        <input
          text="text"
          name="origin"
          placeholder="Origin"
        />
        <input
          text="text"
          name="roast"
          placeholder="Roast"
        />
        <input
          text="text"
          name="price"
          placeholder="Price"
        />
        <p>The weight of a single burlap sack of coffee is usually 130#</p>
        <input
          text="text"
          name="poundsLeft"
          placeholder="Weight"
        />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;