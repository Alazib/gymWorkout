import UserContext from "./UserContext"
import UserReducer from "./UserReducer"
import { useReducer } from "react"

function UserState({ children }) {
  const user = {
    data: {},
    exercises: [],
    weight: {},
  }

  const [state, dispatch] = useReducer(UserReducer, user)

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
