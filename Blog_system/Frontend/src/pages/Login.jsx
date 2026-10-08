import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleLogin = async (event) => {
        event.preventDefault();

        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                "http://localhost:5000/api/auth/login",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            sessionStorage.setItem(
                "adminToken",
                data.token
            );

            if(data.role){
                sessionStorage.setItem("role",data.role);
            }

            navigate("/");
        } catch (error) {
            setError(
                error.message || "Unable to log in."
            );;

        } finally {
            setLoading(false);
        }
    };
    return (
        <main
            className="form-page">
            <div className="form-header">
                <span className="section-label">
                WELCOME BACK
                </span>
                <h1>
                    Log in
                </h1>
                <p>
                    Log in to continue to your account and access your personalized dashboard.
                </p>

            </div>

            <form
             className="post-form"
                onSubmit={handleLogin}>

                <div className="form-group">
                    <label htmlFor="username">
                        Username
                    </label>
                    <input
                        id="username"
                        value={username}
                        type="text"
                        onChange={(event) =>
                            setUsername(event.target.value)
                        } 
                        placeholder="Enter your username"
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) =>
                            setPassword(event.target.value)
                        }
                        placeholder="Enter your password"
                        required />
                </div>
                {error && (
                    <p
                        style={{ color: "red" }}>

                        {error}
                    </p>
                )}
                <button
                    className="submit-post"
                    type="submit"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Log in"}

                </button>
            </form>
            <p>
                Don't have an account?{" "}
                
            </p>
        </main>
    );
}

export default Login;