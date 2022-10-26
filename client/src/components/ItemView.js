import React, { useEffect, useState } from "react";

import ItemEditInput from "./ItemEditInput";
import ItemRemove from "./ItemRemove";
import ItemAddInput from "./ItemAddInput";
import ItemEditQuantity from "./ItemEditQuantity";

const ItemView = ({list_name, list_id}) => {
  const [items, setItems] = useState([]);

  const getLists = async () => {
    try {
      const response = await fetch("http://localhost:8000/allitems");
      const jsonData = await response.json();

      setItems(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getLists();
  }, []);

  console.log(items, "before");
  items.filter(item => item.list_id == list_id);
  console.log(items, "after");

  return (
    <div>
      <h3 className="text-center">{list_name}</h3>
      <ItemAddInput list_id={list_id}></ItemAddInput>
      <table className="table text-center mx-5">
        <thead>
          <tr>
            <th></th>
            <th>Quantity</th>
            <th>Item</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.sort().map(item => (
            <tr key={item.item_id}>
              <td><input className="form-check-input me-1" type="checkbox" value="" aria-label="..." /></td>
              <td><ItemEditQuantity items={item}  list_id={list_id}/></td>
              <td><ItemEditInput items={item} list_id={list_id}/></td>
              <td><ItemRemove item={item} items={items} setItems={setItems}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ItemView;