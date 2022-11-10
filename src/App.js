import { useState } from "react"
import Label from "./components/Label"
import Input from "./components/Input"
import postServer from "./services/postServer"

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
    postServer(userData)
  }

  return (
    <div className="app">
      <div className="welcome-title">
        <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      </div>
      <form className="new-user-form" onSubmit={sendInputData}>
        <div className="email input">
          <Label htmlFor={"email"} title="Email: " />
          <Input
            id={"email"}
            name={"email"}
            type={"email"}
            onChange={handleInputChange}
          />
        </div>
        <div className="name input">
          <Label htmlFor={"name"} title="Name: " />
          <Input
            id={"name"}
            name={"name"}
            type={"text"}
            onChange={handleInputChange}
          />
        </div>
        <div className="height input">
          <Label htmlFor={"height"} title="Height (cm): " />
          <Input
            id={"height"}
            name={"height"}
            type={"number"}
            onChange={handleInputChange}
          />
        </div>
        <div className="weight input">
          <Label htmlFor={"weight"} title="Weight (kg): " />
          <Input
            id={"weight"}
            name={"weight"}
            type={"number"}
            onChange={handleInputChange}
          />
        </div>
        <div className="age input">
          <Label htmlFor={"age"} title="Age: " />
          <Input
            id={"age"}
            name={"age"}
            type={"number"}
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
        <button type="submit">Send Email</button>
      </form>
    </div>
  )
}

export default App
