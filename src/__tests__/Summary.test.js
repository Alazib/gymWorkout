import { render, screen } from "@testing-library/react"
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

    const nextButtonFromWeights = screen.getByRole("button", {
      name: /next/i,
    })
    userEvent.click(nextButtonFromWeights)

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
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementationOnce(() => Promise.resolve())
  })
  test("data should be posted", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const nameInput = screen.getByRole("textbox", { name: /name/i })
    const heightInput = screen.getByRole("spinbutton", { name: /height/i })
    const weightInput = screen.getByRole("spinbutton", { name: /weight/i })
    const ageInput = screen.getByRole("spinbutton", { name: /age/i })
    const genderInput = screen.getByRole("combobox", { name: /gender/i })
    const nextButtonFromUserData = screen.getByRole("button", { name: /next/i })

    userEvent.type(emailInput, "ulysses@gmail.com")
    userEvent.type(nameInput, "Ulysses")
    userEvent.type(heightInput, "190")
    userEvent.type(weightInput, "85")
    userEvent.type(ageInput, "35")
    userEvent.selectOptions(genderInput, "Male")
    userEvent.click(nextButtonFromUserData)

    const benchPressInput = screen.getByRole("checkbox", {
      name: /bench press/i,
    })
    const deadLiftInput = screen.getByRole("checkbox", {
      name: /dead lift/i,
    })
    const nextButtonFromExercises = screen.getByRole("button", {
      name: /next/i,
    })
    userEvent.click(benchPressInput)
    userEvent.click(deadLiftInput)
    userEvent.click(nextButtonFromExercises)

    const nextButtonFromWeights = screen.getByRole("button", { name: /next/i })
    userEvent.click(nextButtonFromWeights)

    const submitButtton = screen.getByRole("button", { name: /submit/i })
    userEvent.click(submitButtton)

    expect(fetch).toHaveBeenCalledWith("http//workOut-server.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          email: "ulysses@gmail.com",
          name: "Ulysses",
          height: "190",
          weight: "85",
          age: "35",
          gender: "Male",
        },
        exercises: ["Bench press", "Dead Lift"],
        weight: {},
      }),
    })
  })
})
