import { useState } from 'react'

function HireForm({person, setEmployees, employees}) {
  const [wage, setWage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    setEmployees([...employees, {...person, "wage": wage}])
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit" onClick={(event) => handleSubmit(event)}>Hire</button>
    </form>
  )
}

export default HireForm
