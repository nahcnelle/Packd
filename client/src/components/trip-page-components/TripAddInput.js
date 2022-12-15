import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "../css-files/TripAddInput.css"

const TripAddInput = () => {
    const [destination, setDestination] = useState("");

    const user_id = useParams().user_id;

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { destination, user_id };
            console.log(body);
            const response = await fetch("http://localhost:8000/alltrips/trip", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            
            window.location = `/trips/${user_id}`;

            // console.log(response);
            // const data = await response.json();
            // console.log(data);
        } catch (err) {
            console.error(err.message);
        }
    };
    return (
        <div>
            <h3 className="text mx-5">Add a Trip</h3>
            <form className="d-flex mx-5" onSubmit={onSubmitForm}>
                <input type="text" className="form form-control" value={destination} onChange={e => setDestination(e.target.value)} />
                <button className="btn btn-primary">Add Trip</button>
            </form>
        </div>
    );
};

export default TripAddInput;