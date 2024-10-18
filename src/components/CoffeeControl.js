import React from "react";
import CoffeeList from "./CoffeeList";
import NewCoffeeForm from "./NewCoffeeForm";
import CoffeeDetail from "./CoffeeDetails";
import EditCoffeeForm from "./EditCoffeeForm";

class CoffeeControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffee: null
    })
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    })
  }

  handleChangingSelectedCoffee = (id) => {
    console.log(id);
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleCoffeePurchase = (id) => {
    const findCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    const updatedCoffee = {...findCoffee, poundsLeft: findCoffee.poundsLeft -= 1};
    const newListOfCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id !== id);
    const updatedListOfCoffee = newListOfCoffee.concat(updatedCoffee);
    if (this.state.selectedCoffee === null) {
      this.setState({
        mainCoffeeList: updatedListOfCoffee,
        formVisibleOnPage: false
      });
    } else {
      this.setState({
        mainCoffeeList: updatedListOfCoffee,
        formVisibleOnPage: false,
        selectedCoffee: updatedCoffee
      });
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      formVisibleOnPage: false
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.editing) {
      currentlyVisibleState = <EditCoffeeForm
        coffee = {this.state.selectedCoffee}
        onEditCoffee = {this.handleEditingCoffeeInList}
      />
      buttonText = "Return to Coffee List";
    } else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail
        coffee={this.state.selectedCoffee}
        onClickingEdit={this.handleEditClick}
        onClickingDelete={this.handleDeletingCoffee}
        onCoffeePurchase={this.handleCoffeePurchase}
      />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm
        onNewCoffeeCreation={this.handleAddingNewCoffeeToList}
      />
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList
        coffeeList={this.state.mainCoffeeList}
        onCoffeeSelection={this.handleChangingSelectedCoffee}
        onCoffeePurchase={this.handleCoffeePurchase}
      />
      buttonText = "Add Coffee";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  };
}

export default CoffeeControl;