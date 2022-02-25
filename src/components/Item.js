import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setCart] = useState(false);

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={()=>setCart(!isInCart)}>{isInCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
