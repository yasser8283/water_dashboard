import React from 'react'
import { waterRules } from '../utils/waterRules';
const ProgressBar = ({ barValue, barMetric,unit }) => {
    const rule = waterRules[barMetric]
    const percentage = (barValue / rule.max) * 100;
    const color = rule.getColor(barValue)
    const msgRule = rule.getRules(barValue)
    return (
        <div className="w-full">

            <div className="flex justify-between mb-1 text-sm">
                <span className="capitalize">{barMetric}</span>
                <span>{barValue}</span>
            </div>

            <div className="w-full bg-gray-300 rounded h-6 overflow-hidden">
                <div
                    className={`${color} h-6 rounded`}
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
             <div>
                <p>{msgRule}</p>
             </div>
        </div>
    )
}

export default ProgressBar