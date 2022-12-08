import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function Exercises() {
  const [userExercisesId, setUserExercisesId] = useState([])

  const userContext = useContext(UserContext)
  const { dispatch, state } = userContext
  const { exercisesId } = state

  useEffect(() => {
    checkIfGlobalStateHasExercises()
  }, [])

  function checkIfGlobalStateHasExercises() {
    const globalStateHasExercises = exercisesId.length > 0
    if (globalStateHasExercises) {
      setUserExercisesId(exercisesId)
    }
  }

  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }
  function goNext(e) {
    e.preventDefault()
    dispatchUserExercisesId()
    navigate("/weights")
  }

  function dispatchUserExercisesId() {
    dispatch({
      type: "USER_EXERCISES_ID",
      payload: userExercisesId,
    })
  }

  function handleInputChange(e) {
    const exerciseChecked = e.target.checked
    const exercise = e.target.id
    const exercisesIsInTheList = userExercisesId.includes(e.target.id)

    if (exerciseChecked && !exercisesIsInTheList) {
      setUserExercisesId([...userExercisesId, exercise])
    }

    if (!exerciseChecked && exercisesIsInTheList) {
      setUserExercisesId(
        userExercisesId.filter((filterExercise) => {
          return filterExercise !== exercise
        })
      )
    }
  }

  console.log(userExercisesId)

  return (
    <div className="user-exercises-form back-button">
      <div className="exercises-header">
        <h3>Which of these exercises do you usually practise?: </h3>
      </div>
      <form className="user-exercises-form" onSubmit={goNext}>
        <div className="bench-press">
          <Input
            htmlFor="bench press"
            title="Bench Press"
            id="benchPress"
            name="bench_press"
            type="checkbox"
            value="Bench Press"
            checked={userExercisesId.includes("benchPress")}
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="dead-lift">
          <Input
            htmlFor="dead lift"
            title="Dead Lift"
            id="deadLift"
            name="dead_lift"
            type="checkbox"
            value="Dead Lift"
            checked={userExercisesId.includes("deadLift")}
            onChange={handleInputChange}
          ></Input>
        </div>
        <button>Next</button>
      </form>
      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default Exercises
