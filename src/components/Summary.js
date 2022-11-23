import { useContext } from "react"
import { useNavigate } from "react-router"
import saveUser from "../services/saveUser"
import UserContext from "../context/User/UserContext"

function Summary() {
  const navigate = useNavigate()

  const user = useContext(UserContext)

  const { name, email, height, weight, age, gender } = user.state.userData

  const listOfExercises = user.state.userExercises

  function goBack() {
    navigate("/exercises")
  }
  function handleSubmit(user) {
    const userProfile = user.state
    saveUser(userProfile)
  }

  console.log("all context", user)

  return (
    <>
      <h1>Summary</h1>
      <div>
        <h3>User Data</h3>
        <ul aria-label="user-data list">
          <li aria-label="user-data name">Name: {name}</li>
          <li aria-label="user-data email">Email: {email}</li>
          <li aria-label="user-data height">Height (cm): {height}</li>
          <li aria-label="user-data weight">Weight (kilos): {weight}</li>
          <li aria-label="user-data age">Age: {age}</li>
          <li aria-label="user-data gender">Gender: {gender}</li>
        </ul>
      </div>
      <div>
        <h3>Exercises</h3>
        <ul aria-label="user-exercises list">
          {listOfExercises.map((exercise, position) => {
            return (
              <li key={position} aria-label={`user-exercise ${position + 1}: `}>
                {exercise}
              </li>
            )
          })}
        </ul>
      </div>

      <button onClick={goBack}>back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Summary
