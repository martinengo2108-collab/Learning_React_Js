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
                    </Link>
                </div>
            </div>
        </footer>
    )

}