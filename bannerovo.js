// ==============================================================
// КАТАЛОГ ПРОДУКЦИИ БАННЕРОВО ДЛЯ ВКЛАДКИ "ПРОДУКЦИЯ / ПАКЕТЫ"
// ==============================================================

const bannerovoCatalog = [
    // --- 1. СОЛЬВЕНТНАЯ ПЕЧАТЬ (квадратура, с НДС) ---
    {
        id: 'bn_solv_340',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннер 340г Китай (сольвент)',
        keywords: 'баннер 340 китай сольвент наружная баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 950,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_440',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннер 440г ламинированный (сольвент)',
        keywords: 'баннер 440 ламинированный сольвент наружная баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1250,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_510',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннер 510г литой (сольвент)',
        keywords: 'баннер 510 литой прочный сольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1850,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_mesh',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннерная сетка Mesh (сольвент)',
        keywords: 'сетка баннерная mesh сольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1750,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_film',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Самоклеящаяся пленка (сольвент)',
        keywords: 'пленка самоклейка оракал сольвент наружка баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1400,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_perfo',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Перфорированная пленка One Way Vision (сольвент)',
        keywords: 'перфопленка перфорированная окна витрины сольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2300,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_solv_blueback',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Бумага Blueback (сольвент)',
        keywords: 'бумага блюбэк blueback биллборды сольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 850,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },

    // --- 2. ЭКОСОЛЬВЕНТНАЯ ПЕЧАТЬ (интерьерная 1440 dpi, с НДС) ---
    {
        id: 'bn_eco_440',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннер интерьерный 440г (экосольвент)',
        keywords: 'баннер интерьерный 440 экосольвент 1440 dpi баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1500,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_510',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Баннер литой интерьерный 510г (экосольвент)',
        keywords: 'баннер интерьерный литой 510 экосольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2200,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_film',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Пленка самоклеящаяся глянец/мат (экосольвент)',
        keywords: 'пленка интерьерная оракал наклейки глянцевая матовая экосольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1650,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_perfo',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Перфорированная пленка интерьерная (экосольвент)',
        keywords: 'перфорированная пленка интерьерная витрины экосольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2600,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_film_lam',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Пленка с защитной ламинацией (экосольвент)',
        keywords: 'пленка с ламинацией напольная ламинат экосольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2450,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_backlit',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Бэклит (Backlit) светорассеивающий (экосольвент)',
        keywords: 'бэклит световой короб лайтбокс backlit экосольвент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2900,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },
    {
        id: 'bn_eco_canvas',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Холст синтетический (экосольвент)',
        keywords: 'холст синтетический экосольвент картина баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 3400,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },

    // --- 3. ПИГМЕНТНАЯ ПЕЧАТЬ (с НДС) ---
    {
        id: 'bn_pigm_photo',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Фотобумага 180-230г (пигмент)',
        keywords: 'фотобумага плакат постер фото пигментная пигмент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 2900,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_pigm_canvas',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Холст натуральный 380г (пигмент)',
        keywords: 'холст натуральный 380 картина музейный пигмент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 4800,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_pigm_backlit',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Бэклит светорассеивающий (пигмент)',
        keywords: 'бэклит пигмент световой короб плафон баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 3600,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_pigm_watman',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Чертежи / Ватман (пигмент)',
        keywords: 'чертеж ватман схемы проекты пигмент баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 1600,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },

    // --- 4. УФ-ПЕЧАТЬ (квадратура, с НДС) ---
    {
        id: 'bn_uv_pvc3',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: ПВХ пластик 3 мм',
        keywords: 'уф печать пвх пластик 3мм 3 мм табличка баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 4800,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_uv_pvc5',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: ПВХ пластик 5 мм',
        keywords: 'уф печать пвх пластик 5мм 5 мм вывеска баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 6200,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_uv_acryl',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: Акрил / Оргстекло',
        keywords: 'уф печать акрил оргстекло прозрачный глянец баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 7800,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_uv_composite',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: Алюмокомпозит',
        keywords: 'уф печать композит алюмокомпозит фасад таблички баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 7200,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_uv_foam',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: Пенокартон',
        keywords: 'уф печать пенокартон легкий стенд баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 5600,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 1000,
        deliveryCost: 3000
    },
    {
        id: 'bn_uv_roll',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'УФ-печать: Рулонная (пленка / баннер / бэклит)',
        keywords: 'уф печать рулонная пленка баннер бэклит баннерово bannerovo',
        isSquareArea: true,
        pricePerM2: 3500,
        defaultQty: 1,
        defaultW: 1000,
        defaultH: 2000,
        deliveryCost: 3000
    },

    // --- 5. МОБИЛЬНЫЕ КОНСТРУКЦИИ (чистый прайс, с НДС) ---
    {
        id: 'bn_cn_spider',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'X-баннер "Паук" (конструкция)',
        keywords: 'паук х-баннер x-banner х баннер паучок 60х160 80х180 120х200 баннерово bannerovo конструкция',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "600x1600 мм (60х160 см)": { w: 600, h: 1600, price: 2800 },
            "800x1800 мм (80х180 см)": { w: 800, h: 1800, price: 3400 },
            "1200x2000 мм (120х200 см)": { w: 1200, h: 2000, price: 5000 }
        }
    },
    {
        id: 'bn_cn_rollup',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Roll-Up стандарт (конструкция)',
        keywords: 'роллап ролл ап rollup roll up 80х200 85х200 100х200 120х200 150х200 баннерово bannerovo конструкция стенд',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "800x2000 мм (80х200 см)": { w: 800, h: 2000, price: 5800 },
            "850x2000 мм (85х200 см)": { w: 850, h: 2000, price: 6200 },
            "1000x2000 мм (100х200 см)": { w: 1000, h: 2000, price: 7400 },
            "1200x2000 мм (120х200 см)": { w: 1200, h: 2000, price: 8900 },
            "1500x2000 мм (150х200 см)": { w: 1500, h: 2000, price: 11500 }
        }
    },
    {
        id: 'bn_cn_rollup_lux',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Roll-Up Капля Люкс (конструкция)',
        keywords: 'роллап капля люкс каплевидный premium rollup 85х200 баннерово bannerovo',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "850x2000 мм (85х200 см)": { w: 850, h: 2000, price: 13000 }
        }
    },
    {
        id: 'bn_cn_promostol',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Промостол (конструкция)',
        keywords: 'промостол промостойка пластиковый с фризом дегустация алюминиевый ресепшн баннерово bannerovo конструкция',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "Пластиковый с фризом": { w: 800, h: 1900, price: 23000 },
            "Алюминиевый с полкой": { w: 850, h: 900, price: 29000 }
        }
    },
    {
        id: 'bn_cn_presswall',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Пресс-волл Joker каркас (конструкция)',
        keywords: 'пресс волл прессволл press wall joker джокер 2х2 2х3 3х3 каркас баннерово bannerovo',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "2000x2000 мм (2х2 м)": { w: 2000, h: 2000, price: 19000 },
            "3000x2000 мм (3х2 м)": { w: 3000, h: 2000, price: 23000 },
            "3000x3000 мм (3х3 м)": { w: 3000, h: 3000, price: 27000 }
        }
    },
    {
        id: 'bn_cn_shtender',
        supplier: 'bannerovo',
        supplierName: 'Баннерово',
        name: 'Штендер двухсторонний (каркас)',
        keywords: 'штендер арочный прямоугольный раскладушка баннерово bannerovo конструкция',
        isConstruction: true,
        deliveryCost: 3000,
        defaultQty: 1,
        sizes: {
            "600x1200 мм (арочный / прямоуг.)": { w: 600, h: 1200, price: 13000 }
        }
    }
];
