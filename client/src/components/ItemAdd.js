import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ItemAdd = ({list_id}) => {
    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const trip_id = useParams();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { item, quantity, list_id };
            console.log(body);
            const response = await fetch("http://localhost:8000/allitems", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = `/list/${trip_id.trip_id}`;

            // console.log(response);
            // const data = await response.json();
            // console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <div className="d-flex mx-5">
            <p className="text-center">Add Item</p>
            <form className="input-field d-flex mx-5" onSubmit={onSubmitForm}>
            {/* <form className="d-flex" style={{marginRight: 200, marginLeft: 200}} onSubmit={onSubmitForm}> */}
                <input type="text" className="quantity-form form-control" placeholder="quantity" value={quantity} onChange={e => setQuantity(e.target.value)} />
                <input type="text" className="item-form form-control" placeholder="item" value={item} onChange={e => setItem(e.target.value)} />
                <button className="btn btn-primary">Add Item</button>
            </form>
            
        </div>        
    );
};

export default ItemAdd;