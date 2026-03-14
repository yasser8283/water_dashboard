import React from 'react'
import ProgressBar from './ProgressBar'
import { useState } from 'react'
import LineChart from './LineChart'
import MetricTable from './MetricTable'

import { Percent } from 'lucide-react'
import { ChartLine } from "lucide-react";
import { Table } from 'lucide-react'
import { Info } from "lucide-react";
const StatCard = (props) => {
  const [view, setview] = useState('progress')
  return (
    <div>

      <div className='h-70 lg:h-70 w-full bg-slate-700 border-slate-600 rounded-lg shadow-md px-5 py-2 overflow-auto'>
        <div className='flex justify-between'>
          <h1 className='font-semibold text-xl'>{props.title}</h1>

          <button className='cursor-pointer' onClick={() => {
            setview("progress")
          }}><Percent size={15} /></button>
          <button className='cursor-pointer' onClick={() => {
            setview('line')
          }}><ChartLine size={15} /></button>
          <button className='cursor-pointer' onClick={() => {
            setview('table')
          }}><Table size={15} /></button>
          <button className='cursor-pointer' onClick={() => {
            setview('info')
          }}>
            <Info size={15} />
          </button>
        </div>
        {view === "progress" && (
          <>
            {props.title === "Pressure" && (
             <div className='flex justify-center items-center h-50'>
              <h1 className='text-4xl font-bold'>{props.value} <span>{props.unit}</span></h1>
              </div>
            )}
            {props.title != "Pressure" && (
              <h2 className='font-semibold px-3 py-3'><span className='text-2xl'>{props.value}</span> <span>{props.unit}</span></h2>)}

            {props.bar && (
              <ProgressBar barValue={props.value} barMetric={props.metric} />
            )}
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
          <div className="px-2 py-2">{props.info}</div>
        )}

      </div>
    </div>
  )
}

export default StatCard