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
                    fontSize: 10
                },
                anchor: {
                    show: false
                },
                title: {
                    show: true
                },
                detail: {
                    valueAnimation: true,
                    width: '10%',
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
            <div className='bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-cyan-500/30 overflow-hidden px-4 py-4 h-[300px] w-full'>
                <h1 className='font-semibold text-lg mb-3 text-slate-100'>Temperature</h1>
                <div className='h-[220px]'>
                    <ReactECharts option={option} style={{ height: '100%', width: '100%' }} />
                </div>
            </div>
        </div>
    )
}

export default TempGauge