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

  test("should render two buttons: back and next", () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    const backButton = screen.getByRole("button", { name: /back/i })

    expect(backButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test("click on next button should render the summary", async () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButton)

    const summaryTitle = await screen.findByRole("heading", {
      name: /summary/i,
    })
    expect(summaryTitle).toBeInTheDocument()
  })
})
