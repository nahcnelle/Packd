import React from "react";

const ItemRemove = ({ item, items, setItems }) => {
  
  const deleteItem = async (item_id) => {
    try {
      await fetch(`http://localhost:8000/allitems/${item_id}`, {
        method: "DELETE"
      });

        setItems(items.filter(item => item.item_id !== item_id));
      } catch (err) {
        console.error(err.message);
      }
  };

  return (
    <div>
      <button className="btn btn-danger" onClick={() => deleteItem(item.item_id)}>Remove</button>
    </div> 
  );
}

export default ItemRemove;