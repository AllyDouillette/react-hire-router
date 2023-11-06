import { Link, useNavigate } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useParams } from "react-router-dom"

function PeopleListItem(props) {
  const { person } = props
  const navigate = useNavigate()
  return (
    <li>
      <h3>
        {person.name.first} {person.name.last}
      </h3>
      {person.wage && <p>Wage: £{person.wage}</p>}
      <button onClick={() => navigate(`/view/${person.login.username}`)}>{person.wage === undefined ? "View Details" : "Edit Details"}</button>
    </li>
  )
}

export default PeopleListItem
