function UserReducer(state, action) {
  switch (action.type) {
    case "USER_DATA":
      return { ...state, data: action.payload }
    case "USER_EXERCISES_ID":
      return { ...state, exercisesId: action.payload }
    case "USER_EXERCISES_NAME":
      return { ...state, exercisesName: action.payload }
    case "USER_WEIGHTS":
      return { ...state, weights: action.payload }
    default:
      return state
  }
}

export default UserReducer
