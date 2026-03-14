import React from 'react'
import { useFilterData } from '../hooks/useFilterData'
import { useAverage } from '../hooks/useAverage'
import StatCard from '../components/StatCard';
import TempGauge from '../components/TempGauge';
import LineChart from '../components/LineChart';
import { useState } from 'react'
import DataTable from '../components/DataTable';
import LocMap from '../components/LocMap';

const Dashboard = ({ location }) => {
  const resultData = useFilterData(location);
  const avgResult = useAverage(resultData)

  //Info
  const ph_info = "pH in drinking water measures its acidity or alkalinity on a scale of 0 to 14, where 7 is neutral, lower values ​​are acidic, and higher are alkaline (basic). It indicates the concentration of hydrogen ions, with a target range of 6.5–8.5 for safe drinking water, affecting taste and pipe corrosion"
  const turbidityInfo = "Turbidity in drinking water isa measure of its cloudiness or haziness, caused by suspended particles like clay, silt, organic matter, and microbes that scatter light. High turbidity indicates poor water quality, as particles can shield harmful bacteria and viruses from disinfection processes like chlorination. It is measured in NTU, with ideal levels below 1 NTU"
  const tdsInfo = "TDS stands forTotal Dissolved Solids, representing the total concentration of dissolved substances in water, including inorganic salts (calcium, magnesium, potassium) and small amounts of organic matter. Measured in mg/L or ppm, it indicates water quality, with an ideal range typically between 100–300 ppm for taste and safety."
  const oxyInfo = "Dissolved oxygen (DO) in drinking water is the amount of free, gaseous oxygen mixed into the water, typically measured in mg/L. It acts as an indicator of water quality; higher levels generally improve taste , while low levels can indicate contamination. It is essential for water purification and affects pipe corrosion."
  const presInfo = "Drinking water pressure isthe force, typically measured in pounds per square inch (PSI) or bar, that moves water through pipes to fixtures. Normal residential pressure ranges between 40–70 PSI (approx. 2.7–4.8 bar). Ideal pressure is around 50 PSI, as too low (<40 PSI) causes weak flow, while >80 PSI can damage pipes."

  return (
    <div className='bg-slate-900 text-slate-200 w-full grid gird-cols-1 lg:grid lg:grid-cols-3 gap-10 px-5 py-5'>
      <LocMap location={location} />
      <StatCard title={"pH"} value={avgResult.avgPh} metric={"ph"} resultData={resultData} linemetric="ph" info={ph_info} bar={true} />
      <StatCard title={"Turbidity"} value={avgResult.avgTurbidity} unit={"NTU"} metric={"turbidity"} resultData={resultData} linemetric="turbidity" info={turbidityInfo} bar={true} />
      <StatCard title={"Total Dissolved Solids(TDS)"} unit={"mg/L"} value={avgResult.avgTds} metric={"tds"} resultData={resultData} linemetric="tds" info={tdsInfo} bar={true} />
      <StatCard title={"Oxygen"} value={avgResult.avgOxygen} unit={"mg/L"} metric={"oxygen"} resultData={resultData} linemetric='oxygen' info={oxyInfo} bar={true} />
      <StatCard title={"Pressure"} value={avgResult.avgPressure} unit={"psi"} metric={"pressure"} resultData={resultData} linemetric='pressure' info={presInfo} bar={false} />
      <TempGauge value={avgResult.avgTemperature} />
      <DataTable data={resultData} />
    </div>
  )
}

export default Dashboard