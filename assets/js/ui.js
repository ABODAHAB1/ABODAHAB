class UI {
    static createCoinCard(coin) {
        const change = coin.price_change_percentage_24h || 0;
        const changeClass = Utils.getChangeClass(change);
        const isFavorite = this.isFavorite(coin.id);

        return `
            <div class="coin-card" data-coin-id="${coin.id}">
                <div class="coin-header">
                    <div class="coin-info">
                        <img src="${coin.image}" alt="${coin.name}" class="coin-image">
                        <div>
                            <div class="coin-name">${coin.name}</div>
                            <div class="coin-symbol">${coin.symbol}</div>
                        </div>
                    </div>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-coin-id="${coin.id}">
                        ${isFavorite ? '⭐' : '☆'}
                    </button>
                </div>
                <div class="coin-price">${Utils.formatCurrency(coin.current_price)}</div>
                <div class="coin-change">
                    <span class="${changeClass}">${Utils.getChangeIcon(change)} ${Utils.formatPercent(change)}</span>
                </div>
            </div>
        `;
    }

    static renderCoins(containerId, coins) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (coins.length === 0) {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--muted-text);">${LANGUAGE[Utils.getCurrentLanguage()].noData}</p>`;
            return;
        }

        container.innerHTML = coins.map(coin => this.createCoinCard(coin)).join('');
        this.attachFavoriteListeners();
    }

    static updateMarketData(data) {
        const lang = Utils.getCurrentLanguage();
        const currency = Utils.getCurrentCurrency();

        const marketCap = data.data?.total_market_cap?.[currency] || 0;
        const volume24h = data.data?.total_volume?.[currency] || 0;
        const marketCapChange = data.data?.market_cap_change_percentage_24h_usd || 0;
        const btcDominance = data.data?.btc_dominance || 0;

        document.getElementById('totalMarketCap').textContent = Utils.formatCurrency(marketCap, '$');
        document.getElementById('marketCapChange').textContent = Utils.formatPercent(marketCapChange);
        document.getElementById('marketCapChange').className = 'card-change ' + Utils.getChangeClass(marketCapChange);

        document.getElementById('volume24h').textContent = Utils.formatCurrency(volume24h, '$');
        document.getElementById('volumeChange').textContent = Utils.formatPercent(marketCapChange);
        document.getElementById('volumeChange').className = 'card-change ' + Utils.getChangeClass(marketCapChange);

        document.getElementById('btcDominance').textContent = btcDominance.toFixed(2) + '%';
    }

    static updateFearGreedIndex(data) {
        const value = parseInt(data.value);
        const fill = document.getElementById('fearGreedFill');
        const valueEl = document.getElementById('fearGreedValue');

        if (fill) fill.style.width = value + '%';
        if (valueEl) valueEl.textContent = `${value} - ${data.value_classification}`;
    }

    static showLoading(containerId) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `
                <div class="loading-skeleton"></div>
                <div class="loading-skeleton"></div>
                <div class="loading-skeleton"></div>
                <div class="loading-skeleton"></div>
            `;
        }
    }

    static showError(containerId, message) {
        const container = document.getElementById(containerId);
        if (container) {
            container.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: var(--danger-color);">${message}</p>`;
        }
    }

    static isFavorite(coinId) {
        const favorites = Utils.getLocalStorage(CONFIG.STORAGE_KEYS.FAVORITES) || [];
        return favorites.includes(coinId);
    }

    static toggleFavorite(coinId) {
        let favorites = Utils.getLocalStorage(CONFIG.STORAGE_KEYS.FAVORITES) || [];
        if (favorites.includes(coinId)) {
            favorites = favorites.filter(id => id !== coinId);
        } else {
            favorites.push(coinId);
        }
        Utils.setLocalStorage(CONFIG.STORAGE_KEYS.FAVORITES, favorites);
    }

    static attachFavoriteListeners() {
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const coinId = btn.dataset.coinId;
                this.toggleFavorite(coinId);
                btn.classList.toggle('active');
                btn.textContent = btn.classList.contains('active') ? '⭐' : '☆';
            });
        });
    }

    static showNotification(title, options = {}) {
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification(title, {
                icon: '₿',
                badge: '₿',
                ...options
            });
        }
    }
}