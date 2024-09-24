import React from "react";
import CoffeeList from "./CoffeeList";

class CoffeeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
    };
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    currentlyVisibleState = <CoffeeList
      coffeeList={this.state.mainCoffeeList}
    />
    buttonText = "Add Coffee";

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button>{buttonText}</button>
      </React.Fragment>
    );
  };
}

export default CoffeeControl;