import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useParams } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  console.log(person)
  const navigate = useNavigate()
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <button onClick={() => navigate(`/view/${person.login.username}`)}>View Details</button>
    </li>
  )
}

export default PeopleListItem
