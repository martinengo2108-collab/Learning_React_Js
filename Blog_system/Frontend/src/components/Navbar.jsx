import { Link } from "react-router-dom";

function Navbar(){
    return(
        <nav
        className="navbar">
            <div className="navbar-container">
                <Link to="/" className="logo">
                    <span
                    className="logo-icon">✦</span>
                    StudentSphere
                </Link>
                <div className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/category">Categories</Link>
                    <Link to="/">About</Link>
                </div>
                <Link to="/create"
                className="share-button">
                    ✍Share your campus journey.
                </Link>
            </div>

        </nav>
    )
}
export default Navbar;