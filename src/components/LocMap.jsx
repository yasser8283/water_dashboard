import React from 'react'

const LocMap = ({ location }) => {
  return (
    <section className='bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-cyan-500/30'>
      <div className='px-6 py-4 border-b border-slate-700/50 bg-slate-800/50'>
        <h2 className='text-lg font-semibold text-cyan-200 flex items-center gap-2'>
          <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 20 20'>
            <path fillRule='evenodd' d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z' clipRule='evenodd' />
          </svg>
          Location
        </h2>
        <p className='text-slate-300 text-sm mt-1'>Monitoring station: {location}</p>
      </div>
      <div className='p-0'>
        <iframe
          className='w-full h-60 sm:h-72 lg:h-80'
          src={`https://www.google.com/maps?q=${location}&output=embed`}
          title={`Map of ${location}`}
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
      <div className='px-6 py-3 bg-gradient-to-r from-slate-900 to-slate-800 text-slate-400 text-xs border-t border-slate-700/50'>Google Maps powered embed</div>
    </section>
  )
}

export default LocMap