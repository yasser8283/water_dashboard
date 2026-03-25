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
    <article className='w-full bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-500/30 overflow-hidden'>
      <header className='px-5 py-4 flex items-center justify-between bg-slate-800/50'>
        <h1 className='font-semibold text-lg text-slate-100'>{props.title}</h1>
        <div className='flex gap-2'>
          {chartButtons.map((btn) => {
            const IconComp = btn.icon;
            const isActive = view === btn.id;
            return (
              <button
                key={btn.id}
                aria-label={btn.label}
                className={`p-2 rounded-lg transition-all duration-200 ${isActive ? 'bg-cyan-500 text-slate-950 shadow-lg' : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-700'}`}
                onClick={() => setview(btn.id)}
              >
                <IconComp size={18} />
              </button>
            );
          })}
        </div>
      </header>

      <div className='px-5 pb-5'>
        {view === 'progress' && (
          <>
            {props.title === 'Pressure' ? (
              <div className='flex justify-center items-center h-32'>
                <h2 className='text-5xl font-bold text-cyan-400'>{props.value} <span className='text-2xl text-slate-300'>{props.unit}</span></h2>
              </div>
            ) : (
              <h2 className='text-4xl font-bold mb-3 text-white'>{props.value} <span className='text-xl text-slate-300'>{props.unit}</span></h2>
            )}

            {props.bar && <ProgressBar barValue={props.value} barMetric={props.metric} />}
          </>
        )}

        {view === 'line' && <LineChart resultData={props.resultData} linemetric={props.linemetric} />}
        {view === 'table' && <MetricTable resultData={props.resultData} linemetric={props.linemetric} />}
        {view === 'info' && <p className='text-sm leading-relaxed text-slate-300 bg-slate-800/50 p-3 rounded-lg'>{props.info}</p>}
      </div>
    </article>
  );
};

export default StatCard