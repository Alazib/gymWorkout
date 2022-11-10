import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import App from "../App"

function renderApp() {
  return render(<App />)
}

describe("app renders:", () => {
  test("a welcome message", () => {
    renderApp()
    screen.getByRole("heading", { name: /welcome to Gym Workout, user/i })
  })

  test("six inputs: email, name, height, weight, age and gender", () => {
    renderApp()
    screen.getByRole("textbox", { name: /email/i })
    screen.getByRole("textbox", { name: /name/i })
    screen.getByRole("spinbutton", { name: /height/i })
    screen.getByRole("spinbutton", { name: /weight/i })
    screen.getByRole("spinbutton", { name: /age/i })
    screen.getByRole("combobox", { name: /gender/i })
    screen.getByRole("option", { name: "" })
    screen.getByRole("option", { name: "Male" })
    screen.getByRole("option", { name: /female/i })
    screen.getByRole("option", { name: /i prefer not to answer/i })
  })

  test("a send email button", () => {
    renderApp()
    screen.getByRole("button", { name: /send email/i })
  })
})

describe("when user clicks in send email button", () => {
  beforeAll(() => {
    global.fetch = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ json: () => {} }))
  })

  test("user data are posted", () => {
    renderApp()

    const emailInput = screen.getByRole("textbox", { name: /email/i })
    const nameInput = screen.getByRole("textbox", { name: /name/i })
    const heightInput = screen.getByRole("spinbutton", { name: /height/i })
    const weightInput = screen.getByRole("spinbutton", { name: /weight/i })
    const sendButton = screen.getByRole("button", { name: /send email/i })
    const ageButton = screen.getByRole("spinbutton", { name: /age/i })
    const combobox = screen.getByRole("combobox", { name: /gender/i })
    const femaleOption = screen.getByRole("option", { name: /female/i })
    userEvent.type(emailInput, "new-user@gmail.com")
    userEvent.type(nameInput, "New User")
    userEvent.type(heightInput, "190")
    userEvent.type(weightInput, "80")
    userEvent.type(ageButton, "40")
    userEvent.selectOptions(combobox, femaleOption)
    userEvent.click(sendButton)

    expect(fetch).toHaveBeenCalledWith("http//workOut-server.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: "new-user@gmail.com",
        name: "New User",
        height: "190",
        weight: "80",
        age: "40",
        gender: "female",
      }),
    })
  })
})
