const locations = ["Karwar", "Mangaluru", "Hubli", "Belagavi", "Mysuru"];

const baseValues = {
  Karwar: { ph: 7.3, turbidity: 2.2, oxygen: 7.0, temperature: 26, tds: 420 },
  Mangaluru: { ph: 7.1, turbidity: 3.4, oxygen: 6.5, temperature: 28, tds: 450 },
  Hubli: { ph: 7.4, turbidity: 2.4, oxygen: 6.9, temperature: 27, tds: 405 },
  Belagavi: { ph: 6.6, turbidity: 4.6, oxygen: 5.5, temperature: 24, tds: 500 },
  Mysuru: { ph: 7.2, turbidity: 3.2, oxygen: 6.3, temperature: 26, tds: 465 }
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
        tds: Math.round(randomVariation(base.tds, 40))
      });
    });
  }

  return data;
};

export const waterData = generateWaterData(); 