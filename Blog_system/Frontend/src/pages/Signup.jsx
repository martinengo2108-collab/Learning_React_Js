import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() { 
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (event) => {
        event.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }
        if(password.length < 6){
            setError("Password must be at least 6 characters long");
            return;
        }
    }
}