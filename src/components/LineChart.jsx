import React from 'react'
import ReactECharts from "echarts-for-react"
const LineChart = ({ resultData,linemetric}) => {
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
            <div>
                <h1 className= 'capitalize'>{linemetric} Trend Overtime</h1>
               
                <ReactECharts option={option} style={{ height: 250 }} />

            </div>
        </div>
    )
}

export default LineChart