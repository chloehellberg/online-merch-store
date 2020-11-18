import React from 'react';
import Header from "./Header";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemControl from "./ItemControl";

function App() {
  return (
  <React.Fragment>
    <Header />
    <div class = "container">
      <div class="row">
        <div class="col-md-3">
          <ItemControl />
        </div>
        <div class="col-md-3">
        </div>
      </div>
    </div>

  </React.Fragment>
  );
}

export default App; 