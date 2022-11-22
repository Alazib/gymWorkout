import Input from "./Input"
import { useContext } from "react"
import { useNavigate } from "react-router"
import UserContext from "../context/User/UserContext"

function UserExercises() {
  // const [exercises, setExercises] = useState([]) Si lo pongo aquí, cuando doy a back
  // se me reinicia a {}. Por tanto lo paso a UserState.js

  const { dispatch, userExercises, setUserExercises } = useContext(UserContext)
  const navigate = useNavigate()

  function goBack() {
    navigate("/")
  }
  function goNext() {
    dispatchUserExercises()
    navigate("/summary")
  }

  function dispatchUserExercises() {
    dispatch({
      type: "USER_EXERCISES",
      payload: userExercises,
    })
  }

  function onChange(e) {
    const exerciseChecked = e.target.checked
    const exercisesTitle = e.target.title

    if (!userExercises.includes(exercisesTitle)) {
      exerciseChecked
        ? setUserExercises([...userExercises, exercisesTitle])
        : setUserExercises(
            userExercises.filter((exercise) => {
              return exercise !== exercisesTitle
            })
          )
    }
  }

  console.log(userExercises)
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
          value="bench press"
          onChange={onChange}
        ></Input>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default UserExercises
