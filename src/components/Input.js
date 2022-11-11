function Input({ id, name, type, onChange }) {
  return (
    <input id={id} name={name} type={type} onChange={onChange} required></input>
  )
}

export default Input
