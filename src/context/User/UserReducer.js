function UserReducer(state, action) {
  switch (action.type) {
    case "ADD_EMAIL":
      return { ...state, email: action.payload }
    case "ADD_NAME":
      return { ...state, name: action.payload }
    case "ADD_HEIGHT":
      return { ...state, height: action.payload }
    case "ADD_WEIGHT":
      return { ...state, weight: action.payload }
    case "ADD_AGE":
      return { ...state, age: action.payload }
    case "ADD_GENDER":
      return { ...state, gender: action.payload }
    default:
      return state
  }
}

export default UserReducer
