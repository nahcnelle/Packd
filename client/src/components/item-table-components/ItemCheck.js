import React, { useState } from "react";
import { useParams } from "react-router-dom";


const ItemCheck = ({ items, list_id }) => {
    let [check, setCheck] = useState(items.checked_off);
    const item = items.item;
    const quantity = items.quantity;

    const user_id = useParams().user_id;
    const trip_id = useParams().trip_id;
    
    const updateCheck = async (item_id, checked_off) => {
        try {
            // console.log(item_id);
            const body = { item, quantity, list_id, checked_off};
            const response = await fetch(`http://localhost:8000/allitems/${item_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                params: item_id,
                body: JSON.stringify(body)
            });
            // window.location = `/list/user=${user_id}&trip=${trip_id}`;
        } catch (err) {
            console.error(err.message);
        }
    };

    const handleChange = () => {
        // console.log("before: ", check)
        check = !check;
        setCheck(check);
        // console.log("after: ", check)
        updateCheck(items.item_id, check)
    };
    
    return (
    <div>
        <form className="d-flex">
            <input className="checkbox form-check-input me-1" type="checkbox" checked={check} onChange={handleChange} />
        </form>
    </div>
  );
};

export default ItemCheck;