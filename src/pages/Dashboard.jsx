import React from 'react'
import { useFilterData } from '../hooks/useFilterData'
import { useAverage } from '../hooks/useAverage'
import StatCard from '../components/StatCard';
import TempGauge from '../components/TempGauge';
import LineChart from '../components/LineChart';
import { useState } from 'react'
import DataTable from '../components/DataTable';
import LocMap from '../components/LocMap';
import SummaryCard from '../components/SummaryCard';
import OtherMetric from '../components/OtherMetric';

const Dashboard = ({ location }) => {
  const resultData = useFilterData(location);
  const avgResult = useAverage(resultData);

  const ph_info = "pH in drinking water measures its acidity or alkalinity on a scale of 0 to 14, where 7 is neutral, lower values are acidic, and higher are alkaline. It indicates the concentration of hydrogen ions, with a target range of 6.5–8.5 for safe drinking water.";
  const turbidityInfo = "Turbidity in drinking water is a measure of its cloudiness or haziness caused by suspended particles. High turbidity indicates poor water quality and can shield microbes from disinfection.";
  const tdsInfo = "TDS (Total Dissolved Solids) represents dissolved minerals in water. Ideal range is typically 100–300 ppm for safe drinking water.";
  const oxyInfo = "Dissolved oxygen is an indicator of water purity; higher levels generally support better taste and signal healthier water.";
  const presInfo = "Drinking water pressure is the force that drives water through pipes. Normal residential pressure is 40–70 PSI.";

  if (resultData.length === 0) {
    return (
      <div className='bg-slate-900 text-slate-200 min-h-[70vh] flex items-center justify-center p-6'>
        <div className='bg-slate-800 rounded-xl p-8 shadow-lg text-center'>
          <h2 className='text-2xl font-semibold mb-2'>No data available</h2>
          <p>Choose a location from the sidebar to load water quality metrics.</p>
        </div>
      </div>
    );
  }

  return (
    <main className='bg-slate-800 text-slate-200 w-full min-h-screen p-4'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
        <div className='lg:col-span-2 space-y-4'>
          <LocMap location={location} />

          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4'>
            <StatCard title='pH' value={avgResult.avgPh} metric='ph' resultData={resultData} linemetric='ph' info={ph_info} bar />
            <StatCard title='Turbidity' value={avgResult.avgTurbidity} unit='NTU' metric='turbidity' resultData={resultData} linemetric='turbidity' info={turbidityInfo} bar />
            <StatCard title='TDS' value={avgResult.avgTds} unit='mg/L' metric='tds' resultData={resultData} linemetric='tds' info={tdsInfo} bar />
            <StatCard title='Oxygen' value={avgResult.avgOxygen} unit='mg/L' metric='oxygen' resultData={resultData} linemetric='oxygen' info={oxyInfo} bar />
            <StatCard title='Pressure' value={avgResult.avgPressure} unit='psi' metric='pressure' resultData={resultData} linemetric='pressure' info={presInfo} bar={false} />
            <TempGauge value={avgResult.avgTemperature} />
          </div>

          <DataTable data={resultData} />
        </div>

        <aside className='space-y-4'>
          <div className='bg-slate-800 rounded-xl p-4 shadow-lg'>
            <h2 className='text-lg font-semibold mb-2'>Current Location</h2>
            <p className='text-slate-300'>{location}</p>
          </div>

          <SummaryCard />
          <OtherMetric salinityvalue={avgResult.avgSalinity} resistivityvalue={avgResult.avgResistivity} />

          <section className='bg-slate-800 rounded-xl p-4 shadow-lg border border-slate-700'>
            <h3 className='text-md font-semibold mb-2'>Recent Alerts</h3>
            <ul className='text-sm text-slate-300 space-y-2'>
              <li className='bg-slate-900 p-2 rounded-md border border-slate-700'>All parameters are stable for the last 24h.</li>
              <li className='bg-slate-900 p-2 rounded-md border border-slate-700'>No turbidity events detected in current location.</li>
              <li className='bg-slate-900 p-2 rounded-md border border-slate-700'>Next sensor sync in: 12m 30s</li>
            </ul>
          </section>
        </aside>
      </div>
    </main>
  );
}

export default Dashboard