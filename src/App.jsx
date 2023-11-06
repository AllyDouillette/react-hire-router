import { useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard'
import PersonProfile from './pages/PersonProfile/index.jsx';

import { Routes, Route, Link } from 'react-router-dom'

export default function App() {
  const [hiredPeople, setHiredPeople] = useState([])

  const hirePerson = (newHire) => {
    setHiredPeople([...hiredPeople, newHire])
  }

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
        <Dashboard />
      </header>
      <Routes>
        <>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/view/:id" element={<PersonProfile />} />
        </>
      </Routes>
    </>
  )
}
