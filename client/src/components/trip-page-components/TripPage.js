import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import TripAddInput from "./TripAddInput";
import TripEdit from "./TripEdit";

import "../css-files/TripPage.css";


export default function TripPage(user_id) {
  const [trips, setTrips] = useState([]);
  const getTrips = async () => {
    try {
      const response = await fetch(`http://localhost:8000/alltrips/${user_id}`);
      const jsonData = await response.json();

    //   console.log(response);
    //   console.log("json", jsonData);

      setTrips(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div className="page">
      <h1 className="trips text-center" style={{marginRight: 200, marginLeft: 200}}>Trips</h1>
      <TripAddInput></TripAddInput>
      <table className="table text-center mx-auto">
        <thead>
          <tr>
            <th>Trip Locations</th>
          </tr>
        </thead>
        <tbody>
          {trips.filter(trip => (trip.user_id == user_id)).sort((a, b) => a.trip_id-b.trip_id).map(trip => (
            <tr key={trip.trip_id} className="row">
              {/* <td className="text">{trip.destination}</td> */}
              {/* <td className="d-flex justify-content-center"> */}
              <td className="d-flex justify-content-center">

                <TripEdit trip={trip} className="edit"/>
                <button className="btn btn-outline-secondary">
                  <Link to={`/list/${trip.trip_id}`}>View Packing Lists</Link>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}