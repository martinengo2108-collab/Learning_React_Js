import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer
        className="footer">
            <div className="footer-container">
                <div className="footer-brand">
                    <Link
                    to="/"
                    className="logo">
                        <span
                        className="logo-icon">✦</span>
                        StudentSphere
                    </Link>
                    
                    <p>
                        A space where students share experiences, ideas and stories that matter.
                    </p>
                </div>
                <div className="footer-links">
                    <h4>Explore</h4>
                    <Link to="/"> Home</Link>
                    <Link to="/category"> Categories</Link>
                    <Link to="/about"> About</Link>
                </div>
                <div className="footer-links">
                    <h4>Community</h4>

                    <Link to="/create">Share your story</Link>
                    <Link to="/discover">Discover stories</Link>
                </div>

            </div>
            <div className="footer-bottom">
                <p>© 2026 StudentSphere. Built for student voices</p>
            </div>
        </footer>
    );

}

export default Footer;