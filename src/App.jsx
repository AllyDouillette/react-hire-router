import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile/index.jsx';
import Hired from './pages/YourTeam/index.jsx';

import { Routes, Route, Link } from 'react-router-dom'

export default function App() {

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
    <>
      <header>
        <h1>Hire Your Team</h1>
        <nav>
          <ul>
            <li><Link to="/">Dashboard</Link></li>
            <li><Link to="/hired">Your team</Link></li>
          </ul>
        </nav>
      </header>
      <Routes>
        <>
        <Route path="/" element={<Dashboard people={people} />}/>
        <Route path="/hired" element={<Hired people={people} />}/>
        <Route path="/view/:id" element={<PersonProfile people={people} setPeople={setPeople}/>} />
        </>
      </Routes>
    </>
  )
}
