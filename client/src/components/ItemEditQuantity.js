import React, { useState } from "react";
import { useParams } from "react-router-dom";


const ItemEditQuantity = ({ items, list_id }) => {
    const [quantity, setQuantity] = useState(items.quantity);
    const item = items.item;

    const trip_id = useParams();
    
    const updateItem = async (e, item_id, quantity) => {
        e.preventDefault();
        try {
            // console.log(item_id);
            const body = { item, quantity, item_id, list_id};
            // console.log(body);
            const response = await fetch(`http://localhost:8000/allitems/${item_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                params: item_id,
                body: JSON.stringify(body)
            });
            window.location = `/list/${trip_id.trip_id}`;

            // console.log(response);
            // const data = await response.text();
            // console.log(data);

        } catch (err) {
            console.error(err.message);
        }
    };
    
    return (
    <div>
        <form className="d-flex" onSubmit={e => updateItem(e, items.item_id, e.target[0].value)}>
            <input type="text" className="form-control" value={quantity == null ? '0' : quantity} onChange={e => setQuantity(e.target.value)} />
        </form>
    </div>
  );
};

export default ItemEditQuantity;