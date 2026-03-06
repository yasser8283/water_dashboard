import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Dashboard from '/src/pages/Dashboard.jsx'
const App = () => {
    const [location, setlocation] = useState("Belagavi")
  return (
    <div>
      <Navbar location = {location} setlocation = {setlocation} />
      <Dashboard location = {location} />

    </div>
  )
}

export default App