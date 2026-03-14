import React from 'react'

const LocMap = ({ location }) => {
  return (
    <div>
        <div className='flex flex-col 70 w-full lg:align-center  bg-slate-700 border-slate-600 rounded-lg shadow-md px-6 py-3'>
            <h2 className='font-semibold mb-2'>Location: {location}</h2>
            <iframe src={`https://www.google.com/maps?q=${location}&output=embed`} width="250" height="220" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}

export default LocMap