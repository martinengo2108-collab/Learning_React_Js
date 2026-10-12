import express from "express";

import jwt from "jsonwebtoken";

import { findUserByUsername, createUser } from "..services/userServices.js";
const router = express.Router();

router.post("/signup", (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({

            message: "Username and password are required"
        });
    }
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters long.",
        });
    }
    const existingUser = findUserByUsername(username);
    if (existingUser) {
        return res.status(400).json({
            message: "Username already exists."
        });
    }

    const user = createUser(username, password);
    const token = jwt.sign(

    )
})