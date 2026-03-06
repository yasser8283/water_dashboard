import React from 'react'
import { useFilterData } from '../hooks/useFilterData'
import { useAverage } from '../hooks/useAverage'
import StatCard from '../components/StatCard';
import TempGauge from '../components/TempGauge';
import LineChart from '../components/LineChart';
import { useState } from 'react'
import DataTable from '../components/DataTable';

const Dashboard = ({ location }) => {
  const resultData = useFilterData(location);
  const avgResult = useAverage(resultData)
const [linemetric, setlinemetric] = useState("ph")
  return (
    <div>
      <h1 className='px-5 py-5'>Dashboard for <span className=' bg-cyan-300 px-1.5 py-1.5 border-2 border-cyan-400 rounded-lg '>{location} City Area</span></h1>
      <div className='grid grid-cols-3 gap-10 px-5 py-5'>
        <StatCard title={"pH"} value={avgResult.avgPh} metric={"ph"} />
        <StatCard title={"Turbidity"} value={avgResult.avgTurbidity} metric={"turbidity"} />
        <StatCard title={"Total Dissolved Solids(TDS)"} value={avgResult.avgTds} metric={"tds"} />
        <TempGauge value = {avgResult.avgTemperature} />
        <LineChart resultData={resultData} linemetric = {linemetric} setlinemetric = {setlinemetric} />
        <DataTable data = {resultData} />
      </div>

    </div>
  )
}

export default Dashboard