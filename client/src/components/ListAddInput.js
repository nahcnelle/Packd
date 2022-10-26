import React, { useState } from "react";
import { useParams } from "react-router-dom";

const ListAddInput = () => {
    const [description, setDescription] = useState("");

    const trip_id = useParams();
    // trip_id = trip_id.trip_id;
    // console.log(trip_id.trip_id, "trip_id in ListAddInput");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { description, trip_id };
            console.log(body, "body");
            const response = await fetch("http://localhost:8000/alllists", {
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
        <div>
            <h3 className="text mx-5">Add a List</h3>
            <form className="d-flex mx-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default ListAddInput;