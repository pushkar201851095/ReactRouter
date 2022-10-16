import {  NavLink } from "react-router-dom";
// function NavBar()

const NavBar = () => {
  return (
    <div>
      <ul className="navbar">
        <li><NavLink className="nav-bar-link" to="/about">About</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/">Home</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/user">User</NavLink></li>
        
      </ul>
    </div>
  );
};

export default NavBar;
