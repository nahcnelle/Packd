import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ListItemsView from "./ListItemsView";
import ListAddInput from "./ListAddInput";

import "../css-files/ListPage.css";

const ListPage = () => {
    const [lists, setLists] = useState([]);

    let trip_id = useParams().trip_id;
    //   trip_id = trip_id.trip_id;

    // console.log(trip_id, "params/trip_id")

    const getLists = async () => {
        try {
        const response = await fetch("http://localhost:8000/alllists");
        const jsonData = await response.json();

        setLists(jsonData);
        } catch (err) {
        console.error(err.message);
        }
    };

    useEffect(() => {
        getLists();
    }, []);

//   lists.filter(list => list.trip_id === trip_id);
//   console.log(lists);

    return (
        <div className="page">
            <h1 className="text-center" style={{marginRight: 200, marginLeft: 200}}>
                Lists
            </h1>

            <ListAddInput className="list-add"/>

            <div className="lists d-flex flex-wrap justify-content-evenly">
                {lists.filter(list => (list.trip_id == trip_id)).sort((a, b) => a.trip_id-b.trip_id).map(list => (
                    <ListItemsView key={list.list_id} list={list} lists={lists} setLists={setLists}/>
                ))}
            </div>
        </div>
    );
};

export default ListPage;