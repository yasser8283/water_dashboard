import React from 'react'

const OtherMetric = ({ salinityvalue, resistivityvalue }) => {
  return (
    <section className='w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30'>
      <h1 className='text-xl lg:text-2xl font-semibold text-slate-100'>Additional Metrics</h1>
      <p className='text-sm text-slate-300 mt-1'>Extended water condition monitoring details.</p>

      <div className='mt-5 grid grid-cols-1 gap-4'>
        <div className='p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300'>
          <div className='flex justify-between items-center text-sm text-slate-300'>
            <span>Salinity</span>
            <span className='text-white font-bold text-lg'>{salinityvalue} mg/L</span>
          </div>
          <div className='mt-3 h-3 bg-slate-700 rounded-full overflow-hidden'>
            <div className='h-full w-[45%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500'></div>
          </div>
        </div>

        <div className='p-4 bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300'>
          <div className='flex justify-between items-center text-sm text-slate-300'>
            <span>Resistivity</span>
            <span className='text-white font-bold text-lg'>{resistivityvalue} MΩ·cm</span>
          </div>
          <div className='mt-3 h-3 bg-slate-700 rounded-full overflow-hidden'>
            <div className='h-full w-[68%] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-500'></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OtherMetric