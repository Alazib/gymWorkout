function Input({ htmlFor, title, id, name, type, onChange, value }) {
  const INPUT_IS_TEXT = type === "text"
  const INPUT_IS_NUMBER = type === "number"
  const INPUT_IS_EMAIL = type === "email"
  const INPUT_IS_CHECKBOX = type === "checkbox"

  return (
    <>
      {(INPUT_IS_TEXT || INPUT_IS_NUMBER || INPUT_IS_EMAIL) && (
        <>
          <label htmlFor={htmlFor}>{title}</label>
          <input
            id={id}
            name={name}
            type={type}
            title={title}
            onChange={onChange}
            required
          ></input>
        </>
      )}
      {INPUT_IS_CHECKBOX && (
        <>
          <input
            id={id}
            name={name}
            type={type}
            onChange={onChange}
            title={title}
            value={value}
          ></input>
          <label htmlFor={htmlFor}>{title}</label>
        </>
      )}
    </>
  )
}

export default Input
