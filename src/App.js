import { useState } from "react"
import Input from "./components/Input"
import saveUser from "./services/saveUser"

function App() {
  const [userData, setUserData] = useState({})

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  function sendInputData(e) {
    e.preventDefault()
    console.log(userData, "antes de entrar en post")
    postNewUser()
  }

  async function postNewUser() {
    saveUser(userData)
  }

  return (
    <div className="app">
      <div className="welcome-title">
        <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      </div>
      <form className="new-user-form" onSubmit={sendInputData}>
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
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default App
