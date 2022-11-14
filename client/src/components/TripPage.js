import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TripAddInput from "./TripAddInput";
import TripEdit from "./TripEdit";


export default function TripPage() {
  const [trips, setTrips] = useState([]);
  const getTrips = async () => {
    try {
      const response = await fetch("http://localhost:8000/alltrips");
      const jsonData = await response.json();

      setTrips(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
      <h1 className="trips text-center" style={{marginRight: 200, marginLeft: 200}}>Trips</h1>
      <TripAddInput></TripAddInput>
      <table className="table text-center mx-auto">
        <thead>
          <tr>
            <th>Trip Locations</th>
          </tr>
        </thead>
        <tbody>
          {trips.sort().map(trip => (
            <tr key={trip.trip_id}>
              {/* <td className="text">{trip.destination}</td> */}
              <td>
                <TripEdit trip={trip}/>
                <button className="btn btn-outline-secondary">
                  <Link to={`/list/${trip.trip_id}`}>View Lists</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}