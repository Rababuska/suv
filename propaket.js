// База данных PROPAKET
const propaketData = {
    pvd_white: {
        name: "Полиэтиленовый (Белый)",
        sizes: {
            "20x24": [{max: 199, p: 100}, {max: 499, p: 95}, {max: Infinity, p: 90}],
            "25x35": [{max: 199, p: 120}, {max: 499, p: 110}, {max: Infinity, p: 100}],
            "30x40": [{max: 199, p: 130}, {max: 499, p: 120}, {max: Infinity, p: 110}],
            "40x50 (38x53)": [{max: 199, p: 140}, {max: 499, p: 130}, {max: Infinity, p: 120}],
            "50x60": [{max: 199, p: 180}, {max: 499, p: 170}, {max: Infinity, p: 160}],
            "60x63": [{max: 199, p: 190}, {max: 499, p: 180}, {max: Infinity, p: 170}]
        }
    },
    pvd_color: {
        name: "Полиэтиленовый (Цветной/Черный)",
        sizes: {
            "20x24": [{max: 199, p: 110}, {max: 499, p: 105}, {max: 19999, p: 100}, {max: Infinity, p: 37}],
            "25x35": [{max: 199, p: 130}, {max: 499, p: 120}, {max: 4999, p: 110}, {max: Infinity, p: 42}],
            "30x40": [{max: 199, p: 140}, {max: 499, p: 130}, {max: 4999, p: 120}, {max: Infinity, p: 47}],
            "40x50 (38x53)": [{max: 199, p: 150}, {max: 499, p: 140}, {max: 4999, p: 130}, {max: Infinity, p: 61}],
            "50x60": [{max: 199, p: 190}, {max: 499, p: 180}, {max: 4999, p: 170}, {max: Infinity, p: 85}],
            "60x63": [{max: 199, p: 200}, {max: 499, p: 190}, {max: 4999, p: 180}, {max: Infinity, p: 87}]
        }
    },
    paper: {
        name: "Бумажные пакеты",
        sizes: {
            "12x16x7": [{max: 59, p: 340}, {max: 191, p: 330}, {max: Infinity, p: 310}],
            "18x23x10": [{max: 59, p: 415}, {max: 191, p: 395}, {max: Infinity, p: 380}],
            "26x32x11": [{max: 59, p: 550}, {max: 191, p: 530}, {max: Infinity, p: 510}],
            "32x38x12 (30x40)": [{max: 59, p: 685}, {max: 191, p: 670}, {max: Infinity, p: 640}],
            "36x47x15": [{max: 59, p: 925}, {max: 191, p: 910}, {max: Infinity, p: 890}],
            "40x60x22 (45x55)": [{max: 59, p: 1255}, {max: 191, p: 1180}, {max: Infinity, p: 1130}]
        }
    },
    kraft_brown: {
        name: "Крафт пакет (бурый)",
        sizes: {
            "22x25x12": [{max: 499, p: 170}, {max: 1999, p: 155}, {max: Infinity, p: 145}],
            "24x28x14": [{max: 499, p: 175}, {max: 1999, p: 165}, {max: Infinity, p: 155}],
            "26x35x15": [{max: 499, p: 180}, {max: 1999, p: 170}, {max: Infinity, p: 155}],
            "32x37x20": [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}],
            "35x45x15": [{max: 499, p: 205}, {max: 1999, p: 195}, {max: Infinity, p: 185}]
        }
    },
    kraft_white: {
        name: "Крафт пакет (белый)",
        sizes: {
            "22x25x12": [{max: 499, p: 190}, {max: 1999, p: 175}, {max: Infinity, p: 165}],
            "24x28x14": [{max: 499, p: 195}, {max: 1999, p: 185}, {max: Infinity, p: 175}],
            "26x35x15": [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}],
            "32x37x20": [{max: 499, p: 225}, {max: 1999, p: 215}, {max: Infinity, p: 205}],
            "35x45x15": [{max: 499, p: 235}, {max: 1999, p: 225}, {max: Infinity, p: 215}]
        }
    }
};

// Функция расчета
function calculatePropaket(type, size, qty, frontColors, backColors) {
    if (!propaketData[type] || !propaketData[type].sizes[size]) return { cost: 0, unitPrice: 0 };
    
    let tiers = propaketData[type].sizes[size];
    let tier = tiers.find(t => qty <= t.max);
    
    if (!tier) return { cost: 0, unitPrice: 0 };
    
    let basePrice = tier.p;
    // Базовая цена включает 1 цвет на 1 сторону.
    // Считаем доп. цвета: (спереди - 1 баз. цвет) + все цвета сзади
    let extraColors = (frontColors - 1) + backColors; 
    let extraCost = extraColors * 45;
    
    let unitPrice = basePrice + extraCost;
    return { 
        unitPrice: unitPrice, 
        cost: unitPrice * qty 
    };
}
