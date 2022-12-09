import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function Exercises() {
  const [userExercisesId, setUserExercisesId] = useState([])
  const [userExercisesName, setUserExercisesName] = useState([])

  const userContext = useContext(UserContext)
  const { dispatch, state } = userContext
  const { exercisesId, exercisesName } = state

  useEffect(() => {
    checkIfGlobalStateHasExercises()
  }, [])

  function checkIfGlobalStateHasExercises() {
    const globalStateHasExercises = exercisesId.length > 0
    if (globalStateHasExercises) {
      setUserExercisesId(exercisesId)
      setUserExercisesName(exercisesName)
    }
  }

  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }
  function goNext(e) {
    e.preventDefault()
    dispatchUserExercisesId()
    dispatchUserExercisesName()
    navigate("/weights")
  }

  function dispatchUserExercisesId() {
    dispatch({
      type: "USER_EXERCISES_ID",
      payload: userExercisesId,
    })
  }
  function dispatchUserExercisesName() {
    dispatch({
      type: "USER_EXERCISES_NAME",
      payload: userExercisesName,
    })
  }

  function handleInputChange(e) {
    exercisesIdSetter(e)
    exercisesNameSetter(e)
  }

  function exercisesIdSetter(e) {
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
  function exercisesNameSetter(e) {
    const exerciseChecked = e.target.checked
    const exercise = e.target.name
    const exercisesIsInTheList = userExercisesName.includes(e.target.name)

    if (exerciseChecked && !exercisesIsInTheList) {
      setUserExercisesName([...userExercisesName, exercise])
    }

    if (!exerciseChecked && exercisesIsInTheList) {
      setUserExercisesName(
        userExercisesName.filter((filterExercise) => {
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
            id="benchPress"
            name="Bench Press"
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
            name="Dead Lift"
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
