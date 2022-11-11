function Input({ htmlFor, title, id, name, type, onChange }) {
  return (
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
  )
}

export default Input
