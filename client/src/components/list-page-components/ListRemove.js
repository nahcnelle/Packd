import React from "react";
import { useParams } from "react-router-dom";

const ListRemove = ({ list, lists, setLists, gen_list }) => {
    let user_id = useParams().user_id;
    let trip_id = useParams().trip_id;
  
    const deleteList = async (list_id) => {
        try {
            let response;
            console.log("list:", list_id)
            console.log("trip:", trip_id==null)

            if (gen_list && trip_id == null) {
                // general list and not in a trip
                // remove from packing_lists
                response = await fetch(`http://localhost:8000/alllists/list/${list_id}`, {
                    method: "DELETE"
                });
                console.log("done packinglist:")

                // remove from items
                response = await fetch(`http://localhost:8000/allitems/list/${list_id}`, {
                    method: "DELETE"
                });
                console.log("done items:")

                // remove from trip_gen_lists
                response = await fetch(`http://localhost:8000/genlists/alllist/${list_id}`, {
                    method: "DELETE"
                });
                console.log("done trip gen lists:")

                window.location = `/gen-list/user=${user_id}`;

            } else {
                // in a trip
                console.log("remove list")
                // general list
                if (gen_list) {
                    response = await fetch(`http://localhost:8000/genlists/list/${list_id}/trip/${trip_id}`, {
                        method: "DELETE"
                    });
                } else {
                    // normal list in a trip
                    response = await fetch(`http://localhost:8000/alllists/list/${list_id}`, {
                        method: "DELETE"
                    });

                    response = await fetch(`http://localhost:8000/allitems/list/${list_id}`, {
                        method: "DELETE"
                    });
                }

                window.location = `/list/user=${user_id}&trip=${trip_id}`;

            }

            
            // if (gen_list && trip_id == null) {
            //     window.location = `/gen-list/user=${user_id}`;
            // } else {
            //     window.location = `/list/user=${user_id}&trip=${trip_id}`;
            // }

                // setLists(lists.filter(list => list.list_id !== list_id));
        } catch (err) {
            console.error(err.message);
        }
    };

    return (
        <div>
            <button className="btn btn-danger" onClick={() => deleteList(list.list_id)}>Remove List</button>
        </div> 
    );
}

export default ListRemove;