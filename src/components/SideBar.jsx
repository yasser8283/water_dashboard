import React from 'react'
import { useState } from 'react'
import { ArrowLeftFromLine,ArrowRightFromLine } from "lucide-react";
const SideBar = ({ setlocation, location }) => {
    const [expanded, setexpanded] = useState(false);
    const handleSideBar = () => setexpanded(prev => !prev);

    const locations = ["Karwar", "Hubli", "Dandeli", "Belagavi", "Sirsi"];

    return (
        <aside className={`bg-slate-900 text-slate-100 shadow-xl transition-all duration-300 ${expanded ? 'w-64 border-r border-slate-700' : 'w-14'} h-screen overflow-hidden`} aria-label='Location selector'>
            <div className='flex items-center justify-between px-2 py-2 border-b border-slate-700'>
                <h2 className={`${expanded ? 'block' : 'hidden'} text-sm uppercase tracking-widest`}>Locations</h2>
                <button className='p-1 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded' onClick={handleSideBar} aria-label={expanded ? 'Collapse location menu' : 'Expand location menu'}>
                    {!expanded ? <ArrowRightFromLine /> : <ArrowLeftFromLine />}
                </button>
            </div>

            <nav className={`${expanded ? 'flex flex-col items-start px-2 py-3 gap-2' : 'hidden'}`}>
                {locations.map((place) => (
                    <button
                        key={place}
                        onClick={() => {
                            setlocation(place);
                            setexpanded(false);
                        }}
                        className='w-full text-left px-3 py-2 rounded-lg bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition'
                    >
                        {place}
                    </button>
                ))}
            </nav>

            {/* {!expanded && (
                <div className='flex flex-col items-center mt-4 gap-2'>
                    {locations.map((place) => (
                        <button key={place} onClick={() => setlocation(place)} className='text-slate-400 hover:text-white text-xs'>{place.slice(0,2)}</button>
                    ))}
                </div>
            )} */}
        </aside>
    );
}

export default SideBar