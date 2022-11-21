import UserContext from "./UserContext"
import UserReducer from "./UserReducer"
import { useReducer } from "react"

function UserState({ children }) {
  const initialState = {}

  const [state, dispatch] = useReducer(UserReducer, initialState)

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserState
