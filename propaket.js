// ==========================================
// БАЗА ДАННЫХ PROPAKET С ОРИЕНТАЦИЯМИ И РАЗМЕРАМИ
// ==========================================

const propaketData = {
    // 1. Полиэтиленовые белые (все вертикальные, большая сторона — высота)
    pvd_white: {
        name: "Полиэтиленовый (Белый)",
        sizes: {
            "200x240 мм (вертикальный)": { w: 200, h: 240, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 100}, {max: 499, p: 95}, {max: Infinity, p: 90}] },
            "250x350 мм (вертикальный)": { w: 250, h: 350, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 120}, {max: 499, p: 110}, {max: Infinity, p: 100}] },
            "300x400 мм (вертикальный)": { w: 300, h: 400, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 130}, {max: 499, p: 120}, {max: Infinity, p: 110}] },
            "380x530 (400x500) мм (вертикальный)": { w: 380, h: 530, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 140}, {max: 499, p: 130}, {max: Infinity, p: 120}] },
            "500x600 мм (вертикальный)": { w: 500, h: 600, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 180}, {max: 499, p: 170}, {max: Infinity, p: 160}] },
            "600x630 мм (вертикальный)": { w: 600, h: 630, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 190}, {max: 499, p: 180}, {max: Infinity, p: 170}] }
        }
    },

    // 2. Полиэтиленовые цветные/черные (все вертикальные)
    pvd_color: {
        name: "Полиэтиленовый (Цветной/Черный)",
        sizes: {
            "200x240 мм (вертикальный)": { w: 200, h: 240, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 110}, {max: 499, p: 105}, {max: 19999, p: 100}, {max: Infinity, p: 37}] },
            "250x350 мм (вертикальный)": { w: 250, h: 350, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 130}, {max: 499, p: 120}, {max: 4999, p: 110}, {max: Infinity, p: 42}] },
            "300x400 мм (вертикальный)": { w: 300, h: 400, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 140}, {max: 499, p: 130}, {max: 4999, p: 120}, {max: Infinity, p: 47}] },
            "380x530 (400x500) мм (вертикальный)": { w: 380, h: 530, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 150}, {max: 499, p: 140}, {max: 4999, p: 130}, {max: Infinity, p: 61}] },
            "500x600 мм (вертикальный)": { w: 500, h: 600, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 190}, {max: 499, p: 180}, {max: 4999, p: 170}, {max: Infinity, p: 85}] },
            "600x630 мм (вертикальный)": { w: 600, h: 630, d: 0, orient: "вертикальный", tiers: [{max: 199, p: 200}, {max: 499, p: 190}, {max: 4999, p: 180}, {max: Infinity, p: 87}] }
        }
    },

    // 3. Бумажные пакеты плотные 260 гр (Белые / Черные)
    paper: {
        name: "Бумажный плотный (Белый/Черный)",
        sizes: {
            // 12x16 только вертикальные
            "120x160x70 мм (вертикальный)": { w: 120, h: 160, d: 70, orient: "вертикальный", tiers: [{max: 59, p: 340}, {max: 191, p: 330}, {max: Infinity, p: 310}] },
            
            // 18x23, 26x32, 32x38 — вертикальные и горизонтальные
            "180x230x100 мм (вертикальный)": { w: 180, h: 230, d: 100, orient: "вертикальный", tiers: [{max: 59, p: 415}, {max: 191, p: 395}, {max: Infinity, p: 380}] },
            "230x180x100 мм (горизонтальный)": { w: 230, h: 180, d: 100, orient: "горизонтальный", tiers: [{max: 59, p: 415}, {max: 191, p: 395}, {max: Infinity, p: 380}] },
            
            "260x320x110 мм (вертикальный)": { w: 260, h: 320, d: 110, orient: "вертикальный", tiers: [{max: 59, p: 550}, {max: 191, p: 530}, {max: Infinity, p: 510}] },
            "320x260x110 мм (горизонтальный)": { w: 320, h: 260, d: 110, orient: "горизонтальный", tiers: [{max: 59, p: 550}, {max: 191, p: 530}, {max: Infinity, p: 510}] },
            
            "320x380x120 (300x400) мм (вертикальный)": { w: 320, h: 380, d: 120, orient: "вертикальный", tiers: [{max: 59, p: 685}, {max: 191, p: 670}, {max: Infinity, p: 640}] },
            "380x320x120 (400x300) мм (горизонтальный)": { w: 380, h: 320, d: 120, orient: "горизонтальный", tiers: [{max: 59, p: 685}, {max: 191, p: 670}, {max: Infinity, p: 640}] },
            
            // 36x47, 40x60, 45x55 — только горизонтальные
            "470x360x150 мм (горизонтальный)": { w: 470, h: 360, d: 150, orient: "горизонтальный", tiers: [{max: 59, p: 925}, {max: 191, p: 910}, {max: Infinity, p: 890}] },
            "550x450x150 мм (горизонтальный)": { w: 550, h: 450, d: 150, orient: "горизонтальный", tiers: [{max: 59, p: 1255}, {max: 191, p: 1180}, {max: Infinity, p: 1130}] },
            "600x400x220 мм (горизонтальный)": { w: 600, h: 400, d: 220, orient: "горизонтальный", tiers: [{max: 59, p: 1255}, {max: 191, p: 1180}, {max: Infinity, p: 1130}] }
        }
    },

    // 4. Бумажные пакеты плотные 260 гр (Цветные) — только горизонтальные
    paper_color: {
        name: "Бумажный плотный цветной (только горизонтальные)",
        sizes: {
            "150x140x70 мм (горизонтальный)": { w: 150, h: 140, d: 70, orient: "горизонтальный", tiers: [{max: 204, p: 330}, {max: 324, p: 310}, {max: 444, p: 290}, {max: Infinity, p: 270}] },
            "230x180x100 мм (горизонтальный)": { w: 230, h: 180, d: 100, orient: "горизонтальный", tiers: [{max: 204, p: 395}, {max: 324, p: 375}, {max: 444, p: 355}, {max: Infinity, p: 335}] },
            "320x260x110 мм (горизонтальный)": { w: 320, h: 260, d: 110, orient: "горизонтальный", tiers: [{max: 204, p: 530}, {max: 324, p: 510}, {max: 444, p: 490}, {max: Infinity, p: 470}] },
            "380x320x120 (400x300) мм (горизонтальный)": { w: 380, h: 320, d: 120, orient: "горизонтальный", tiers: [{max: 204, p: 670}, {max: 324, p: 650}, {max: 444, p: 630}, {max: Infinity, p: 610}] }
        }
    },

    // 5. Крафт пакет стандартный 80 гр (бурый) — вертикальные
    kraft_brown: {
        name: "Крафт пакет 80г (бурый, вертикальный)",
        sizes: {
            "220x250x120 мм (вертикальный)": { w: 220, h: 250, d: 120, orient: "вертикальный", tiers: [{max: 499, p: 170}, {max: 1999, p: 155}, {max: Infinity, p: 145}] },
            "240x280x140 мм (вертикальный)": { w: 240, h: 280, d: 140, orient: "вертикальный", tiers: [{max: 499, p: 175}, {max: 1999, p: 165}, {max: Infinity, p: 155}] },
            "260x350x150 мм (вертикальный)": { w: 260, h: 350, d: 150, orient: "вертикальный", tiers: [{max: 499, p: 180}, {max: 1999, p: 170}, {max: Infinity, p: 155}] },
            "320x370x200 мм (вертикальный)": { w: 320, h: 370, d: 200, orient: "вертикальный", tiers: [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}] },
            "350x450x150 мм (вертикальный)": { w: 350, h: 450, d: 150, orient: "вертикальный", tiers: [{max: 499, p: 205}, {max: 1999, p: 195}, {max: Infinity, p: 185}] }
        }
    },

    // 6. Крафт пакет стандартный 80 гр (белый) — вертикальные
    kraft_white: {
        name: "Крафт пакет 80г (белый, вертикальный)",
        sizes: {
            "220x250x120 мм (вертикальный)": { w: 220, h: 250, d: 120, orient: "вертикальный", tiers: [{max: 499, p: 190}, {max: 1999, p: 175}, {max: Infinity, p: 165}] },
            "240x280x140 мм (вертикальный)": { w: 240, h: 280, d: 140, orient: "вертикальный", tiers: [{max: 499, p: 195}, {max: 1999, p: 185}, {max: Infinity, p: 175}] },
            "260x350x150 мм (вертикальный)": { w: 260, h: 350, d: 150, orient: "вертикальный", tiers: [{max: 499, p: 200}, {max: 1999, p: 190}, {max: Infinity, p: 180}] },
            "320x370x200 мм (вертикальный)": { w: 320, h: 370, d: 200, orient: "вертикальный", tiers: [{max: 499, p: 225}, {max: 1999, p: 215}, {max: Infinity, p: 205}] },
            "350x450x150 мм (вертикальный)": { w: 350, h: 450, d: 150, orient: "вертикальный", tiers: [{max: 499, p: 235}, {max: 1999, p: 225}, {max: Infinity, p: 215}] }
        }
    }
};

function calculatePropaket(type, sizeKey, qty, frontColors, backColors) {
    if (!propaketData[type] || !propaketData[type].sizes[sizeKey]) return { cost: 0, unitPrice: 0, calcQty: qty, itemMeta: null };
    
    let itemMeta = propaketData[type].sizes[sizeKey];
    let isPaper = (type === 'paper' || type === 'paper_color');
    let minAllowed = isPaper ? (type === 'paper_color' ? 60 : 24) : 100;
    
    let calcQty = qty < minAllowed ? minAllowed : qty;
    let tiers = itemMeta.tiers;
    let tier = tiers.find(t => calcQty <= t.max);
    
    if (!tier) return { cost: 0, unitPrice: 0, calcQty: calcQty, itemMeta: itemMeta };
    
    let basePrice = tier.p;
    let extraColors = (frontColors - 1) + backColors; 
    let extraCost = extraColors * 45;
    
    let unitPrice = basePrice + extraCost;
    return { 
        unitPrice: unitPrice, 
        cost: unitPrice * calcQty, 
        calcQty: calcQty,
        itemMeta: itemMeta
    };
}
