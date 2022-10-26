import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ItemView from "./ItemView";
import ListAddInput from "./ListAddInput";

// import "./ListPage.css";

const ListPage = () => {
  const [lists, setLists] = useState([]);

  const trip_id = useParams();

  console.log(trip_id, "params/trip_id")

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

  lists.filter(list => list.trip_id === trip_id);
  console.log(lists);

  return (
    <div>
      <h1 className="text-center" style={{marginRight: 200, marginLeft: 200}}>Lists</h1>
      <ListAddInput></ListAddInput>
      <div className="lists d-flex flex-wrap">
        {lists.sort().map(list => (
            list.description,
            <ItemView list_name={list.description} list_id={list.list_id}/>
        ))}
      </div>
    </div>
  );
};

export default ListPage;