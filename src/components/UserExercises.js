import Input from "./Input"
import { useState } from "react"
import { useNavigate } from "react-router"

function UserExercises() {
  const [exercises, setExercises] = useState([])

  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }
  function goNext() {
    navigate("/summary")
  }

  function onChange(e) {
    const exerciseChecked = e.target.checked
    const exerciseName = e.target.name

    exerciseChecked
      ? setExercises([...exercises, exerciseName])
      : setExercises(
          exercises.filter((exercise) => {
            return exercise !== exerciseName
          })
        )
  }
  console.log(exercises)
  return (
    <div className="user-exercises-form back-button">
      <div className="exercises-header">
        <h3>Which of these exercises do you usually practise?: </h3>
      </div>
      <form className="user-exercises-form">
        <Input
          htmlFor="bench press"
          title="Bench Press"
          id="bench press"
          name="bench_press"
          type="checkbox"
          value={"bench press"}
          onChange={onChange}
        ></Input>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default UserExercises
