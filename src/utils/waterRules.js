export const waterRules = {
    tds: {
        max: 1000,
        gradient: "linear-gradient(to right, #22c55e, #4ade80, #facc15, #fb923c, #ef4444)",
        getRules: (value) => {
            if (value <= 300) return "TDS Levels:Safe/Acceptable";
            if (value <= 600) return "TDS Levels: Fair";
            if (value >= 600) return "TDS Levels: High/Unfit For Drinking"
        }
    },

    turbidity: {
        max: 10,
        gradient: "linear-gradient(to right, #22c55e, #84cc16, #facc15, #f97316, #ef4444)",
        getRules: (value) => {
            if (value <= 1) return "Low Turbid(Safe)";
            if (value <= 5) return "Permissible";
            if (value > 5) return "Highly Turbid : Not Safe"
        }
    },

    ph: {
        max: 14,
        gradient: "linear-gradient(to right, #ef4444, #facc15, #22c55e, #facc15, #ef4444)",
        getRules: (value) => {
            if (value >= 6.5 && value <= 8.5) return "pH Level: Moderate(Safe)"
            if (value > 8.5) return "pH Level: Highly Alkaline"
            if (value < 6.5) return "pH Level : Highly Acidic"
        }
    },

    oxygen: {
        max: 10,
        gradient: "linear-gradient(to right, #ef4444, #facc15, #22c55e, #4ade80)",
        getRules: (value) => {
            if (value >= 6 && value <= 9) return "Prescribed D.O"
            if (value > 9) return "High D.O (Not Safe)"
            if (value < 6) return "Very Low D.O"
        }
    }
};