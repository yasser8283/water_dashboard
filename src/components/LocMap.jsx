import React from 'react'

const LocMap = ({ location }) => {
  return (
    <section className='bg-slate-800 border border-slate-700 rounded-2xl shadow-lg overflow-hidden'>
      <div className='px-5 py-3 border-b border-slate-700'>
        <h2 className='text-lg font-semibold text-cyan-200'>Location</h2>
        <p className='text-slate-300'>{location}</p>
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
      <div className='px-5 py-3 bg-slate-900 text-slate-400 text-xs'>Google Maps powered embed</div>
    </section>
  )
}

export default LocMap