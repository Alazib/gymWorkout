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

describe("Exercises form", () => {
  test("should render a checkbox with five input: bench press, dead lift, squat, pull ups and military press", () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButton)

    const benchPressInput = screen.getByRole("checkbox", {
      name: /bench press/i,
    })
    const deadLiftInput = screen.getByRole("checkbox", {
      name: /dead lift/i,
    })
    const squatInput = screen.getByRole("checkbox", {
      name: /squat/i,
    })
    const pullUpsInput = screen.getByRole("checkbox", {
      name: /pull ups/i,
    })
    const militaryPressInput = screen.getByRole("checkbox", {
      name: /military press/i,
    })

    expect(benchPressInput).toBeInTheDocument()
    expect(deadLiftInput).toBeInTheDocument()
    expect(squatInput).toBeInTheDocument()
    expect(pullUpsInput).toBeInTheDocument()
    expect(militaryPressInput).toBeInTheDocument()
  })

  test("should render two buttons: back and next", () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    const backButton = screen.getByRole("button", { name: /back/i })

    expect(backButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test("click on next button should render the weights page", () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButton)

    const weightsTitle = screen.getByRole("heading", {
      name: /weights/i,
    })
    expect(weightsTitle).toBeInTheDocument()
  })
})
