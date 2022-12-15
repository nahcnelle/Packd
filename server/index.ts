// express used to write handlers for queries to the database
import express from "express";
// cors enables access of database from remote hosts
import cors from "cors";
import pool from "./database";
import tripRoutes from "./TripRoutes";
import listRoutes from "./ListRoutes";
import itemRoutes from "./ItemRoutes";
import userRoutes from "./UserRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use(tripRoutes);
app.use(listRoutes);
app.use(itemRoutes);
app.use(userRoutes);

app.listen(8000, () => {
    console.log("packd server started on port 8000");
});
