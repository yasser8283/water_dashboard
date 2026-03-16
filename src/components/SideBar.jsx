import React from 'react'
import { useState } from 'react'
import { ArrowLeftFromLine,ArrowRightFromLine } from "lucide-react";
const SideBar = ({ setlocation,location }) => {
    const [expanded, setexpanded] = useState(false)
    const handleSideBar = () => {
        if (expanded) {
            setexpanded(false)
        }
        else {
            setexpanded(true)
        }
    }
    return (
        <aside className={`bg-slate-900 text-slate-100 shadow-xl transition-all ${expanded ? 'w-64 border-r border-slate-100' : 'w-12'}`} >
            <div className='flex justify-between px-2 py-2'>
                <h2 className={`${expanded ? 'block' : 'hidden'} `}>Locations</h2>
                <button className='px-2' onClick={() => handleSideBar()}>
                    {!expanded && (
                        <ArrowRightFromLine />
                    )}
                    {expanded && (
                        <ArrowLeftFromLine />
                    )}
                </button>
            </div>
            <div className={`${expanded ? 'flex flex-col items-start px-2 py-2 gap-3' : 'hidden'}`}>
                <button className='w-full h-10 hover:bg-slate-300 hover:text-black rounded-2xl'onClick={(e)=>{
                        setlocation("Karwar")
                        setexpanded(false)

                }}>Karwar</button>
                <button className='w-full h-10 hover:bg-slate-300 hover:text-black rounded-2xl'onClick={()=>{
                    setlocation("Hubli")
                    setexpanded(false)
                }}>Hubli</button>
                <button className='w-full h-10 hover:bg-slate-300 hover:text-black rounded-2xl' onClick={()=>{
                    setlocation("Dandeli")
                    setexpanded(false)
                }}>Dandeli</button>
                <button className='w-full h-10 hover:bg-slate-300 hover:text-black rounded-2xl'onClick={()=>{
                    setlocation("Belagavi")
                    setexpanded(false)
                }}>Belagavi</button>
                <button className='w-full h-10 hover:bg-slate-300 hover:text-black rounded-2xl'onClick={()=>{
                    setlocation("Sirsi")
                    setexpanded(false)
                }}>Sirsi</button>

            </div>
        </aside>
    )
}

export default SideBar