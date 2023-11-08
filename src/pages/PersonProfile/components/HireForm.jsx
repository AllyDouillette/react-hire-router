import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HireForm({person, setPeople, people }) {

  const [wage, setWage] = useState(0)
  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    
    if (wage < 12) {
      alert("A livable wage is estimated to be around 12 GBP, Scrooge McDuck. I'm gonna fix that for you.")
    }
    
    const correctWage = wage < 12 ? (12 + Math.random()*5).toFixed(2) : Number(wage).toFixed(2)
    setWage(correctWage)

    setPeople(people.map(individual => {
      if (individual === person) {
        return {
          ...individual,
          "wage": correctWage
        }
      } else {
        return individual
      }
    }))
    navigate("/")
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
