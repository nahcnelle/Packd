import pool from "./database";
import express from "express";

const userRoutes = express.Router();

// add a user
userRoutes.post("/users", async(req,res) => {
    try {
        const { username } = req.body;
        const addUser = await pool.query("INSERT INTO users (user_name) VALUES($1)", [username]);
    
        console.log(res.json(addUser.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete a user
userRoutes.delete("/users/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1", [user_id]);
        
        console.log(res.json(deleteUser));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update a user
userRoutes.put("/users/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const { username } = req.body;
        const updateUser = await pool.query("UPDATE users SET user_name = $1 WHERE user_id = $4", [username, user_id]);

        console.log(res.json(updateUser.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a user
userRoutes.get("/users/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const getUser = await pool.query("SELECT * FROM users WHERE user_id = $1", [user_id]);

        console.log(res.json(getUser.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a user by username
userRoutes.get("/users/username/:user_name", async (req, res) => {
    try {
        const { user_name } = req.params;
        const getUser = await pool.query("SELECT user_id FROM users WHERE user_name = $1", [user_name]);

        console.log(res.json(getUser.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get all users
userRoutes.get("/users", async (req, res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");

        console.log(res.json(allUsers.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

export default userRoutes;