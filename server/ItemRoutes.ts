import pool from "./database";
import express from "express";

const itemRoutes = express.Router();

// add an item
itemRoutes.post("/allitems", async(req,res) => {
    try {
        const { item, quantity, list_id, checked_off } = req.body;
        const addItem = await pool.query("INSERT INTO items (item, quantity, list_id, checked_off) VALUES($1, $2, $3, $4)", [item, quantity, list_id, checked_off]);
    
        console.log(res.json(addItem.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete an item
itemRoutes.delete("/allitems/:item_id", async (req, res) => {
    try {
        const { item_id } = req.params;
        const deleteItem = await pool.query("DELETE FROM items WHERE item_id = $1", [item_id]);
        
        console.log(res.json(deleteItem));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update an item
itemRoutes.put("/allitems/:item_id", async (req, res) => {
    try {
        const { item_id } = req.params;
        const { item, quantity, list_id, checked_off } = req.body;
        const updateItem = await pool.query("UPDATE items SET item = $1, quantity = $2, list_id = $3, checked_off = $4 WHERE item_id = $5", [item, quantity, list_id, checked_off, item_id]);

        console.log(res.json(updateItem.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get an item
itemRoutes.get("/allitems/:item_id", async (req, res) => {
    try {
        const { item_id } = req.params;
        const getItem = await pool.query("SELECT * FROM items WHERE item_id = $1", [item_id]);

        console.log(res.json(getItem.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get all items
itemRoutes.get("/allitems", async (req, res) => {
    try {
        const allItems = await pool.query("SELECT * FROM items");

        console.log(res.json(allItems.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

// check on/off item
itemRoutes.put("/allitems/check/:item_id", async (req, res) => {
    try {
        const { item_id } = req.params;
        const { checked_off } = req.body;
        const checkItem = await pool.query("UPDATE items SET checked_off = $1 WHERE item_id = $24", [checked_off, item_id]);

        console.log(res.json(checkItem.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a items from a general list
itemRoutes.get("/allitems/gen_list/:list_id", async (req, res) => {
    try {
        const { list_id } = req.params;
        const getItem = await pool.query("SELECT * FROM items WHERE list_id = $1", [list_id]);

        console.log(res.json(getItem.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

export default itemRoutes;