import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setFilter] = useState("All");

  function displayItems (items) {
    let filteredItems;
    if (selectedCategory==="All") {
      filteredItems = [...items];
    } else {
      filteredItems = items.filter((item) => item.category===selectedCategory);
    }
    const itemsJsx = filteredItems.map((item) => (
      <Item key={item.id} name={item.name} category={item.category} />
    ));
    return itemsJsx;
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={(e) => setFilter(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displayItems(items)}
      </ul>
    </div>
  );
}

export default ShoppingList;
