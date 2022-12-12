import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"
import Input from "./Input"

function Weights() {
  const [userWeights, setUserWeights] = useState({})

  const userContext = useContext(UserContext)
  const { state, dispatch } = userContext
  const { exercisesName, exercisesId } = state
  const { weights } = state

  const navigate = useNavigate()

  useEffect(() => {
    setUserWeights(weights)
  }, [])

  function handleInputChange(e) {
    const exerciseId = e.target.id

    const weight = parseInt(e.target.value)

    setUserWeights({ ...userWeights, [exerciseId]: weight })
  }

  function goNext() {
    navigate("/summary")
    dispatchWeights()
  }

  function goBack() {
    navigate("/exercises")
  }

  function dispatchWeights() {
    dispatch({
      type: "USER_WEIGHTS",
      payload: userWeights,
    })
  }

  return (
    <>
      <div>
        <h1>Weights</h1>

        {exercisesName.map((exercise, position) => {
          return (
            <Input
              key={position}
              htmlFor={exercise}
              title={exercise + ": "}
              id={exercisesId[position]}
              type="number"
              name={exercise}
              onChange={handleInputChange}
              placeHolder={weights[exercisesId[position]]}
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
