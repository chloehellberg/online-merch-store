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

  handleBuyingItem = (id) => {
    const newMasterItemList = this.state.masterItemList;
    newMasterItemList.map((item) => {
      if(item.id === id && item.quantity != 0) {
        item.quantity = item.quantity - 1;
      } else if (item.id === id && item.quantity === 0) {
        item.quantity = "Out of Stock";
      }
      return item;
    })
    this.setState({
      masterItemList: newMasterItemList
    })
  }

  // handleBuyingItem = (id) => {        
  //   console.log("hello!")
  //   // const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
  //   const clone = [...this.state.masterItemList]
  //   console.log(clone);
    
  //   for (let i = 0; i < clone.length; i++){
  //     if (clone[i].id === id){
        
  //       clone[i].quantity = clone[i].quantity - 1
  //     }
  //   }

  //   this.setState({
  //     masterItemList: clone
  //   });
  // }

  handleRestockingItem  = (id) => {
    const newMasterItemList = this.state.masterItemList;
    newMasterItemList.map((item) => {

      if (item.id === id && (item.quantity === "Out of Stock") || isNaN(item.quantity)) {  
        item.quantity = 1;
      } else if (item.id === id && item.quantity > 1) {
        item.quantity = (item.quantity + 1);
      } else {
        item.quantity = (item.quantity + 1);
      }
      return item;
    })
    this.setState({
      masterItemList: newMasterItemList
    })
  }

  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !==id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
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
      currentVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem}/>
      buttonText = 'Return to Item List'

    }
    
    else if(this.state.formVisibleOnPage) {
      currentVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} onBuyItem={this.handleBuyingItem} onStockItem={this.handleRestockingItem} />;
      
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