import React from 'react'
import ProgressBar from './ProgressBar'

const StatCard = (props) => {

  return (
    <div>
       
            <div className='h-60 w-100 bg-white border rounded-lg shadow-xs shadow-black px-5 py-2'>
                <h1 className='font-semibold'>{props.title}</h1>
                <h2 className='font-semibold px-3 py-3'>{props.value}</h2>
                 <ProgressBar barValue = {props.value} barMetric = {props.metric} />
              
        
        </div>
       
    </div>
  )
}

export default StatCard