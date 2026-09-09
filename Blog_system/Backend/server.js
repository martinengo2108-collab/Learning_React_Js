import express from "express";
import cors from "cors";

import postRoutes from "./routes/postRoutes";

const app =express();
const PORT =5000;

app.use(cors());
app.use(express.json())