// import { useQuery } from "@apollo/client/react"
// import { GET_USERS } from "./graphql/graphql"
// import { type GetUsersData } from "./graphql/types";

// function App() {
//   const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

//   if (loading) return <p>Loading......</p>

//   if (error) return <p>Error = {error.message}</p>

//   if(!data) return <p>No data</p>


//   return (
//     <>
//       <div>
//         <h1>Users</h1>

//         {data.users.map((user: any) => (
//           <div key={user.id}>
//             <strong>{user.username}</strong>
//             <p>{user.email}</p>
//           </div>
//         ))}
//       </div>
//       );
//     </>
//   )
// }

// export default App


import { useMutation } from "@apollo/client/react";
import { useState } from "react";

import { CREATE_USER } from "./graphql/mutations";
import type {
  CreateUserData,
  CreateUserVariables,
} from "./graphql/types";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [createUser, { loading, error, data }] = useMutation<
    CreateUserData,
    CreateUserVariables
  >(CREATE_USER);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await createUser({
      variables: {
        username,
        email,
        password,
      },
    });
  };

  return (
    <div>
      <h1>Create Account</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Account"}
        </button>
      </form>

      {error && <p>Error: {error.message}</p>}

      {data && (
        <div>
          <h2>Account created 🎉</h2>
          <p>ID: {data.createUser.id}</p>
          <p>Username: {data.createUser.username}</p>
          <p>Email: {data.createUser.email}</p>
        </div>
      )}
    </div>
  );
}

export default App;

