// ==========================================
// БАЗА ТАРИФОВ И ЛОГИКА КВАНТ
// ==========================================

const kvantPrices = {
    round_metal: [ 
        {max: 10, type: 'total', price: 10000}, 
        {max: 50, type: 'piece', price: 800},  
        {max: 100, type: 'piece', price: 700},
        {max: 300, type: 'piece', price: 600},
        {max: Infinity, type: 'piece', price: 500}
    ],
    pens: [ 
        {max: 50, type: 'total', price: 10000}, 
        {max: 100, type: 'piece', price: 200},
        {max: 300, type: 'piece', price: 150}, 
        {max: 1000, type: 'piece', price: 120},
        {max: Infinity, type: 'piece', price: 100}
    ],
    small_items: [ 
        {max: 50, type: 'total', price: 10000}, 
        {max: 100, type: 'piece', price: 250},
        {max: 300, type: 'piece', price: 200},
        {max: 1000, type: 'piece', price: 150},
        {max: Infinity, type: 'piece', price: 120}
    ],
    large_items: [ 
        {max: 10, type: 'total', price: 10000}, 
        {max: 50, type: 'piece', price: 500},  
        {max: 100, type: 'piece', price: 450},
        {max: 300, type: 'piece', price: 400},
        {max: 1000, type: 'piece', price: 350},
        {max: Infinity, type: 'piece', price: 300}
    ]
};

function calculateKvant(quantity) {
    let kType = $('#kvantType').val();
    let tiers = kvantPrices[kType];
    let totalCost = 0;

    if (tiers) {
        let tier = tiers.find(t => quantity <= t.max);
        if (tier) {
            totalCost = tier.type === 'total' ? tier.price : tier.price * quantity;
            // Защита от провала ниже минимальной цены
            if (tiers[0].type === 'total' && totalCost < tiers[0].price) {
                totalCost = tiers[0].price;
            }
        }
    }
    return totalCost;
}