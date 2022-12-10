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

  useEffect(() => {
    setUserExercisesId(exercisesId)
    setUserExercisesName(exercisesName)
    setUserWeights(weights)
  }, [])

  function handleInputChange(e) {
    const exerciseChecked = e.target.checked
    const exerciseId = e.target.id
    const exerciseName = e.target.name

    userExercisesIdSetter(e, exerciseChecked, exerciseId)
    userExercisesNameSetter(e, exerciseChecked, exerciseName)
    userWeightsSetter(e, exerciseChecked, exerciseId)
  }

  function userExercisesIdSetter(e, exerciseChecked, exerciseId) {
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

  function userExercisesNameSetter(e, exerciseChecked, exerciseName) {
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

  function userWeightsSetter(e, exerciseChecked, exercise) {
    if (!exerciseChecked) {
      let userWeightsCopy = { ...userWeights }
      delete userWeightsCopy[exercise]
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
