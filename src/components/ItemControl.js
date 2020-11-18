import React from 'react';
import NewItemForm from "./NewItemForm";
import ItemList from "./ItemList";
import ItemDetail from "./ItemDetail";

class ItemControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: [],
      itemQuantity: 0,
      selectedItem: null
    };
  }

  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  handleBuyingItem = (itemQuantity) => {
    const newMasterItemList = this.state.masterItemList.quantity
    this.setState( prevState => ({
      masterItemList: newMasterItemList,
      itemQuantity: prevState.itemQuantity-1
    }));
  }

  handleRestockingItem = (itemQuantity) => {
    const newMasterItemList = this.state.masterItemList.quantity
    this.setState( prevState => ({
      itemQuantity: prevState.itemQuantity+1
    }));
  }


  // handleClick = () => {
  //   this.setState(prevState => ({
  //     formVisibleOnPage: !prevState.formVisibleOnPage
  //   }));
  // }

  handleClick = () => {
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }



  render(){
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedItem != null) {
      currentVisibleState = <ItemDetail item = {this.state.selectedItem} />
      buttonText = 'Return to Item List'

    }
    
    else if(this.state.formVisibleOnPage) {
      currentVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
      // currentVisibleState = <ItemList onBuyItem={this.state.handleBuyingItem} />;
      buttonText = "Add New Item"
    }
    return (
      <React.Fragment>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default ItemControl;