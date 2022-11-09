import { useState } from "react"
import Label from "./components/Label"
import Input from "./components/Input"

function App() {
  const [userData, setUserData] = useState({ email: "" })

  function handleInputChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }
  function sendInputData(e) {
    e.preventDefault()
    console.log(userData, "antes de entrar en post")
    postNewUser()
  }

  async function postNewUser() {
    console.log("Dentro de función postNewUser")
    const URL = "http//workOut-server.net"
    const myInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }

    fetch(URL, myInit)
      .then((response) => {
        console.log("Dentro del then 1")
        return response.json
      })
      .catch((error) => error)
  }

  console.log(userData)

  return (
    <div className="app">
      <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      <form onSubmit={sendInputData}>
        <Label htmlFor={"email"} title="Email: " />
        <Input
          id={"email"}
          name={"email"}
          type={"email"}
          onChange={handleInputChange}
        />
        <Label htmlFor={"name"} title="Name: " />
        <Input
          id={"name"}
          name={"name"}
          type={"text"}
          onChange={handleInputChange}
        />
        <Label htmlFor={"height"} title="Height (cm): " />
        <Input
          id={"height"}
          name={"height"}
          type={"number"}
          onChange={handleInputChange}
        />
        <button type="submit">Send Email</button>
      </form>

      {/* <label>
        Email:
        <input name="email"></input>
      </label> */}
      {/* ¿Qué es más correcto, esta forma de hacer un label-input o la anterior? Los tests pasan en los dos */}
    </div>
  )
}

export default App
