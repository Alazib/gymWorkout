import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { BrowserRouter } from "react-router-dom"
import App from "../App"

function renderApp() {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe("Weights", () => {
  test("should display 'Weights' title", () => {
    renderApp()

    const nextUserDataButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextUserDataButton)

    const nextExercisesButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextExercisesButton)

    const weightsTitle = screen.getByRole("heading", { name: /weights/i })
    expect(weightsTitle).toBeInTheDocument()
  })
})
