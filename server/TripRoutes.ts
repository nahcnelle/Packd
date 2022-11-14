import pool from "./database";
import express from "express";

const tripRoutes = express.Router();

// add a trip
tripRoutes.post("/alltrips", async(req,res) => {
    try {
        const { destination, user_id } = req.body;
        const newTrip = await pool.query("INSERT INTO trips (destination, user_id) VALUES($1, $2)", [destination, user_id]);
    
        console.log(res.json(newTrip.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete a trip
tripRoutes.delete("/alltrips/:trip_id", async (req, res) => {
    try {
        const { trip_id } = req.params;
        const deleteTrip = await pool.query("DELETE FROM trips WHERE trip_id = $1", [trip_id]);
        
        console.log(res.json(deleteTrip));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update a trip
tripRoutes.put("/alltrips/:trip_id", async (req, res) => {
    try {
        const { trip_id } = req.params;
        const { destination } = req.body;
        const updateTrip = await pool.query("UPDATE trips SET destination = $1 WHERE trip_id = $2", [destination, trip_id]);

        console.log(res.json(updateTrip.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a trip
tripRoutes.get("/alltrips/:trip_id", async (req, res) => {
    try {
        const { trip_id } = req.params;
        const getTrip = await pool.query("SELECT * FROM trips WHERE trip_id = $1", [trip_id]);

        console.log(res.json(getTrip.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get user's trips
tripRoutes.get("/alltrips/:user_id", async (req, res) => {
    try {
        const { user_id } = req.params;
        const userTrips = await pool.query("SELECT * FROM trips where user_id = $1", [user_id]);

        console.log(res.json(userTrips.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get all trips
tripRoutes.get("/alltrips", async (req, res) => {
    try {
        const allTrips = await pool.query("SELECT * FROM trips");

        console.log(res.json(allTrips.rows));
    } catch (err : any) {
        console.error(err.message);
    }
});

export default tripRoutes;