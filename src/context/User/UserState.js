import UserContext from "./UserContext"
import UserReducer from "./UserReducer"
import { useReducer, useState } from "react"

function UserState({ children }) {
  const [userData, setUserData] = useState({})

  const [userExercises, setUserExercises] = useState([])

  const userGlobalState = {
    userData: {},
    userExercises: [],
    weightExercises: {},
  }

  const [state, dispatch] = useReducer(UserReducer, userGlobalState)

  return (
    <UserContext.Provider
      value={{
        state,
        dispatch,
        userData,
        setUserData,
        userExercises,
        setUserExercises,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserState
