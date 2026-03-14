import React from 'react'

const SummaryCard = () => {
  return (
    <div className='h-70 lg:h-95 w-full text-slate-900 bg-lime-400 border-slate-600 rounded-lg shadow-md px-5 py-5'>
        <h1 className='font-semibold text-2xl'>Summary</h1>
        <div className='flex flex-col w-full h-60 justify-center items-center'>
        <p className=' text-3xl'>Safe</p>
        <p className=' text-md mt-3 '>The metrics are in the prescribed limits</p>
        </div>
    </div>
  )
}

export default SummaryCard