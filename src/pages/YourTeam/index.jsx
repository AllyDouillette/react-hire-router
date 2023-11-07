import PeopleList from "../Dashboard/components/PeopleList"

function Hired({ people }) {

  const employees = people.filter(person => !!person.wage === true)

  return (
    <main>
      <section>
        <h2>Your Team</h2>
        <PeopleList people={employees} />
      </section>
    </main>
  )
}

export default Hired
