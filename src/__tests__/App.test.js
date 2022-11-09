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

  test("an input for the email", () => {
    renderApp()
    screen.getByRole("textbox", { name: /email/i })
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
    const sendButton = screen.getByRole("button", { name: /send email/i })

    userEvent.type(emailInput, "new-user@gmail.com")
    userEvent.click(sendButton)

    expect(fetch).toHaveBeenCalledWith("http//workOut-server.net", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "new-user@gmail.com" }),
    })
  })
})
