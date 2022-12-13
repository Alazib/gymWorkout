import Input from "./Input"
import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function Exercises() {
  const [userExercisesId, setUserExercisesId] = useState([])
  const [userExercisesName, setUserExercisesName] = useState([])
  const [userWeights, setUserWeights] = useState({})

  const userContext = useContext(UserContext)
  const { dispatch, state } = userContext
  const { exercisesId, exercisesName, weights } = state

  const navigate = useNavigate()

  const atLeastOneExerciseExists = userExercisesId.length > 0

  useEffect(() => {
    setUserExercisesId(exercisesId)
    setUserExercisesName(exercisesName)
    setUserWeights(weights)
  }, [])

  function handleInputChange(e) {
    const exerciseChecked = e.target.checked
    const exerciseId = e.target.id
    const exerciseName = e.target.name

    userExercisesIdSetter(exerciseChecked, exerciseId)
    userExercisesNameSetter(exerciseChecked, exerciseName)
    userWeightsSetter(exerciseChecked, exerciseId)
  }

  function userExercisesIdSetter(exerciseChecked, exerciseId) {
    if (exerciseChecked) {
      setUserExercisesId([...userExercisesId, exerciseId])
    }

    if (!exerciseChecked) {
      setUserExercisesId(
        userExercisesId.filter((filterExercise) => {
          return filterExercise !== exerciseId
        })
      )
    }
  }

  function userExercisesNameSetter(exerciseChecked, exerciseName) {
    if (exerciseChecked) {
      setUserExercisesName([...userExercisesName, exerciseName])
    }

    if (!exerciseChecked) {
      setUserExercisesName(
        userExercisesName.filter((filterExercise) => {
          return filterExercise !== exerciseName
        })
      )
    }
  }

  function userWeightsSetter(exerciseChecked, exerciseId) {
    if (!exerciseChecked) {
      let userWeightsCopy = { ...userWeights }
      delete userWeightsCopy[exerciseId]
      setUserWeights(userWeightsCopy)
    }
  }

  function goBack() {
    navigate("/")
  }

  function goNext(e) {
    e.preventDefault()
    dispatchUserState()
    navigate("/weights")
  }

  function dispatchUserState() {
    dispatch({
      type: "USER_EXERCISES_ID",
      payload: userExercisesId,
    })

    dispatch({
      type: "USER_EXERCISES_NAME",
      payload: userExercisesName,
    })

    dispatch({
      type: "USER_WEIGHTS",
      payload: userWeights,
    })
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
            atLeastOneExerciseExists={atLeastOneExerciseExists}
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
            atLeastOneExerciseExists={atLeastOneExerciseExists}
          ></Input>
        </div>
        <div className="squat">
          <Input
            htmlFor="Squat"
            title="Squat"
            id="squat"
            name="Squat"
            type="checkbox"
            value="Squat"
            checked={userExercisesId.includes("squat")}
            onChange={handleInputChange}
            atLeastOneExerciseExists={atLeastOneExerciseExists}
          ></Input>
        </div>
        <div className="pull-ups">
          <Input
            htmlFor="Pull Ups"
            title="Pull Ups"
            id="pullUps"
            name="Pull Ups"
            type="checkbox"
            value="Pull Ups"
            checked={userExercisesId.includes("pullUps")}
            onChange={handleInputChange}
            atLeastOneExerciseExists={atLeastOneExerciseExists}
          ></Input>
        </div>
        <div className="military-press">
          <Input
            htmlFor="Military Press"
            title="Military Press"
            id="militaryPress"
            name="Military Press"
            type="checkbox"
            value="Military Press"
            checked={userExercisesId.includes("militaryPress")}
            onChange={handleInputChange}
            atLeastOneExerciseExists={atLeastOneExerciseExists}
          ></Input>
        </div>
        <button>Next</button>
      </form>
      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default Exercises
