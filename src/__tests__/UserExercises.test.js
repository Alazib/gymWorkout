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
  test("should render a checkbox with one input: bench press", async () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButton)

    const benchPressInput = await screen.findByRole("checkbox", {
      name: /bench press/i,
    })
    expect(benchPressInput).toBeInTheDocument()
  })

  test("should render two buttons: back and send data", () => {
    renderApp()
    const sendDataButton = screen.getByRole("button", { name: /send data/i })
    const backButton = screen.getByRole("button", { name: /back/i })
    expect(sendDataButton).toBeInTheDocument()
    expect(backButton).toBeInTheDocument()
  })
})
