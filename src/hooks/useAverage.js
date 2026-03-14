export const useAverage = (data) => {
    const total = data.reduce((acc, elem) => {
        acc.ph += elem.ph
        acc.turbidity += elem.turbidity
        acc.oxygen += elem.oxygen
        acc.temperature += elem.temperature
        acc.tds += elem.tds
        acc.pressure = elem.pressure
        return acc;
    }, {
        ph: 0,
        turbidity: 0,
        oxygen: 0,
        temperature: 0,
        tds: 0
    })
    const count = data.length
    return {
        avgPh: (total.ph/count).toFixed(2),
        avgTurbidity: (total.turbidity/count).toFixed(2),
        avgOxygen: (total.oxygen/count).toFixed(2),
        avgTemperature: (total.temperature/count).toFixed(2),
        avgTds: (total.tds/count).toFixed(2),
        avgPressure : (total.pressure/count).toFixed(2)
    }
}