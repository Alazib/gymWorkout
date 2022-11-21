import { useContext } from "react"
import Input from "./Input"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/User/UserContext"

function UserData() {
  const { dispatch } = useContext(UserContext)

  const navigate = useNavigate()

  function handleInputChange(e) {
    dispatch({
      type: "ADD_EMAIL",
      payload: e.target.value,
    })
  }

  function goNext() {
    navigate("/exercises")
  }

  return (
    <div className="user-data-form next-button">
      <div className="welcome-title">
        <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      </div>
      <form className="user-data-form">
        <div className="email input">
          <Input
            htmlFor="email"
            title="Email: "
            id="email"
            name="email"
            type="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="name input">
          <Input
            htmlFor="name"
            title="Name: "
            id="name"
            name="name"
            type="text"
            onChange={handleInputChange}
          />
        </div>
        <div className="height input">
          <Input
            htmlFor="height"
            title="Height (cm): "
            id="height"
            name="height"
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="weight input">
          <Input
            htmlFor="weight"
            title="Weight (kg): "
            id="weight"
            name="weight"
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="age input">
          <Input
            htmlFor="age"
            title="Age: "
            id="age"
            name="age"
            type="number"
            onChange={handleInputChange}
          />
        </div>
        <div className="gender input">
          <span>Gender:</span>
          <select
            title="gender"
            name="gender"
            onChange={handleInputChange}
            required
          >
            <option value=""></option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="I prefer not to answer">
              I prefer not to answer
            </option>
          </select>
        </div>
      </form>
      <button onClick={goNext}>Next</button>
    </div>
  )
}

export default UserData
