import { Link } from "react-router-dom";
import "./User.css";
const User = ({ user }) => {
  const { id, name, phone, email, website } = user;

  return (
    <div className="useStyle ">
      <h2>{name}</h2>
      <p>Eamil: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <Link to={`/user/${id}`}>Show Details</Link>
      <Link to={`/user/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default User;
