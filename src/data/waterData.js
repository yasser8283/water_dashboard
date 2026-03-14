const locations = ["Karwar", "Dandeli", "Hubli", "Belagavi", "Sirsi"];

const baseValues = {
  Karwar: { ph: 7.3, turbidity: 2.2, oxygen: 7.0, temperature: 26, tds: 400, pressure: 42 },
  Dandeli: { ph: 7.1, turbidity: 3.4, oxygen: 6.5, temperature: 23, tds: 450, pressure: 52 },
  Hubli: { ph: 7.4, turbidity: 2.4, oxygen: 6.9, temperature: 22, tds: 405, pressure: 55 },
  Belagavi: { ph: 7.3, turbidity: 4.6, oxygen: 7.5, temperature: 24, tds: 500, pressure: 50 },
  Sirsi: { ph: 7.2, turbidity: 3.2, oxygen: 6.3, temperature: 20, tds: 465, pressure: 57 }
};

const randomVariation = (value, range) =>
  Number((value + (Math.random() * range - range / 2)).toFixed(2));

const generateWaterData = () => {
  const data = [];
  const start = new Date("2026-01-01");
  const end = new Date("2026-03-01");

  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
    const date = d.toISOString().split("T")[0];

    locations.forEach((loc) => {
      const base = baseValues[loc];

      data.push({
        date,
        location: loc,
        ph: randomVariation(base.ph, 0.4),
        turbidity: randomVariation(base.turbidity, 0.8),
        oxygen: randomVariation(base.oxygen, 0.6),
        temperature: Math.round(randomVariation(base.temperature, 2)),
        tds: Math.round(randomVariation(base.tds, 40)),
        pressure: randomVariation(base.pressure, 2.5)
      });
    });
  }

  return data;
};

export const waterData = generateWaterData(); 