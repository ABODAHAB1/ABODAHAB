class HomePage {
    constructor() {
        this.init();
    }

    async init() {
        NotificationManager.init();
        NotificationManager.setupModalListeners();
        this.setupSearchListener();
        this.loadMarketData();
        this.setupAutoRefresh();
    }

    async loadMarketData() {
        try {
            const marketData = await CryptoAPI.getMarketData();
            if (marketData) {
                UI.updateMarketData(marketData);
            }

            const fearGreed = await CryptoAPI.getFearGreedIndex();
            UI.updateFearGreedIndex(fearGreed);

            await this.loadCoinsData();
        } catch (error) {
            console.error('Error loading market data:', error);
        }
    }

    async loadCoinsData() {
        UI.showLoading('gainersGrid');
        const gainers = await CryptoAPI.getTopGainers();
        UI.renderCoins('gainersGrid', gainers);

        UI.showLoading('losersGrid');
        const losers = await CryptoAPI.getTopLosers();
        UI.renderCoins('losersGrid', losers);

        UI.showLoading('trendingGrid');
        const trending = await CryptoAPI.getTrendingCoins();
        UI.renderCoins('trendingGrid', trending);
    }

    setupSearchListener() {
        const searchInput = document.getElementById('searchInput');
        const searchBtn = document.getElementById('searchBtn');

        if (searchBtn) {
            searchBtn.addEventListener('click', () => this.handleSearch());
        }

        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleSearch();
            });
        }
    }

    async handleSearch() {
        const searchInput = document.getElementById('searchInput');
        const query = searchInput.value.trim();

        if (!query) return;

        UI.showLoading('trendingGrid');
        const results = await CryptoAPI.searchCoins(query);

        if (results.coins && results.coins.length > 0) {
            const coinIds = results.coins.slice(0, 4).map(coin => coin.id);
            const coins = await Promise.all(
                coinIds.map(id => CryptoAPI.getCoinDetail(id))
            );
            UI.renderCoins('trendingGrid', coins.filter(c => c));
        } else {
            UI.showError('trendingGrid', 'لم يتم العثور على نتائج');
        }
    }

    setupAutoRefresh() {
        setInterval(() => {
            this.loadMarketData();
        }, CONFIG.UPDATE_INTERVAL);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new HomePage();
});