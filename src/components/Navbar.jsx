import React from 'react'
import { useState } from 'react'
import SideBar from './SideBar'
const Navbar = () => {
    return (
        <header className='sticky top-0 z-30 bg-slate-950/90 backdrop-blur-md border-b border-slate-700/50 shadow-lg'>
            <div className='flex items-center h-20 px-6 justify-between max-w-7xl mx-auto'>
                <div className='flex items-center space-x-4'>
                    <div className='w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>WQ</span>
                    </div>
                    <div>
                        <h1 className='text-xl md:text-2xl font-bold tracking-wide'>Water Quality Dashboard</h1>
                       
                    </div>
                </div>
          
                <div className='md:hidden'>
                    <button className='text-slate-300 hover:text-white p-2'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar