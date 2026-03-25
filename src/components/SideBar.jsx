import React from 'react'
import { useState } from 'react'
import { ArrowLeftFromLine,ArrowRightFromLine } from "lucide-react";
const SideBar = ({ setlocation, location }) => {
    const [expanded, setexpanded] = useState(false);
    const handleSideBar = () => setexpanded(prev => !prev);

    const locations = ["Karwar", "Hubli", "Dandeli", "Belagavi", "Sirsi"];

    return (
        <aside className={`bg-gradient-to-b from-slate-900 to-slate-950 text-slate-100 shadow-2xl transition-all duration-300 ${expanded ? 'w-64 border-r border-slate-700/50' : 'w-14'} h-screen overflow-hidden`} aria-label='Location selector'>
            <div className='flex items-center justify-between px-3 py-3 border-b border-slate-700/50'>
                <h2 className={`${expanded ? 'block' : 'hidden'} text-sm uppercase tracking-widest font-semibold`}>Locations</h2>
                <button className='p-2 text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg transition-colors' onClick={handleSideBar} aria-label={expanded ? 'Collapse location menu' : 'Expand location menu'}>
                    {!expanded ? <ArrowRightFromLine size={20} /> : <ArrowLeftFromLine size={20} />}
                </button>
            </div>

            <nav className={`${expanded ? 'flex flex-col items-start px-3 py-4 gap-2' : 'hidden'}`}>
                {locations.map((place) => (
                    <button
                        key={place}
                        onClick={() => {
                            setlocation(place);
                            setexpanded(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${location === place ? 'bg-cyan-500 text-slate-950 shadow-lg' : 'bg-slate-800/50 hover:bg-slate-700 hover:shadow-md'}`}
                    >
                        {place}
                    </button>
                ))}
            </nav>

            {!expanded && (
                <div className='flex flex-col items-center mt-6 gap-3'>
                    {locations.map((place) => (
                        <button
                            key={place}
                            onClick={() => setlocation(place)}
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-all ${location === place ? 'bg-cyan-500 text-slate-950' : 'bg-slate-700 text-slate-400 hover:bg-slate-600 hover:text-white'}`}
                            title={place}
                        >
                            {place.slice(0,2)}
                        </button>
                    ))}
                </div>
            )}
        </aside>
    );
}

export default SideBar