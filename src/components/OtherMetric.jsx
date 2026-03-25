import React from 'react'

const OtherMetric = ({ salinityvalue, resistivityvalue }) => {
  return (
    <section className='w-full bg-slate-800 border border-slate-700 rounded-2xl shadow-lg p-5'>
      <h1 className='text-xl lg:text-2xl font-semibold text-slate-100'>Additional Metrics</h1>
      <p className='text-sm text-slate-300 mt-1'>Extended water condition monitoring details.</p>

      <div className='mt-5 grid grid-cols-1 gap-3'>
        <div className='p-3 bg-slate-900 rounded-lg border border-slate-700'>
          <div className='flex justify-between items-center text-sm text-slate-300'>
            <span>Salinity</span>
            <span className='text-white font-bold'>{salinityvalue} mg/L</span>
          </div>
          <div className='mt-2 h-2 bg-slate-700 rounded-full'>
            <div className='h-full w-[45%] bg-cyan-400 rounded-full'></div>
          </div>
        </div>

        <div className='p-3 bg-slate-900 rounded-lg border border-slate-700'>
          <div className='flex justify-between items-center text-sm text-slate-300'>
            <span>Resistivity</span>
            <span className='text-white font-bold'>{resistivityvalue} MΩ·cm</span>
          </div>
          <div className='mt-2 h-2 bg-slate-700 rounded-full'>
            <div className='h-full w-[68%] bg-cyan-400 rounded-full'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherMetric