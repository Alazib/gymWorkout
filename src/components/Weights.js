import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"
import Input from "./Input"

function Weights() {
  const [userWeights, setUserWeights] = useState({})
  const navigate = useNavigate()

  const userContext = useContext(UserContext)
  const { state, dispatch } = userContext
  const { exercises } = state
  const { weights } = state

  useEffect(() => {
    checkIfGlobalStateHasWeights()
  }, [])
  function checkIfGlobalStateHasWeights() {
    const globalStateHasWeights = Object.entries(weights).length === 0
    if (!globalStateHasWeights) {
      setUserWeights(weights)
    }
  }

  function goNext() {
    dispatch({
      type: "USER_WEIGHTS",
      payload: userWeights,
    })
    navigate("/summary")
  }

  function goBack() {
    navigate("/exercises")
  }

  function handleInputChange(e) {
    const exerciseName = e.target.name
    const weight = parseInt(e.target.value)
    console.log(exerciseName, weight)
    setUserWeights({ ...userWeights, [exerciseName]: weight })
  }

  console.log(userWeights)

  return (
    <>
      <div>
        <h1>Weights</h1>
        {exercises.map((exercise, position) => {
          console.log(exercise)
          return (
            <Input
              key={position}
              htmlFor={exercise}
              title={exercise + ": "}
              id={exercise}
              type={"number"}
              name={exercise}
              onChange={handleInputChange}
              placeHolder={weights[exercise]}
            ></Input>
          )
        })}
        <button onClick={goBack}>BACK</button>
        <button onClick={goNext}>NEXT</button>
      </div>
    </>
  )
}

export default Weights
