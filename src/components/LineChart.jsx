import React from 'react'
import ReactECharts from "echarts-for-react"
import { color } from 'echarts'
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
            xlabel : "Dates",
            axisLabel:{
                color:"white"
            }
        },
        yAxis: {
            type: 'value',
            min : 0,
            axisLabel:{
                color: "white"
            }
        },
        series: [
            {
                
                data: data,
                type: 'line',
                smooth: true,
                color : "cyan"
            }
        ]
    };
    return (
        <div>
            <div>
                <h1 className= 'capitalize'>{linemetric} Trend Overtime</h1>
               
                <ReactECharts option={option} style={{ height: 270 }} />

            </div>
        </div>
    )
}

export default LineChart