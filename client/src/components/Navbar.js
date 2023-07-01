import { Outlet, Link } from "react-router-dom";
import Register from "./RegisterForm.js";
import Login from "./LoginForm.js";
import Profile from './Profile.js';
import Home from './Home.js';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Social Media Application</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/Register">Register</Link>
              </li>
              <li className="nav-item">
                <Link to="/Home">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/Login">Login</Link>
              </li>
              <li className="nav-item">
                <Link  to="/Profile">Profile</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </div>
  );
}

export default Navbar;