import pool from "./database";
import express from "express";

const itemRoutes = express.Router();

// add an item
itemRoutes.post("/allitems", async(req,res) => {
    try {
        const { item, quantity, list_id } = req.body;
        const addItem = await pool.query("INSERT INTO items (item, quantity, list_id) VALUES($1, $2, $3) RETURNING *", [item, quantity, list_id]);
    
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
        const { item, quantity, list_id } = req.body;
        const updateItem = await pool.query("UPDATE items SET item = $1, quantity = $2, list_id = $3 WHERE item_id = $4", [item, quantity, list_id, item_id]);

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

export default itemRoutes;