import { useContext } from "react"
import { useNavigate } from "react-router"
import saveUser from "../services/saveUser"
import UserContext from "../context/User/UserContext"

function Summary() {
  const navigate = useNavigate()

  const userContext = useContext(UserContext)

  const { name, email, height, weight, age, gender } = userContext.state.data

  const listOfExercises = userContext.state.exercises

  function goBack() {
    navigate("/weights")
  }
  function handleSubmit() {
    const userProfile = userContext.state
    saveUser(userProfile)
  }

  return (
    <>
      <h1>Summary</h1>
      <div>
        <h3>User Data</h3>
        <div className="user-data card">
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Height (cm): {height}</div>
          <div>Weight (kilos): {weight}</div>
          <div>Age: {age}</div>
          <div>Gender: {gender}</div>
        </div>
      </div>
      <div>
        <h3>Exercises</h3>
        <ul aria-label="user-exercises list">
          {listOfExercises.map((exercise, position) => {
            return (
              <li key={position} aria-label={`user-exercise ${position + 1}`}>
                {exercise + ":"}
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
