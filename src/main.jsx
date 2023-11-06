import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import App from './App.jsx'

import PersonProfile from './pages/PersonProfile/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Routes>
        <>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/view/:id" element={<PersonProfile />} />
        </>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
