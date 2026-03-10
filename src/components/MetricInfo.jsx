import React from 'react'

const MetricInfo = ({ resultData, info }) => {
    const infoData = resultData.map(elem => elem.info)
  return (
    <div>
        <p>{info}</p>
    </div>
  )
}

export default MetricInfo