export const waterRules = {
    tds: {
        max: 1000,
        getColor: (value) => {
            if (value <= 300) return "bg-green-500";
            if (value <= 600) return "bg-yellow-500";
            return "bg-red-500";
        },
          getRules: (value) => {
            if (value <= 300) return "TDS Levels:Safe/Acceptable";
            if (value <= 600) return "TDS Levels: Fair";
            if(value >=600) return "TDS Levels: High/Unfit For Drinking"
        }
    },

    turbidity: {
        max: 10,
        getColor: (value) => {
            if (value <= 1) return "bg-green-500";
            if (value <= 5) return "bg-yellow-500";
            return "bg-red-500";
        },
        getRules: (value) => {
            if (value <= 1) return "Low Turbid";
            if (value <= 5) return "Permissible";
            if(value > 5) return "Highly Turbid : Not Safe"
        }
    },

    ph: {
        max: 14,
        getColor: (value) => {
            if (value >= 6.5 && value <= 8.5) return "bg-green-500";
            return "bg-red-500";
        },
        getRules: (value) => {
            if (value >= 6.5 && value <= 8.5) return "pH Level: Moderate(Safe)"
            if (value > 8.5) return "pH Level: Highly Alkaline"
            if (value < 6.5) return "pH Level : Highly Acidic"
        }
    },

    dissolvedOxygen: {
        max: 10,
        getColor: (value) => {
            if (value >= 6) return "bg-green-500";
            if (value >= 4) return "bg-yellow-500";
            return "bg-red-500";
        }
    }
};