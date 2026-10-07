import { useQuery } from "@apollo/client/react"
import { GET_USERS } from "./graphql/graphql"
import { type GetUsersData } from "./graphql/types";

function App() {
  const { loading, error, data } = useQuery<GetUsersData>(GET_USERS);

  if (loading) return <p>Loading......</p>

  if (error) return <p>Error = {error.message}</p>

  if(!data) return <p>No data</p>


  return (
    <>
      <div>
        <h1>Users</h1>

        {data.users.map((user: any) => (
          <div key={user.id}>
            <strong>{user.username}</strong>
            <p>{user.email}</p>
          </div>
        ))}
      </div>
      );
    </>
  )
}

export default App
