import React from "react";

const ListRemove = ({ list, lists, setLists }) => {
  
  const deleteList = async (list_id) => {
    try {
      await fetch(`http://localhost:8000/alllists/${list_id}`, {
        method: "DELETE"
      });

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