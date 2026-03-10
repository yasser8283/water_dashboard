import React from 'react'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import LineChart from './LineChart'
import MetricTable from './MetricTable'
import MetricInfo from './MetricInfo'
import { Percent } from 'lucide-react'
import { ChartLine } from "lucide-react";
import { Table } from 'lucide-react'
import { Info } from "lucide-react";
const StatCard = (props) => {
  const [view, setview] = useState('progress')
  return (
    <div>

      <div className='h-70 w-100 bg-white border rounded-lg shadow-xs shadow-black px-5 py-2'>
        <div className='flex justify-between'>
          <h1 className='font-semibold'>{props.title}</h1>

          <button className='cursor-pointer' onClick={() => {
            setview("progress")
          }}><Percent size={15} /></button>
          <button className='cursor-pointer' onClick={() => {
            setview('line')
          }}><ChartLine size={15} /></button>
          <button className='cursor-pointer' onClick={() => {
            setview('table')
          }}><Table size={15} /></button>
          <button className='cursor-pointer' onClick={()=>{
            setview('info')
          }}>
            <Info size={15} />
          </button>
        </div>
        {view === "progress" && (
          <>
            <h2 className='font-semibold px-3 py-3'>{props.value} <span>{props.unit}</span></h2>
            <ProgressBar barValue={props.value} barMetric={props.metric} />
          </>
        )}
        {view === "line" && (
          <>
            <LineChart resultData={props.resultData} linemetric={props.linemetric} />
          </>
        )}
        {view === "table" && (
          <>
            <MetricTable resultData={props.resultData} linemetric={props.linemetric} />
          </>
        )}
        {view === "info" && (
          <>
            <MetricInfo resultData={props.resultData} info={props.info} />
          </>
        )}

      </div>
    </div>
  )
}

export default StatCard