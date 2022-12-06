import { Route, Routes } from "react-router"
import Summary from "./components/Summary"
import UserData from "./components/UserData"
import Exercises from "./components/Exercises"
import UserState from "./context/User/UserState"
import Weights from "./components/Weights"

function App() {
  return (
    <div className="app">
      <UserState>
        <Routes>
          <Route path="/" element={<UserData />}></Route>
          <Route path="exercises" element={<Exercises />}></Route>
          <Route path="summary" element={<Summary />}></Route>
          <Route path="weights" element={<Weights />}></Route>
        </Routes>
      </UserState>
    </div>
  )
}

export default App
