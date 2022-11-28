import { useContext, useEffect, useState } from "react"
import Input from "./Input"
import { useNavigate } from "react-router-dom"
import UserContext from "../context/User/UserContext"

function UserData() {
  const [userData, setUserData] = useState({})

  const userContext = useContext(UserContext)
  const { dispatch, state } = userContext
  const { data } = state
  const { email, name, weight, height, age, gender } = data

  const navigate = useNavigate()

  useEffect(() => {
    checkIfGlobalStateHasUserData()
  }, [])

  function checkIfGlobalStateHasUserData() {
    const globalStateHasUserData = name
    if (globalStateHasUserData) {
      setUserData(data)
    }
  }

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  function goNext() {
    dispatchUserData()

    navigate("/exercises")
  }

  function dispatchUserData() {
    dispatch({
      type: "USER_DATA",
      payload: userData,
    })
  }

  console.log(userData, name)

  return (
    <div className="user-data-form next-button">
      <div className="welcome-title">
        <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      </div>
      <form className="user-data-form" onSubmit={goNext}>
        <div className="email input">
          <Input
            htmlFor="email"
            title="Email: "
            id="email"
            name="email"
            type="email"
            placeHolder={email}
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
            placeHolder={name}
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
            placeHolder={height}
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
            placeHolder={weight}
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
            placeHolder={age}
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
            {data.gender && <option value={gender}>{gender}</option>}
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="I prefer not to answer">
              I prefer not to answer
            </option>
          </select>
        </div>
        <button type="onSubmit">Next</button>
      </form>
    </div>
  )
}

export default UserData
