import { Route, Routes } from "react-router"
import Summary from "./components/Summary"
import UserData from "./components/UserData"
import UserExercises from "./components/UserExercises"
import UserState from "./context/User/UserState"

function App() {
  return (
    <div className="app">
      <UserState>
        <Routes>
          <Route path="/" element={<UserData />}></Route>
          <Route path="exercises" element={<UserExercises />}></Route>
          <Route path="summary" element={<Summary />}></Route>
        </Routes>
      </UserState>
    </div>
  )
}

export default App
