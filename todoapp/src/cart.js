import React from "react";
import CartItem from "./CartItem";

function Cart({ items }) {
  return (
    <div>
      <h1>I am a cart</h1>
      <ul>
        {items.map((item) => {
          return <CartItem item={item} />;
        })}
      </ul>
    </div>
  );
}

export default Cart;
