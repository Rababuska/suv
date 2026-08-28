// ==========================================
// БАЗА ТАРИФОВ И ЛОГИКА ЭКСКЛЮЗИВ
// ==========================================

const exclusiveBagsPrices = [
    {max: 25, price: 600}, 
    {max: 50, price: 500}, 
    {max: 80, price: 450}, 
    {max: 100, price: 430}, 
    {max: Infinity, price: 370} 
];

function calculateExclusive(quantity) {
    let exType = $('#exType').val();
    let totalCost = 0;

    if (exType === 'emboss_notebook' || exType === 'emboss_sheet') {
        let priladka = 7000; 
        let udarPrice = (exType === 'emboss_notebook') ? 150 : 100; 
        let clicheCost = 0;
        
        if (!$('#clicheExists').is(':checked')) {
            let w = Number($('#clicheW').val()) || 0;
            let h = Number($('#clicheH').val()) || 0;
            let areaCm = 0;
            
            // Если размеры введены, добавляем техническое поле 10 мм к ширине и высоте
            if (w > 0 && h > 0) {
                areaCm = ((w + 10) * (h + 10)) / 100; 
            }
            
            // Обновляем текст в интерфейсе с учетом технических полей
            $('#clicheAreaOut').text(`(${areaCm.toFixed(1)} см²)`); 
            
            // Считаем стоимость клише (250 тг за кв.см)
            let calculatedClicheCost = areaCm * 250; 
            
            // Учитываем минимальную стоимость клише — 3500 тг.
            clicheCost = Math.max(3500, calculatedClicheCost);
            
        } else {
            $('#clicheAreaOut').text(`(0 см²)`);
        }
        
        totalCost = clicheCost + priladka + (udarPrice * quantity);
        
    } else if (exType === 'bags') {
        let tier = exclusiveBagsPrices.find(t => quantity <= t.max);
        let calculatedBagsCost = 0;
        
        if (tier) {
            calculatedBagsCost = tier.price * quantity;
        }
        
        // ВАЖНО: Учитываем минимальную стоимость для пакетов — 12000 тг.
        // Если расчетная сумма меньше 12000, ставим 12000.
        totalCost = Math.max(12000, calculatedBagsCost);

    } else if (exType === 'die_cutting') {
        // ДОБАВЛЕНО: Просто высечка
        let priladka = 8000;
        let udarPrice = 15;
        
        totalCost = priladka + (udarPrice * quantity);
    }

    return totalCost;
}