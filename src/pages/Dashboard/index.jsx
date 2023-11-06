import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard(props) {
  const { hiredPeople } = props

  const [people, setPeople] = useState([])

  const getPeople = () => {
    const baseURL = "https://randomuser.me/api"
    const endpoint = "/?results=50"

    fetch(baseURL+endpoint)
      .then(response => response.json())
      .then((data) => setPeople(data.results))
  }

  useEffect(getPeople, [])

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        {/* <PeopleList people={hiredPeople} /> */}
      </section>
    </main>
  )
}

export default Dashboard
