import React from 'react'
import ReactECharts from "echarts-for-react"
import { color } from 'echarts';
const TempGauge = ({ value }) => {
    const getTempColor = (value) => {
        if (value <= 15) return "#3b82f6";
        if (value <= 30) return "limegreen";
        if (value <= 45) return "#f97316";
        return "#ef4444";
    };

      let color = getTempColor(value)


    const option = {
        series: [
            {
                type: 'gauge',
                center: ['50%', '60%'],
                startAngle: 200,
                endAngle: -20,
                min: 0,
                max: 60,
                splitNumber: 12,
                itemStyle: {
                    color: color
                },
                progress: {
                    show: true,
                    width: 30
                },
                pointer: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        width: 30
                    }
                },
                axisTick: {
                    distance: -45,
                    splitNumber: 5,
                    lineStyle: {
                        width: 2,
                        color: color
                    }
                },
                splitLine: {
                    distance: -52,
                    length: 14,
                    lineStyle: {
                        width: 3,
                        color: color
                    }
                },
                axisLabel: {
                    distance: -20,
                    color: color,
                    fontSize: 20
                },
                anchor: {
                    show: false
                },
                title: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    width: '30%',
                    lineHeight: 20,
                    borderRadius: 8,
                    offsetCenter: [0, '-15%'],
                    fontSize: 20,
                    fontWeight: 'bolder',
                    formatter: '{value} °C',
                    color: 'inherit'
                },
                data: [
                    {
                        value: value,

                    }
                ]
            },


        ]
    };
    return (
        <div>
            <div className='bg-slate-700   px-5 py-5 rounded-lg shadow-md h-95 w-full overflow-auto'>
                <h1 className='font-semibold text-xl'>Temperature</h1>
                <ReactECharts option={option} style={{ height: 300 }} />
            </div>
        </div>
    )
}

export default TempGauge