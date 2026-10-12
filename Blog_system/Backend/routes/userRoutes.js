import express from "express";

import jwt from "jsonwebtoken";

import { findUserByUsername, createUser } from "..services/userServices.js";
const router = express.Router();

router.post("/signup", (req, res) => {

    const{username,password} = req.body;

    if(!username || !password) {
        return res.status(400).json({
            
            message: "Username and password are required"
        });
    }
})