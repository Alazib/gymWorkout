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
  test("should render a list with 6 item list: name, email, height, weight, age and gender", () => {
    renderApp()
    const userDataList = screen.getByRole("list", { name: /user-data list/i })
    const allUserData = screen.getAllByRole("listitem", { name: /user-data/i })
    const dataNames = allUserData.map((dataName) => dataName.textContent)

    expect(userDataList).toBeInTheDocument()
    expect(allUserData.length).toBe(6)
    expect(dataNames).toEqual([
      "Name:",
      "Email:",
      "Height (cm):",
      "Weight (kilos):",
      "Age:",
      "Gender:",
    ])
  })
})

describe("'Exercises' section:", () => {
  test("should render a list with 1 item list:", () => {
    renderApp()
    const exercisesList = screen.getByRole("list", {
      name: /user-exercises list/i,
    })
    const allExercises = screen.getAllByRole("listitem", {
      name: /user-exercises/i,
    })
    const exerciseNames = allExercises.map(
      (exerciseName) => exerciseName.textContent
    )

    expect(exercisesList).toBeInTheDocument()
    expect(allExercises.length).toBe(1)
    expect(exerciseNames).toEqual([""])
  })
})
