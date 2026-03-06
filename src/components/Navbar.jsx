import React from 'react'
import { useState } from 'react'
const Navbar = ({ setlocation, location }) => {

  
  

    return (

        <div>
            <div className=' flex h-25 px-5 py-5 w-full justify-between'>
                <h1 className='uppercase'>Water Quality analytics</h1>
                <select value={location} onChange={(e) => {
                    setlocation(e.target.value)
                }}>
                   
                    <option value={"Karwar"}>Karwar</option>
                    <option value={"Hubli"}>Hubli</option>
                    <option value={"Mangaluru"}>Mangaluru</option>
                    <option value={"Belagavi"}>Belagavi</option>
                    <option value={"Mysuru"}>Mysuru</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar