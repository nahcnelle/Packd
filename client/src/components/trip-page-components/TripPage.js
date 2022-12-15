import React, { useEffect, useState, } from "react";
import { Link, useParams } from "react-router-dom";

import TripAddInput from "./TripAddInput";
import TripEdit from "./TripEdit";
import UserNavbar from "../UserNavbar";

import "../css-files/TripPage.css";


const TripPage = () => {
  const [trips, setTrips] = useState([]);

  let user_id = useParams().user_id;
  console.log("trippage beginning", user_id);

  const getTrips = async () => {
    try {
        console.log("try")
        const response = await fetch(`http://localhost:8000/alltrips/user_id/${user_id}`);
        const jsonData = await response.json();

        console.log("json", jsonData);

        setTrips(jsonData);
    } catch (err) {
        console.error(err.message, "trippage.js");
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  return (
    <div>
        <UserNavbar user_id={user_id}/>
        <div className="page">
            <h1 className="trips text-center">Trips</h1>
            <TripAddInput></TripAddInput>
            <table className="table text-center table-striped mx-auto">
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
                            <button className="btn btn-light">
                                <Link to={`/list/user=${user_id}&trip=${trip.trip_id}`}>View Packing Lists</Link>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default TripPage;