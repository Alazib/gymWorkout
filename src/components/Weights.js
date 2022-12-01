import { useNavigate } from "react-router"

function Weights() {
  const navigate = useNavigate()

  function goNext() {
    navigate("/summary")
  }

  function goBack() {
    navigate("/exercises")
  }

  return (
    <>
      <div>
        <h1>Weights</h1>
        <button onClick={goBack}>BACK</button>
        <button onClick={goNext}>NEXT</button>
      </div>
    </>
  )
}

export default Weights
