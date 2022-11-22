function UserReducer(state, action) {
  switch (action.type) {
    case "USER_DATA":
      return { ...state, userData: action.payload }
    case "USER_EXERCISES":
      return { ...state, userExercises: action.payload }
    default:
      return state
  }
}

export default UserReducer
