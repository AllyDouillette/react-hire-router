import { useEffect, useState } from 'react'
import PeopleList from './components/PeopleList'

function Dashboard({ people, employees }) {

  return (
    <main className="dashboard-layout">
      <section>
        <h2>People</h2>
        <PeopleList people={people} />
      </section>
      <section>
        <h2>Hired People</h2>
        <PeopleList people={employees} />
      </section>
    </main>
  )
}

export default Dashboard
