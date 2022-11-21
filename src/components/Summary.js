import { useContext } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function Summary() {
  const navigate = useNavigate()

  const user = useContext(UserContext)

  console.log("all context", user)
  console.log("state", user.state)

  function goBack() {
    navigate("/exercises")
  }

  return (
    <>
      <h1>Summary</h1>
      <div>
        <h3>User Data</h3>
        <ul aria-label="user-data list">
          <li aria-label="user-data name">Name:</li>
          <li aria-label="user-data email">Email:</li>
          <li aria-label="user-data height">Height (cm):</li>
          <li aria-label="user-data weight">Weight (kilos):</li>
          <li aria-label="user-data age">Age:</li>
          <li aria-label="user-data gender">Gender:</li>
        </ul>
      </div>
      <div>
        <h3>Exercises</h3>
        <ul aria-label="user-exercises list">
          <li aria-label="user-exercises first"></li>
        </ul>
      </div>

      <button onClick={goBack}>back</button>
      <button>Submit</button>
    </>
  )
}

export default Summary
