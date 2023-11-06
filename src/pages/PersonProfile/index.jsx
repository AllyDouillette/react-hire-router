import { useState } from 'react'
import HireForm from './components/HireForm'

function PersonProfile({props}) {
  // we deconstruct the data handed to us
  const [person, setPerson] = useState(null)

  // while person is undefined (!undefined === true display loading)
  if (!person) return <p>Loading...</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} />
    </article>
  )
}

export default PersonProfile
