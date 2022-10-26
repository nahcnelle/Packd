import pool from "./database";
import express from "express";

const listRoutes = express.Router();

// add a list
listRoutes.post("/alllists", async(req,res) => {
    try {
        const { description, trip_id } = req.body;
        console.log(description);
        // const newItem = await pool.query("INSERT INTO packing_lists (description, trip_id) VALUES('sanfrancisco', 33) RETURNING *");
        const newList = await pool.query("INSERT INTO packing_lists (description, trip_id) VALUES($1, $2) RETURNING *", [description, trip_id]);
    
        console.log(res.json(newList.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete a list
listRoutes.delete("/alllists/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const deleteList = await pool.query("DELETE FROM packing_lists WHERE list_id = $1", [list_id]);
        
        console.log(res.json(deleteList));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update a list
listRoutes.put("/alllists/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const { description } = req.body;
        const updateList = await pool.query("UPDATE packing_lists SET description = $1 WHERE list_id = $2", [description, list_id]);

        console.log(res.json(updateList.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a list
listRoutes.get("/alllists/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const getList = await pool.query("SELECT * FROM packing_lists WHERE list_id = $1", [list_id]);

        console.log(res.json(getList.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get all lists
listRoutes.get("/alllists", async (req, res) => {
    try {
        const allLists = await pool.query("SELECT * FROM packing_lists");

        console.log(res.json(allLists.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

export default listRoutes;