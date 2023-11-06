import { useEffect, useState } from 'react'
import HireForm from './components/HireForm'
import { useParams } from 'react-router-dom'

function PersonProfile({ people, setPeople }) {
  // people is just all people
  const {id} = useParams()

  // we deconstruct the data handed to us
  const [person, setPerson] = useState(null)

  const findPerson = () => {
    setPerson(people.find(entry => entry.login.username === id))
  }

  useEffect(findPerson, [])

  // while person is undefined (!undefined === true display loading)
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} setPeople={setPeople} people={people} />
    </article>
  )
}

export default PersonProfile
