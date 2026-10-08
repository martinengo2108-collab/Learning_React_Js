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

        console.log({
            username,
            password,
        });
    };
    return (
    <main className="form-page">
        <div className="form-header">
            <span className="section-label">
                JOIN THE COMMUNITY
            </span>
            <h1>
                Create an Account
            </h1>
            <p>
                Create an account to start sharing your experiences!
            </p>
        </div>
        <form 
        className="post-form"
        onSubmit={handleSignup}>
        </form>
    </main>

    )
}