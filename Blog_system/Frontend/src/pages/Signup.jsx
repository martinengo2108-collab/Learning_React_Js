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
        if (password.length < 6) {
            setError("Password must be at least 6 characters long");
            return;
        }
        try {
            const response = await fetch(
                "http://localhost:5000/api/users/signup",
                {
                    method: "POST",
                    headers:{
                        "Content-Type":"application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );
            const data = await response.json();
            if (!response.ok) {
                setError(data.message || "An error occurred during signup");
            }
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
                <div className="form-group">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)
                        }
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Create a password"
                        required
                    />

                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input
                        id="confirmPassword"
                        type="text"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        placeholder="Confirm your password"
                        required
                    />
                </div>

                {error && (
                    <p style={{ color: "red" }}
                    >
                        {error}
                    </p>
                )}
                <button
                    className="submit-post"
                    type="submit"
                >
                    Create Account
                </button>
            </form>
            <p>
                Already have an account? {" "}
                <button
                    type="button"
                    onClick={() => navigate("/login")}
                >

                    Log in
                </button>

            </p>
        </main>

    )
}
export default Signup;