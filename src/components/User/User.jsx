import "./User.css";
const User = ({ user }) => {
  const { name, phone, email, website } = user;

  return (
    <div className="useStyle ">
      <h2>{name}</h2>
      <p>Eamil: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default User;
