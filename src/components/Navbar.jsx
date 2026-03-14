import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar'
const Navbar = () => {

  
  

    return (
        <div>
            <div className=' flex h-20 px-5 py-5 lg:w-full justify-between bg-slate-900 text-slate-200'>
                <h1 className='uppercase'>Water Quality analytics</h1>
                {/* <select className='bg-slate-900' value={location} onChange={(e) => {
                    setlocation(e.target.value)
                }}>
                   
                    <option value={"Karwar"}>Karwar</option>
                    <option value={"Hubli"}>Hubli</option>
                    <option value={"Mangaluru"}>Mangaluru</option>
                    <option value={"Belagavi"}>Belagavi</option>
                    <option value={"Mysuru"}>Mysuru</option>
                </select> */}
            </div>
        </div>
    )
}

export default Navbar