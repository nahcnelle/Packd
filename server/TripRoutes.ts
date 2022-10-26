import pool from "./database";
import express from "express";

const tripRoutes = express.Router();

// add a trip
tripRoutes.post("/alltrips", async(req,res) => {
    try {
        const { destination } = req.body;
        const newTrip = await pool.query("INSERT INTO trips (destination) VALUES($1)", [destination]);
    
        console.log(res.json(newTrip.rows[0]));
      } catch (err : any) {
        console.error(err.message);
      }
});

// delete a trip
tripRoutes.delete("/alltrips/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deleteTrip = await pool.query("DELETE FROM trips WHERE trip_id = $1", [id]);
        
        console.log(res.json(deleteTrip));
    } catch (err : any) {
        console.log(err.message);
    }
});

// update a trip
tripRoutes.put("/alltrips/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { destination } = req.body;
        const updateTrip = await pool.query("UPDATE trips SET destination = $1 WHERE trip_id = $2", [destination, id]);

        console.log(res.json(updateTrip.rows[0]));
    } catch (err : any) {
        console.error(err.message);
    }
});

// get a trip
tripRoutes.get("/alltrips/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const getTrip = await pool.query("SELECT * FROM trips WHERE trip_id = $1", [id]);

        console.log(res.json(getTrip.rows[0]));
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