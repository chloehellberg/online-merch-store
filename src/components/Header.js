import React from 'react';
import Cart from "./Cart";

function Header (){
  return (
    <React.Fragment>
    <div class="container">
      <h1>Merch Site</h1>
      {/* <img class="pic" src="https://i.pinimg.com/564x/c5/8a/d4/c58ad46c9e1a1d3272ab6eb4b55dc06f.jpg"/> */}
      <div class="cart"><Cart /></div>
      <hr/>
    </div>
    </React.Fragment>
  );
}

export default Header;