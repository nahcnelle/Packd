import express from "express";
import cors from "cors";
import pool from "./database";
import tripRoutes from "./TripRoutes";
import listRoutes from "./ListRoutes";
import itemRoutes from "./ItemRoutes";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use(tripRoutes);
app.use(listRoutes);
app.use(itemRoutes);

app.listen(8000, () => {
    console.log("packd server started on port 8000");
});
