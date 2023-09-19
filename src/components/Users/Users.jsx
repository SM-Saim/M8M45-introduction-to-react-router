import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import "./Users.css";

const Users = () => {
  const users = useLoaderData();
  //   state-->data
  //   state-->loader
  //   use effect
  //   fetch --> stste set --> set state\
  console.log(users);
  return (
    <div>
      <h2>Users: {users.length}</h2>
      <p>First time users will get discount copun</p>
      <div className="users">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
