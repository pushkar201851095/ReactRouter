import { Link } from "react-router-dom";
// function NavBar()

const NavBar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
