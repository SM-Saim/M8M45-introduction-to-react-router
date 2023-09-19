import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav>
        <span>Welcome to my Website</span>
        <br />
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="about">About</Link>
        <Link to="users">Users</Link>
      </nav>
    </div>
  );
};

export default Header;
