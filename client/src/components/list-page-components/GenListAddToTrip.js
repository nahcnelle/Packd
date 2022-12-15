import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import UserNavbar from "../UserNavbar";

import "../css-files/GenListAddToTrip.css";

const GenListAddToTrip = ( {gen_list} ) => {
    const [genLists, setGenLists] = useState([]);
    const [destination, setDestination] = useState("");

    let user_id = useParams().user_id;
    let trip_id = useParams().trip_id;

    const getGenLists = async () => {
        try {
            const response = await fetch(`http://localhost:8000/genlists/user/${user_id}`);
            const jsonData = await response.json();

            console.log("gen lists", jsonData)
            setGenLists(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getGenLists();
    }, []);

    const getTripDest = async () => {
        try {
            const response = await fetch(`http://localhost:8000/alltrips/trip/${trip_id}`);
            const jsonData = await response.json();

            console.log("desc: ", jsonData);
            setDestination(jsonData.destination);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTripDest();
    }, []);

    const handleOnClick = async (e, list_id) => {
        e.preventDefault();
        try {
            const body = { list_id, trip_id };
            console.log(body, "body");
            const response = await fetch("http://localhost:8000/tripgenlist", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response)

        } catch (err) {
            console.error(err.message);
        }
        window.location = `/list/user=${user_id}&trip=${trip_id}`;
    };

    return (
        <div>
            <UserNavbar user_id={user_id}/>
            <div className="page">
                <h3 className="text-center mx-5">Add a General List to {destination}</h3>
                <div className="back-btn text-center">
                    <button className="btn btn-light">
                        <Link to={`/list/user=${user_id}&trip=${trip_id}`}>Back to trip</Link>
                    </button>
                </div>
            
                <div>
                    {genLists.sort((a, b) => a.list_id-b.list_id).map(list => (
                        <div className="lists" key={list.list_id}>
                            <form className="d-flex justify-content-center" onClick={(e) => handleOnClick(e, list.list_id)}>
                                <p className="list-name">{list.description}</p>
                                <button className="btn btn-primary">Add List</button>
                            </form>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GenListAddToTrip;