import React from "react";

const ListRemove = ({ list, lists, setLists }) => {
  
  const deleteList = async (list_id) => {
    console.log("click")
    try {
        console.log(list_id)
        
        let response = await fetch(`http://localhost:8000/alllists/list/${list_id}`, {
            method: "DELETE"
        });

        console.log(response)

        setLists(lists.filter(list => list.list_id !== list_id));
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