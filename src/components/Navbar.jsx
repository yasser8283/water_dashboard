import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar'
const Navbar = () => {
    return (
        <header className='sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-700'>
            <div className='flex items-center h-20 px-5 justify-between text-slate-100'>
                <div>
                    <h1 className='text-xl md:text-2xl font-bold tracking-wide uppercase'>Water Quality Dashboard</h1>
                    
                </div>
                <nav aria-label='primary navigation'>
                    <ul className='flex gap-3'>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar