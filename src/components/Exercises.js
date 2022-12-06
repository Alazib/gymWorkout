import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function Exercises() {
  const [userExercises, setUserExercises] = useState([])

  const userContext = useContext(UserContext)
  const { dispatch, state } = userContext
  const { exercises } = state

  useEffect(() => {
    checkIfGlobalStateHasExercises()
  }, [])

  function checkIfGlobalStateHasExercises() {
    const globalStateHasExercises = exercises.length > 0
    if (globalStateHasExercises) {
      setUserExercises(exercises)
    }
  }

  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }
  function goNext(e) {
    e.preventDefault()
    dispatchUserExercises()
    navigate("/weights")
  }

  function dispatchUserExercises() {
    dispatch({
      type: "USER_EXERCISES",
      payload: userExercises,
    })
  }

  function handleInputChange(e) {
    const exerciseChecked = e.target.checked
    const exercise = e.target.value
    const exercisesIsInTheList = userExercises.includes(e.target.value)

    if (exerciseChecked && !exercisesIsInTheList) {
      setUserExercises([...userExercises, exercise])
    }

    if (!exerciseChecked && exercisesIsInTheList) {
      setUserExercises(
        userExercises.filter((filterExercise) => {
          return filterExercise !== exercise
        })
      )
    }
  }

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
            id="bench press"
            name="bench_press"
            type="checkbox"
            value="Bench Press"
            checked={userExercises.includes("Bench Press")}
            onChange={handleInputChange}
          ></Input>
        </div>
        <div className="dead lift">
          <Input
            htmlFor="dead lift"
            title="Dead Lift"
            id="dead lift"
            name="dead_lift"
            type="checkbox"
            value="Dead Lift"
            checked={userExercises.includes("Dead Lift")}
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
