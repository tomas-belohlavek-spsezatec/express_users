import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../AuthContext";
import "./Navbar.css";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/">Home</Link></li>
                {!user && <li className="navbar-item"><Link to="/register">Register</Link></li>}
                {!user && <li className="navbar-item"><Link to="/login">Login</Link></li>}
                {user && <li className="navbar-item"><Link to="/user">User Page</Link></li>}
                {user && user.role === "admin" && <li className="navbar-item"><Link to="/admin">Admin Page</Link></li>}
                {user && <li className="navbar-item"><button onClick={logout} className="logout-button">Logout</button></li>}
                {user && <li className="navbar-item">{user.username}</li>}
            </ul>
        </nav>
    );
};

export default Navbar;