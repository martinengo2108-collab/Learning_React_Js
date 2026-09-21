import express from "express";
import cors from "cors";
import dotenv from "dotenv"

import postRoutes from "./routes/postRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        message: "Blogging system API is running "
    });
});

app.use("/api/posts", postRoutes);

app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);

});