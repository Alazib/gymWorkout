function UserReducer(state, action) {
  switch (action.type) {
    case "USER_DATA":
      return { ...state, data: action.payload }
    case "USER_EXERCISES":
      return { ...state, exercises: action.payload }
    default:
      return state
  }
}

export default UserReducer
