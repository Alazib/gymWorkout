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

describe("Sign up form:", () => {
  test("Should render a welcome message", () => {
    renderApp()
    const welcomeMessage = screen.getByRole("heading", {
      name: /welcome to Gym Workout, user/i,
    })
    expect(welcomeMessage).toBeInTheDocument()
  })

  test("should render six inputs: email, name, height, weight, age and gender", () => {
    renderApp()
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const nameInput = screen.getByRole("textbox", { name: /name/i })
    const heightInput = screen.getByRole("spinbutton", { name: /height/i })
    const weightInput = screen.getByRole("spinbutton", { name: /weight/i })
    const ageInput = screen.getByRole("spinbutton", { name: /age/i })
    const genderInput = screen.getByRole("combobox", { name: /gender/i })
    const genderInputMaleOption = screen.getByRole("option", { name: "Male" })
    const genderInputFemaleOption = screen.getByRole("option", {
      name: /female/i,
    })
    const genderInputNotAnswerOption = screen.getByRole("option", {
      name: /i prefer not to answer/i,
    })

    expect(emailInput).toBeInTheDocument()
    expect(nameInput).toBeInTheDocument()
    expect(heightInput).toBeInTheDocument()
    expect(weightInput).toBeInTheDocument()
    expect(ageInput).toBeInTheDocument()
    expect(genderInput).toBeInTheDocument()
    expect(genderInputMaleOption).toBeInTheDocument()
    expect(genderInputFemaleOption).toBeInTheDocument()
    expect(genderInputNotAnswerOption).toBeInTheDocument()
  })

  test("should render a next button", () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    expect(nextButton).toBeInTheDocument()
  })

  test("click on next button should render the exercises form", async () => {
    renderApp()
    const nextButton = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButton)

    const headerMessage = await screen.findByRole("heading", {
      name: /which of these exercises/i,
    })
    expect(headerMessage).toBeInTheDocument()
  })
})
