function Input({ htmlFor, title, id, name, type, onChange }) {
  const INPUT_IS_TEXT = type === "text"
  const INPUT_IS_NUMBER = type === "number"
  const INPUT_IS_EMAIL = type === "email"
  const INPUT_IS_CHECKBOX = type === "checkbox"

  return (
    <>
      {
        (type = (INPUT_IS_TEXT || INPUT_IS_NUMBER || INPUT_IS_EMAIL) && (
          <>
            <label htmlFor={htmlFor}>{title}</label>
            <input
              id={id}
              name={name}
              type={type}
              onChange={onChange}
              required
            ></input>
          </>
        ))
      }
      {
        (type = INPUT_IS_CHECKBOX && (
          <>
            <label htmlFor={htmlFor}>{title}</label>
            <input
              id={id}
              name={name}
              type={type}
              onChange={onChange}
              required
            ></input>
          </>
        ))
      }
    </>
  )
}

export default Input
