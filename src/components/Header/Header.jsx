import "./Header.css";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span>Welcome to my Website</span>
        <hr />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>

        <NavLink to="about">About</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="users">Users</NavLink>
      </nav>
    </div>
  );
};

export default Header;
