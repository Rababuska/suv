// База данных PROPAKET
const propaketData = {
    pvd_white: {
        name: "Полиэтиленовый (Белый)",
        sizes: {
            "200x240": [{max: 199, p: 100}, {max: 499, p: 95}, {max: Infinity, p: 90}],
            "250x350": [{max: 199, p: 120}, {max: 499, p: 110}, {max: Infinity, p: 100}],
            "300x400": [{max: 199, p: 130}, {max: 499, p: 120}, {max: Infinity, p: 110}],
            "400x500 (380x530)": [{max: 199, p: 140}, {max: 499, p: 130}, {max: Infinity, p: 120}],
            "500x600": [{max: 199, p: 180}, {max: 499, p: 170}, {max: Infinity, p: 160}],
            "600x630": [{max: 199, p: 190}, {max: 499, p: 180}, {max: Infinity, p: 170}]
        }
    },
    pvd_color: {
        name: "Полиэтиленовый (Цветной/Черный)",
        sizes: {
            "200x240": [{max: 199, p: 110}, {max: 499, p: 105}, {max: 19999, p: 100}, {max: Infinity, p: 37}],
            "250x350": [{max: 199, p: 130}, {max: 499, p: 120}, {max: 4999, p: 110}, {max: Infinity, p: 42}],
            "300x400": [{max: 199, p: 140}, {max: 499, p: 130}, {max: 4999, p: 120}, {max: Infinity, p: 47}],
            "400x500 (380x530)": [{max: 199, p: 150}, {max: 499, p: 140}, {max: 4999, p: 130}, {max: Infinity, p: 61}],
            "500x600": [{max: 199, p: 190}, {max: 499, p: 180}, {max: 4999, p: 170}, {max: Infinity, p: 85}],
            "600x630": [{max: 199, p: 200}, {max: 499, p: 190}, {max: 4999, p: 180}, {max: Infinity, p: 87}]
        }
    },
    paper: {
        name: "Бумажные пакеты",
        sizes: {
            "120x160x70": [{max: 59, p: 340}, {max: 191, p: 330}, {max: Infinity, p: 310}],
            "180x230x100": [{max: 59, p: 415}, {max: 191, p: 395}, {max: Infinity, p: 380}],
            "260x320x110": [{max: 59, p: 550}, {max: 191, p: 530}, {max: Infinity, p: 510}],
            "320x380x120 (300x400)": [{max: 59, p: 685}, {max: 191, p: 670}, {max: Infinity, p: 640}],
            "360x470x150": [{max: 59, p: 925}, {max: 191, p: 910}, {max: Infinity, p: 890}],
            "400x600x220 (450x550)": [{max: 59, p: 1255}, {max: 191, p: 1180}, {max: Infinity, p: 1130}]
        }
    },
    kraft_brown: {
        name: "Крафт пакет (бурый)",
        sizes: {
            "220x250x120": [{max: 499, p: 170}, {max: 1999, p: 155}, {max: Infinity, p: 145}],
            "240x280x140": [{max: 499, p: 175}, {max: 1999, p: 165}, {max: Infinity, p: 155}],
            "260x350x150": [{max: 499, p: 180}, {max: 1999, p: 170}, {max: Infinity, p: 155}],
            "320x370x200": [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}],
            "350x450x150": [{max: 499, p: 205}, {max: 1999, p: 195}, {max: Infinity, p: 185}]
        }
    },
    kraft_white: {
        name: "Крафт пакет (белый)",
        sizes: {
            "220x250x120": [{max: 499, p: 190}, {max: 1999, p: 175}, {max: Infinity, p: 165}],
            "240x280x140": [{max: 499, p: 195}, {max: 1999, p: 185}, {max: Infinity, p: 175}],
            "260x350x150": [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}],
            "320x370x200": [{max: 499, p: 225}, {max: 1999, p: 215}, {max: Infinity, p: 205}],
            "350x450x150": [{max: 499, p: 235}, {max: 1999, p: 225}, {max: Infinity, p: 215}]
        }
    }
};

// Функция расчета с учетом минимальных тиражей
function calculatePropaket(type, size, qty, frontColors, backColors) {
    if (!propaketData[type] || !propaketData[type].sizes[size]) return { cost: 0, unitPrice: 0, calcQty: qty };
    
    // Правило: для всех кроме бумажных минимальный расчетный тираж - 100 шт
    let calcQty = qty;
    if (type !== 'paper' && qty < 100) {
        calcQty = 100;
    }

    let tiers = propaketData[type].sizes[size];
    let tier = tiers.find(t => calcQty <= t.max);
    
    if (!tier) return { cost: 0, unitPrice: 0, calcQty: calcQty };
    
    let basePrice = tier.p;
    let extraColors = (frontColors - 1) + backColors; 
    let extraCost = extraColors * 45;
    
    let unitPrice = basePrice + extraCost;
    return { 
        unitPrice: unitPrice, 
        cost: unitPrice * calcQty, // Расчет итоговой суммы поставщику (распыляем, если меньше 100)
        calcQty: calcQty
    };
}
