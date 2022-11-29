import { getByText, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { MemoryRouter, BrowserRouter } from "react-router-dom"
import App from "../App"

function renderApp() {
  return render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}

describe("Summary", () => {
  test("should render the title 'Summary'", async () => {
    renderApp()
    const nextButtonFromUserData = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButtonFromUserData)

    const nextButtonFromExercises = screen.getByRole("button", {
      name: /next/i,
    })
    userEvent.click(nextButtonFromExercises)

    const summaryTitle = await screen.findByRole("heading", {
      name: /summary/i,
    })
    expect(summaryTitle).toBeInTheDocument()
  })
  test("should render two sections: 'User Data' and 'Exercises'", () => {
    renderApp()

    const userDataSection = screen.getByRole("heading", { name: /user data/i })
    const exercisesSection = screen.getByRole("heading", { name: /exercises/i })
    expect(userDataSection).toBeInTheDocument()
    expect(exercisesSection).toBeInTheDocument()
  })
  test("should render two buttons: back and submit", () => {
    renderApp()

    const backButton = screen.getByRole("button", { name: /back/i })
    const submitButtton = screen.getByRole("button", { name: /submit/i })
    expect(backButton).toBeInTheDocument()
    expect(submitButtton).toBeInTheDocument()
  })
})

describe("'User Data' section:", () => {
  test("should render the user data with 6 items: name, email, height, weight, age and gender", () => {
    renderApp()
    const name = screen.getByText(/name/i)
    const email = screen.getByText(/email/i)
    const height = screen.getByText(/height/i)
    const weight = screen.getByText(/weight/i)
    const age = screen.getByText(/age/i)
    const gender = screen.getByText(/gender/i)

    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(height).toBeInTheDocument()
    expect(weight).toBeInTheDocument()
    expect(age).toBeInTheDocument()
    expect(gender).toBeInTheDocument()
  })
})

describe("'Exercises' section:", () => {
  test("should render a exercises list", () => {
    renderApp()

    const exercisesList = screen.getByRole("list", {
      name: /user-exercises list/i,
    })
    expect(exercisesList).toBeInTheDocument()
  })
})

describe("When user submits", () => {
  test("data are posted", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
  })
})
