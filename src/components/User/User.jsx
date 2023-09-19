const User = ({ user }) => {
  const { name, phone, email, website } = user;

  // applying style
  const useStyle = {
    border: "2px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px",
    backgroundColor: "cyan",
  };

  return (
    <div style={useStyle}>
      <h2>{name}</h2>
      <p>Eamil: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
    </div>
  );
};

export default User;
