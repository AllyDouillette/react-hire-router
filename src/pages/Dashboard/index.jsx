import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({ people }) {

  const potentialHires = people.filter(person => !!person.wage === false )
  const employees = people.filter(person => !!person.wage === true)

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={potentialHires} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={employees} />
      </section>
    </main>
  )
}

export default Dashboard
