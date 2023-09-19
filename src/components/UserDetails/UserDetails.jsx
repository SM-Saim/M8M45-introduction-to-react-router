import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, username, company, email } = user;
  return (
    <div>
      <h2>This is user Detail:{name} </h2>
      <p>UserName: {username}</p>
      <p>Company Name: {company.name}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserDetails;
