import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ListItemsView from "./ListItemsView";
import ListAddInput from "./ListAddInput";
import UserNavbar from "../UserNavbar";

import "../css-files/ListPage.css";

const ListPage = () => {
    const [lists, setLists] = useState([]);
    const [genLists, setGenLists] = useState([]);
    const [destination, setDestination] = useState("");

    let trip_id = useParams().trip_id;
    let user_id = useParams().user_id;
    console.log("tu", trip_id, user_id)
    //   trip_id = trip_id.trip_id;

    console.log(trip_id, "trip_id")

    const getLists = async () => {
        try {
            const response = await fetch("http://localhost:8000/alllists");
            const jsonData = await response.json();
            setLists(jsonData);


            const genListResponse = await fetch(`http://localhost:8000/genlists/trip/${trip_id}`);
            console.log("gen", genListResponse)
            if (genListResponse) {
                const genListJson = await genListResponse.json();
                console.log(genListJson);
                setGenLists(genListJson);
            }
        } catch (err) {
            console.error(err.message);
        }
    };

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
        getLists();
    }, []);

    useEffect(() => {
        getTripDest();
    }, []);

//   lists.filter(list => list.trip_id === trip_id);
//   console.log(lists);

    return (
        <div>
             <UserNavbar user_id={user_id}/>
             <div className="page">
                <h1 className="text-center" style={{marginRight: 200, marginLeft: 200}}>
                    {destination}<br></br>Packing Lists
                </h1>

                <div className="gen-add-btn text-center">
                    <button className="btn btn-light">
                        <Link to={`/trip-add-gen/user=${user_id}&trip=${trip_id}`}>Add a General List</Link>
                    </button>
                </div>
                

                <ListAddInput className="list-add" gen_list={false} />

                <div className="lists d-flex flex-wrap justify-content-evenly">
                    {lists.filter(list => (list.trip_id == trip_id)).sort((a, b) => a.trip_id-b.trip_id).map(list => (
                        <ListItemsView key={list.list_id} list={list} lists={lists} setLists={setLists} gen_list={false}/>
                    ))}
                    {genLists.filter(list => (list.trip_id == trip_id)).sort((a, b) => a.trip_id-b.trip_id).map(list => (
                        <ListItemsView key={list.list_id} list={list} lists={lists} setLists={setLists} gen_list={true}/>
                    ))}
                </div>
            </div>
        </div> 
    );
};

export default ListPage;