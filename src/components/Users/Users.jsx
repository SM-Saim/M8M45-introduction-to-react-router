import { useLoaderData } from "react-router-dom";
import User from "../User/User";

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
      <div>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
