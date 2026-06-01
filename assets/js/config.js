const CONFIG = {
    API_BASE_URL: 'https://api.coingecko.com/api/v3',
    UPDATE_INTERVAL: 30000,
    MAX_COINS_DISPLAY: 10,
    STORAGE_KEYS: {
        FAVORITES: 'crypto_favorites',
        SETTINGS: 'crypto_settings',
        ALERTS: 'crypto_alerts',
        NOTIFICATION_PERMISSION: 'notification_permission'
    },
    CURRENCY: {
        USD: 'usd',
        EUR: 'eur',
        AED: 'aed'
    },
    LANGUAGES: {
        AR: 'ar',
        EN: 'en'
    }
};

const LANGUAGE = {
    ar: {
        title: 'منصة ذكاء العملات الرقمية',
        search: 'ابحث عن عملة رقمية...',
        totalMarketCap: 'إجمالي القيمة السوقية',
        volume24h: 'حجم التداول (24 ساعة)',
        btcDominance: 'سيطرة البيتكوين',
        fearGreed: 'مؤشر الخوف والجشع',
        topGainers: 'أفضل المكاسب',
        topLosers: 'أكبر الخسائر',
        trending: 'العملات الرائجة',
        noData: 'لا توجد بيانات متاحة',
        error: 'حدث خطأ في تحميل البيانات',
        notificationTitle: 'تفعيل التنبيهات',
        notificationMsg: 'هل تريد تلقي تنبيهات وإشعارات سوق العملات الرقمية المهمة؟',
        yes: 'نعم، فعّل التنبيهات',
        no: 'لا، شكراً'
    },
    en: {
        title: 'Crypto Intelligence Platform',
        search: 'Search for a cryptocurrency...',
        totalMarketCap: 'Total Market Cap',
        volume24h: '24h Trading Volume',
        btcDominance: 'Bitcoin Dominance',
        fearGreed: 'Fear & Greed Index',
        topGainers: 'Top Gainers',
        topLosers: 'Top Losers',
        trending: 'Trending Coins',
        noData: 'No data available',
        error: 'Error loading data',
        notificationTitle: 'Enable Notifications',
        notificationMsg: 'Would you like to receive crypto market alerts and important notifications?',
        yes: 'Yes, Enable Notifications',
        no: 'No, Thanks'
    }
};

const DARK_MODE = {
    enabled: localStorage.getItem(CONFIG.STORAGE_KEYS.SETTINGS) 
        ? JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.SETTINGS)).darkMode 
        : true
};