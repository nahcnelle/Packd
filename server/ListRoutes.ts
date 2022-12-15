import pool from "./database";
import express from "express";

const listRoutes = express.Router();

// add a list
listRoutes.post("/alllists", async(req,res) => {
    try {
        const { description, trip_id, user_id, gen_list } = req.body;
        console.log(description);
        // const newItem = await pool.query("INSERT INTO packing_lists (description, trip_id) VALUES('sanfrancisco', 33)");
        const newList = await pool.query("INSERT INTO packing_lists (description, trip_id, user_id, gen_list) VALUES($1, $2, $3, $4)", [description, trip_id, user_id, gen_list]);
    
        console.log(res.json(newList.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete a list
listRoutes.delete("/alllists/list/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const deleteList = await pool.query("DELETE FROM packing_lists WHERE list_id = $1", [list_id]);
        
        console.log(res.json(deleteList));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update a list
listRoutes.put("/alllists/list/:list_id", async (req, res) => {
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
listRoutes.get("/alllists/list/:list_id", async (req, res) => {
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

// get all general lists for a user
listRoutes.get("/genlists/user/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const genLists = await pool.query("SELECT * FROM packing_lists WHERE user_id = $1 AND gen_list = true", [user_id]);

        console.log(res.json(genLists.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

// add general list to a trip
listRoutes.post("/tripgenlist", async(req,res) => {
    try {
        const { list_id, trip_id} = req.body;
        // const newItem = await pool.query("INSERT INTO packing_lists (description, trip_id) VALUES('sanfrancisco', 33)");
        const genList = await pool.query("INSERT INTO trip_gen_lists (list_id, trip_id) VALUES($1, $2)", [list_id, trip_id]);
    
        console.log(res.json(genList.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// get all general lists for a trip
listRoutes.get("/genlists/trip/:trip_id", async (req, res) => {
    try {
        const { trip_id } = req.params;
        const genLists = await pool.query("SELECT * FROM packing_lists INNER JOIN trip_gen_lists ON packing_lists.list_id = trip_gen_lists.list_id WHERE trip_gen_lists.trip_id = $1 AND packing_lists.gen_list = true", [trip_id]);

        console.log(res.json(genLists.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

// delete a general list from a trip
listRoutes.delete("/genlists/list/:list_id/trip/:trip_id", async (req, res) => {
    try {
        const { list_id, trip_id } = req.params;
        const deleteList = await pool.query("DELETE FROM trip_gen_lists WHERE list_id = $1 AND trip_id = $2", [list_id, trip_id]);
        
        console.log(res.json(deleteList));
    } catch (err : any) {
        console.log(err.message);
    }
});

// delete all instances of a general list from trip_gen_lists
listRoutes.delete("/genlists/alllist/:list_id/", async (req, res) => {
    try {
        const { list_id } = req.params;
        const deleteList = await pool.query("DELETE FROM trip_gen_lists WHERE list_id = $1", [list_id]);
        
        console.log(res.json(deleteList));
    } catch (err : any) {
        console.log(err.message);
    }
});

export default listRoutes;