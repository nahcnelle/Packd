import React, { useState } from "react";
import { useParams } from "react-router-dom";

import ItemEditQuantity from "./ItemEditQuantity";

import "../css-files/ItemUpdate.css";

const ItemEditInput = ({ items, list_id }) => {
    const [item, setItem] = useState(items.item);
    const quantity = items.quantity;
    const checked_off = items.checked_off;

    const user_id = useParams().user_id;
    const trip_id = useParams().trip_id;
    
    const updateItem = async (e, item_id, item) => {
        e.preventDefault();
        try {
            // console.log(item_id);
            const body = { item, quantity, list_id, checked_off };
            // console.log(body);
            const response = await fetch(`http://localhost:8000/allitems/${item_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                params: item_id,
                body: JSON.stringify(body)
            });

            
        } catch (err) {
            console.error(err.message);
        }
    };
    
    return (
    <div className="d-flex justify-content-center">
        <form className="input-form d-flex" onSubmit={e => updateItem(e, items.item_id, e.target[0].value)}>
            <input type="text" className="form-control" value={item == null ? '' : item} onChange={e => setItem(e.target.value)} />

        </form>
    </div>
  );
};

export default ItemEditInput;