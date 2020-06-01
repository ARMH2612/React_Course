import React from "react";

function CartItem({ item }) {
  return (
    <li key={item.id}>
      Name : {item.name}, Price : {item.price}
    </li>
  );
}

export default CartItem;
