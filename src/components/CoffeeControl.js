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
        selectedCoffee: null
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
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
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