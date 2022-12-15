import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../css-files/ListAddInput.css";

const ListAddInput = ( {gen_list} ) => {

    const [description, setDescription] = useState("");

    const user_id = useParams().user_id;
    const trip_id = useParams().trip_id;
    // console.log(trip_id.trip_id, "trip_id in ListAddInput");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description, trip_id, user_id, gen_list };
            // console.log(body, "body");
            const response = await fetch("http://localhost:8000/alllists", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            if (!gen_list) {
                window.location = `/list/user=${user_id}&trip=${trip_id}`;
            } else {
                window.location = `/gen-list/user=${user_id}`;
            }
            

        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <h3 className="text mx-5">Add a List</h3>
            <form className="d-flex mx-5" onSubmit={onSubmitForm}>
                <input type="text" className="form form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-primary">Add List</button>
            </form>
        </div>
    );
};

export default ListAddInput;