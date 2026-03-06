import React from 'react'
import ReactECharts from "echarts-for-react"
const LineChart = ({ resultData, linemetric, setlinemetric }) => {
    const date = resultData.map(elem => elem.date)
    const data = resultData.map(elem => elem[linemetric])
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            data: date,
            color : "black",
            xlabel : "Dates"
        },
        yAxis: {
            type: 'value',
            min : 0,
            color :  "black"
        },
        series: [
            {
                
                data: data,
                type: 'line',
                smooth: true,
                color : "green"
            }
        ]
    };
    return (
        <div>
            <div className= ' bg-white border shadow-md shadow-mauve-500 border-black rounded-lg px-5 py-5' style={{width:"100%"}}>
                <h1 className= 'capitalize'>{linemetric} Trend Overtime</h1>
                <select value = {linemetric} onChange={(e)=>{
                    setlinemetric(e.target.value)
                }} name="" id="">
                    <option value="tds">TDS</option>
                    <option value="turbidity">Turbidity</option>
                    <option value="ph">pH</option>
                    <option value="temperature">Temperature</option>
                </select>
                <ReactECharts option={option} style={{ height: 280 }} />

            </div>
        </div>
    )
}

export default LineChart