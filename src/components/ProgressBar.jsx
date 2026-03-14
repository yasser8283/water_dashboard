import React from 'react'
import { MoveDown } from 'lucide-react'
import { waterRules } from '../utils/waterRules';
const ProgressBar = ({ barValue, barMetric }) => {
    const rule = waterRules[barMetric]
    const percentage = (barValue / rule.max) * 100;
    const msgRule = rule.getRules(barValue)
    return (
        <div className="w-full">
            <div className="flex justify-between mb-1 text-sm">
                <span className="capitalize">{barMetric}</span>
                <span>{barValue}</span>
            </div>
             <div
        className="w-full h-6 rounded relative"
        style={{ background: rule.gradient }}
      />

        {/* Indicator */}
       
        <div className=' w-1 h-1 rounded-full' style={{
            position: 'relative',
            bottom: '46px',
            left: `${percentage}%`
        }}>
            <MoveDown strokeWidth={3} />
        </div>
    
       
                <div>
                    <p>{msgRule}</p>
                </div>
            </div>
            )
}

            export default ProgressBar