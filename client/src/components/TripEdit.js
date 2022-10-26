import React, { useState } from "react";


const TripEdit = ({ trip }) => {
    const [destination, setTrip] = useState(trip.destination);
    
    const updateTrip = async (e, trip_id, destination) => {
        e.preventDefault();
        try {
            // console.log(item_id);
            const body = { destination };
            console.log(body);
            const response = await fetch(`http://localhost:8000/alltrips/${trip_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                params: trip_id,
                body: JSON.stringify(body)
            });
            // window.location = "/trips";

            // console.log(response);
            // const data = await response.text();
            // console.log(data);

        } catch (err) {
            console.error(err.message);
        }
    };
    
    return (
    <div>
        <form className="d-flex mx-5" onSubmit={e => updateTrip(e, trip.trip_id, e.target[0].value)}>
            <input type="text" className="form-control" value={destination == null ? '' : destination} onChange={e => setTrip(e.target.value)} />
            <button className="btn btn-success">Update</button>
        </form>
    </div>
  );
};

export default TripEdit;