class CryptoAPI {
    static async getMarketData() {
        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/global?localization=false`
            );
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('getMarketData error:', error);
            return null;
        }
    }

    static async getTopCoins(limit = 10, order = 'market_cap_desc') {
        try {
            const currency = Utils.getCurrentCurrency();
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/coins/markets?vs_currency=${currency}&order=${order}&per_page=${limit}&sparkline=true&price_change_percentage=1h%2C24h%2C7d`
            );
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('getTopCoins error:', error);
            return [];
        }
    }

    static async getCoinDetail(coinId) {
        try {
            const currency = Utils.getCurrentCurrency();
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/coins/${coinId}?localization=false&market_data=true`
            );
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('getCoinDetail error:', error);
            return null;
        }
    }

    static async searchCoins(query) {
        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/search?query=${encodeURIComponent(query)}`
            );
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('searchCoins error:', error);
            return { coins: [] };
        }
    }

    static async getTopGainers() {
        try {
            const coins = await this.getTopCoins(10, 'market_cap_desc');
            return coins
                .sort((a, b) => (b.price_change_percentage_24h || 0) - (a.price_change_percentage_24h || 0))
                .slice(0, 4);
        } catch (error) {
            console.error('getTopGainers error:', error);
            return [];
        }
    }

    static async getTopLosers() {
        try {
            const coins = await this.getTopCoins(10, 'market_cap_desc');
            return coins
                .sort((a, b) => (a.price_change_percentage_24h || 0) - (b.price_change_percentage_24h || 0))
                .slice(0, 4);
        } catch (error) {
            console.error('getTopLosers error:', error);
            return [];
        }
    }

    static async getTrendingCoins() {
        try {
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/search/trending`
            );
            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.coins.slice(0, 4).map(item => item.item);
        } catch (error) {
            console.error('getTrendingCoins error:', error);
            return [];
        }
    }

    static async getFearGreedIndex() {
        try {
            const response = await fetch('https://api.alternative.me/fng/');
            if (!response.ok) throw new Error('API Error');
            const data = await response.json();
            return data.data[0];
        } catch (error) {
            console.error('getFearGreedIndex error:', error);
            return { value: 50, value_classification: 'Neutral' };
        }
    }

    static async getCoinChart(coinId, days = 7) {
        try {
            const currency = Utils.getCurrentCurrency();
            const response = await fetch(
                `${CONFIG.API_BASE_URL}/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`
            );
            if (!response.ok) throw new Error('API Error');
            return await response.json();
        } catch (error) {
            console.error('getCoinChart error:', error);
            return { prices: [] };
        }
    }
}