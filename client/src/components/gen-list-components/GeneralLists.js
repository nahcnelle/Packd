import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import GenListView from "../gen-list-components/GenListView";
import ListAddInput from "../list-page-components/ListAddInput";
import UserNavbar from "../UserNavbar";

import "../css-files/GeneralLists.css";

const GeneralLists = () => {
    const [lists, setLists] = useState([]);

    let user_id = useParams().user_id;
    console.log("user", user_id)


    const getGenLists = async () => {
        try {
            const response = await fetch(`http://localhost:8000/genlists/user/${user_id}`);
            const jsonData = await response.json();
            console.log(jsonData)

            setLists(jsonData);
        } catch (err) {
        console.error(err.message);
        }
    };

    useEffect(() => {
        getGenLists();
    }, []);

    return (
        <div>
             <UserNavbar user_id={user_id}/>
             <div className="page">
                <h1 className="text-center" style={{marginRight: 200, marginLeft: 200}}>
                    General Lists
                </h1>

                <ListAddInput className="gen-list-add" gen_list={true}/>

                <div className="lists d-flex flex-wrap justify-content-evenly">
                    {lists.sort((a, b) => a.list_id-b.list_id).map(list => (
                        <GenListView key={list.list_id} list={list} lists={lists} setLists={setLists} user_id={user_id} />
                    ))}
                </div>
            </div>
        </div> 
    );
};

export default GeneralLists;