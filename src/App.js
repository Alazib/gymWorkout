import UserData from "./components/UserData"
import UserExercises from "./components/UserExercises"

function App() {
  return (
    <div className="app">
      <div className="welcome-title">
        <h3>Welcome to Gym Workout, user. We would like to know you better:</h3>
      </div>
      <UserData />
      <UserExercises />
    </div>
  )
}

export default App
