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
  const [view, setview] = useState('progress');

  const chartButtons = [
    { id: 'progress', icon: Percent, label: 'Progress' },
    { id: 'line', icon: ChartLine, label: 'Trend' },
    { id: 'table', icon: Table, label: 'Table' },
    { id: 'info', icon: Info, label: 'Info' },
  ];

  return (
    <article className='w-full bg-slate-700 border border-slate-600 rounded-2xl shadow-lg transition hover:-translate-y-0.5 hover:shadow-2xl overflow-hidden'>
      <header className='px-4 py-3 flex items-center justify-between'>
        <h1 className='font-semibold text-lg'>{props.title}</h1>
        <div className='flex gap-2'>
          {chartButtons.map((btn) => {
            const IconComp = btn.icon;
            const isActive = view === btn.id;
            return (
              <button
                key={btn.id}
                aria-label={btn.label}
                className={`p-1 rounded ${isActive ? 'bg-cyan-500 text-slate-950' : 'text-slate-300 hover:text-white'} transition`}
                onClick={() => setview(btn.id)}
              >
                <IconComp size={18} />
              </button>
            );
          })}
        </div>
      </header>

      <div className='px-4 pb-4'>
        {view === 'progress' && (
          <>
            {props.title === 'Pressure' ? (
              <div className='flex justify-center items-center h-28'>
                <h2 className='text-4xl font-bold'>{props.value} <span className='text-lg'>{props.unit}</span></h2>
              </div>
            ) : (
              <h2 className='text-3xl font-bold mb-2'>{props.value} <span className='text-base'>{props.unit}</span></h2>
            )}

            {props.bar && <ProgressBar barValue={props.value} barMetric={props.metric} />}
          </>
        )}

        {view === 'line' && <LineChart resultData={props.resultData} linemetric={props.linemetric} />}
        {view === 'table' && <MetricTable resultData={props.resultData} linemetric={props.linemetric} />}
        {view === 'info' && <p className='text-sm leading-relaxed text-slate-300'>{props.info}</p>}
      </div>
    </article>
  );
};

export default StatCard