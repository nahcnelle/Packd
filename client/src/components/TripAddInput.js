import React, { useState } from "react";

const TripAddInput = () => {
    const [destination, setDestination] = useState("");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { destination };
            console.log(body);
            const response = await fetch("http://localhost:8000/alltrips", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            window.location = "/trips";

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
                <input type="text" className="form-control" value={destination} onChange={e => setDestination(e.target.value)} />
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    );
};

export default TripAddInput;