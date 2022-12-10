import { useContext } from "react"
import { useNavigate } from "react-router"
import saveUser from "../services/saveUser"
import UserContext from "../context/User/UserContext"

function Summary() {
  const navigate = useNavigate()

  const userContext = useContext(UserContext)

  const { name, email, height, weight, age, gender } = userContext.state.data

  const exercisesAndWeights = userContext.state.weights

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
          {exercisesAndWeights.deadLift && <h5>Hay Peso muerto</h5>}
          {exercisesAndWeights.benchPress && <h5>Hay Press Banca</h5>}
        </ul>
      </div>

      <button onClick={goBack}>back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Summary
