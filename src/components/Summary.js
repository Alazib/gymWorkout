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

      <div className="user-data-card">
        <h3>User Data</h3>
        <div>
          <div>Name: {name}</div>
          <div>Email: {email}</div>
          <div>Height (cm): {height}</div>
          <div>Weight (kilos): {weight}</div>
          <div>Age: {age}</div>
          <div>Gender: {gender}</div>
        </div>
      </div>

      <div className="user-exercises-card">
        <h3>Exercises</h3>
        <div>
          {exercisesAndWeights.deadLift && (
            <div>Dead Lift: {exercisesAndWeights.deadLift} kg </div>
          )}
          {exercisesAndWeights.benchPress && (
            <div>Bench Press: {exercisesAndWeights.benchPress} kg</div>
          )}
          {exercisesAndWeights.squat && (
            <div>Squat: {exercisesAndWeights.squat} kg</div>
          )}
          {exercisesAndWeights.pullUps && (
            <div>Squat: {exercisesAndWeights.pullUps} reps.</div>
          )}
        </div>
      </div>

      <button onClick={goBack}>back</button>
      <button onClick={handleSubmit}>Submit</button>
    </>
  )
}

export default Summary
