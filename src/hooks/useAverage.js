export const useAverage = (data) => {
    if (!data || data.length === 0) {
        return {
            avgPh: 0,
            avgTurbidity: 0,
            avgOxygen: 0,
            avgTemperature: 0,
            avgTds: 0,
            avgPressure: 0,
            avgSalinity: 0,
            avgResistivity: 0,
        };
    }

    const total = data.reduce((acc, elem) => {
        acc.ph += elem.ph
        acc.turbidity += elem.turbidity
        acc.oxygen += elem.oxygen
        acc.temperature += elem.temperature
        acc.tds += elem.tds
        acc.pressure += elem.pressure
        acc.salinity += elem.salinity
        acc.resistivity += elem.resistivity
        return acc;
    }, {
        ph: 0,
        turbidity: 0,
        oxygen: 0,
        temperature: 0,
        tds: 0,
        pressure: 0,
        salinity: 0,
        resistivity: 0,
    })

    const count = data.length
    return {
        avgPh: (total.ph/count).toFixed(2),
        avgTurbidity: (total.turbidity/count).toFixed(2),
        avgOxygen: (total.oxygen/count).toFixed(2),
        avgTemperature: (total.temperature/count).toFixed(2),
        avgTds: (total.tds/count).toFixed(2),
        avgPressure : (total.pressure/count).toFixed(2),
        avgSalinity : (total.salinity/count).toFixed(2),
        avgResistivity : (total.resistivity/count).toFixed(2)
    }
}