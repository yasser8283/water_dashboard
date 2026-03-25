import React from 'react'

const SummaryCard = () => {
  return (
    <section className='w-full bg-gradient-to-br from-cyan-700/80 to-slate-800 border border-cyan-500/40 rounded-2xl shadow-2xl p-5'>
      <div className='flex justify-between items-start gap-3'>
        <div>
          <h1 className='text-2xl font-bold text-white'>Health Summary</h1>
          <p className='text-sm text-cyan-200'>Real-time quality status using latest sensor data</p>
        </div>
        <span className='px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs uppercase tracking-wider'>Safe</span>
      </div>

      <div className='mt-4'>
        <p className='text-slate-100 leading-relaxed'>All key water quality indicators are within defined safe ranges. Continue monitoring to maintain stability and prevent spikes.</p>

        <div className='mt-4 space-y-3'>
          <div>
            <div className='flex justify-between text-sm text-slate-300'><span>pH health</span><span>92%</span></div>
            <div className='w-full h-2 bg-slate-700 rounded-full mt-1'>
              <div className='h-full w-[92%] bg-emerald-400 rounded-full'></div>
            </div>
          </div>
          <div>
            <div className='flex justify-between text-sm text-slate-300'><span>Turbidity</span><span>86%</span></div>
            <div className='w-full h-2 bg-slate-700 rounded-full mt-1'>
              <div className='h-full w-[86%] bg-emerald-400 rounded-full'></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SummaryCard