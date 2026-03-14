import React from 'react'

const OtherMetric = ({ salinityvalue,resistivityvalue }) => {
  return (
    <div className='h-70 lg:h-95 w-full bg-slate-700 border-slate-600 rounded-lg shadow-md px-5 py-5'>
        <h1 className='text-2xl font-semibold'>Soft Parameters</h1>
        <div className='flex flex-col mt-10 gap-5'>
            <div className='flex justify-between text-2xl'>
            <p>Salinity</p>
            <p className='font-bold' >{salinityvalue}<span>mg/L</span></p>
            </div>
            <div className='flex justify-between text-2xl'>
            <p>Resistivity</p>
            <p className='font-bold'>{resistivityvalue}<span>M ohm.cm</span></p>
            </div>
        </div>
    </div>
  )
}

export default OtherMetric