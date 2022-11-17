import { useNavigate } from "react-router"

function Summary() {
  const navigate = useNavigate()
  function goBack() {
    navigate("/exercises")
  }

  return (
    <>
      <h1>Summary</h1>
      <div>
        <h3>User Data</h3>
        <ul>
          <li>Name:</li>
          <li>Email:</li>
          <li>Height(cm):</li>
          <li>Weight:</li>
          <li>Age:</li>
          <li>Gender:</li>
        </ul>
      </div>
      <div>
        <h3>Exercises</h3>
        <ul>
          <li>???</li>
        </ul>
      </div>

      <button onClick={goBack}>back</button>
      <button>Submit</button>
    </>
  )
}

export default Summary
