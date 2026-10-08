import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() { 
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
}