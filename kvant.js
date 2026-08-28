// ==========================================
// БАЗА ТАРИФОВ И ЛОГИКА КВАНТ (Гравировка, с НДС)
// ==========================================

const kvantPrices = {
    // 1. Кружки, термосы, бутылки, термокружки (округлые поверхности)
    circular_30: [
        { max: 1, price: 5000 },      // Пробник
        { max: 10, price: 1000 },
        { max: 25, price: 750 },
        { max: 50, price: 700 },
        { max: 100, price: 650 },
        { max: 199, price: 550 },
        { max: 299, price: 500 },
        { max: 499, price: 450 },
        { max: 999, price: 425 },
        { max: 1999, price: 400 },
        { max: Infinity, price: 350 }
    ],
    circular_100: [
        { max: 1, price: 5000 },      // Пробник
        { max: 10, price: 1500 },
        { max: 25, price: 1000 },
        { max: 50, price: 950 },
        { max: 100, price: 900 },
        { max: 199, price: 850 },
        { max: 299, price: 800 },
        { max: 499, price: 750 },
        { max: 999, price: 725 },
        { max: 1999, price: 700 },
        { max: Infinity, price: 600 }
    ],

    // 2. Ручки
    pens_metal: [
        { max: 1, price: 2000 },      // Пробник
        { max: 10, price: 500 },
        { max: 25, price: 400 },
        { max: 50, price: 300 },
        { max: 100, price: 250 },
        { max: 199, price: 200 },
        { max: 299, price: 150 },
        { max: 499, price: 140 },
        { max: 999, price: 110 },
        { max: 1999, price: 90 },
        { max: Infinity, price: 70 }
    ],
    pens_plastic: [
        { max: 1, price: 2500 },      // Пробник
        { max: 10, price: 600 },
        { max: 25, price: 500 },
        { max: 50, price: 400 },
        { max: 100, price: 350 },
        { max: 199, price: 300 },
        { max: 299, price: 250 },
        { max: 499, price: 200 },
        { max: 999, price: 150 },
        { max: 1999, price: 120 },
        { max: Infinity, price: 90 }
    ],
    pens_glossy: [
        { max: 1, price: 3000 },      // Пробник
        { max: 10, price: 700 },
        { max: 25, price: 600 },
        { max: 50, price: 500 },
        { max: 100, price: 450 },
        { max: 199, price: 400 },
        { max: 299, price: 350 },
        { max: 499, price: 300 },
        { max: 999, price: 250 },
        { max: 1999, price: 200 },
        { max: Infinity, price: 150 }
    ],

    // 3. Сувенирные изделия (Повербанки)
    powerbanks: [
        { max: 1, price: 3000 },      // Пробник
        { max: 10, price: 1000 },
        { max: 25, price: 850 },
        { max: 50, price: 800 },
        { max: 100, price: 750 },
        { max: 199, price: 600 },
        { max: 299, price: 550 },
        { max: 499, price: 500 },
        { max: 999, price: 450 },
        { max: 1999, price: 400 },
        { max: Infinity, price: 350 }
    ],

    // 4. Флешки
    flash_drives: [
        { max: 1, price: 2500 },      // Пробник
        { max: 10, price: 700 },
        { max: 25, price: 500 },
        { max: 50, price: 400 },
        { max: 100, price: 350 },
        { max: 199, price: 300 },
        { max: 299, price: 250 },
        { max: 499, price: 200 },
        { max: 999, price: 150 },
        { max: 1999, price: 130 },
        { max: Infinity, price: 100 }
    ],

    // 5. Брелоки, зажигалки, визитницы
    keychains: [
        { max: 1, price: 2000 },      // Пробник
        { max: 10, price: 600 },
        { max: 25, price: 450 },
        { max: 50, price: 350 },
        { max: 100, price: 300 },
        { max: 199, price: 250 },
        { max: 299, price: 200 },
        { max: 499, price: 180 },
        { max: 999, price: 150 },
        { max: 1999, price: 120 },
        { max: Infinity, price: 100 }
    ],

    // 6. Рюкзаки и сумки
    backpacks_plate: [
        { max: 1, price: 3000 },      // Пробник
        { max: 10, price: 1000 },
        { max: 25, price: 850 },
        { max: 50, price: 700 },
        { max: 100, price: 600 },
        { max: 199, price: 500 },
        { max: 299, price: 450 },
        { max: 499, price: 400 },
        { max: 999, price: 350 },
        { max: 1999, price: 300 },
        { max: Infinity, price: 250 }
    ],
    backpacks_body: [
        { max: 1, price: 4000 },      // Пробник
        { max: 10, price: 1500 },
        { max: 25, price: 1200 },
        { max: 50, price: 1000 },
        { max: 100, price: 850 },
        { max: 199, price: 750 },
        { max: 299, price: 700 },
        { max: 499, price: 650 },
        { max: 999, price: 600 },
        { max: 1999, price: 550 },
        { max: Infinity, price: 500 }
    ],

    // 7. Награды (стекло, акрил, плакетки, медали)
    awards: [
        { max: 1, price: 5000 },      // Пробник
        { max: 50, price: 3000 },
        { max: 100, price: 2500 },
        { max: 199, price: 2000 },
        { max: 299, price: 1500 },
        { max: 499, price: 1200 },
        { max: 999, price: 1000 },
        { max: 1999, price: 800 },
        { max: Infinity, price: 600 }
    ]
};

function calculateKvant(quantity) {
    let type = $('#kvantType').val();
    let tiers = kvantPrices[type];

    if (!tiers) return 0;

    let tier = tiers.find(t => quantity <= t.max);
    if (!tier) return 0;

    // Для 1 шт берется фикс пробника, для тиража > 1 перемножается на тираж
    if (quantity === 1) {
        return tier.price;
    }

    return tier.price * quantity;
}
