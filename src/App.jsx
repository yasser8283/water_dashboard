import React from 'react'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Dashboard from '/src/pages/Dashboard.jsx'
import SideBar from './components/SideBar'
import LocMap from './components/LocMap'
const App = () => {
    const [location, setlocation] = useState("Belagavi")
  return (
    <div>
      <Navbar/>
    <div className='flex w-full'>
     <SideBar location = {location} setlocation = {setlocation} />
      <Dashboard location = {location} />
    </div>
    </div>
  )
}

export default App