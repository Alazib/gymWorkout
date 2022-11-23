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

  console.log(userExercises)
  return (
    <div className="user-exercises-form back-button">
      <div className="exercises-header">
        <h3>Which of these exercises do you usually practise?: </h3>
      </div>
      <form className="user-exercises-form">
        <div className="bench-press">
          <Input
            htmlFor="bench press"
            title="Bench Press"
            id="bench press"
            name="bench_press"
            type="checkbox"
            value="Bench Press"
            onChange={onChange}
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
            onChange={onChange}
          ></Input>
        </div>
      </form>
      <button onClick={goBack}>Back</button>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default UserExercises
