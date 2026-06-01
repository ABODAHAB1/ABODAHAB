class Utils {
    static formatNumber(num) {
        if (num >= 1e9) {
            return (num / 1e9).toFixed(2) + 'B';
        }
        if (num >= 1e6) {
            return (num / 1e6).toFixed(2) + 'M';
        }
        if (num >= 1e3) {
            return (num / 1e3).toFixed(2) + 'K';
        }
        return num.toFixed(2);
    }

    static formatCurrency(num, currency = '$') {
        return currency + ' ' + this.formatNumber(num);
    }

    static formatPercent(num) {
        const sign = num >= 0 ? '+' : '';
        return sign + num.toFixed(2) + '%';
    }

    static formatDate(date) {
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        };
        return new Date(date).toLocaleDateString('ar-SA', options);
    }

    static getChangeClass(change) {
        return change >= 0 ? 'change-positive' : 'change-negative';
    }

    static getChangeIcon(change) {
        return change >= 0 ? '📈' : '📉';
    }

    static debounce(func, delay) {
        let timeout;
        return function (...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    static throttle(func, limit) {
        let inThrottle;
        return function (...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }

    static getLocalStorage(key) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (error) {
            console.error('LocalStorage error:', error);
            return null;
        }
    }

    static setLocalStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error('LocalStorage error:', error);
        }
    }

    static removeLocalStorage(key) {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error('LocalStorage error:', error);
        }
    }

    static getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    static sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    static generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    static getCurrentLanguage() {
        return localStorage.getItem('language') || CONFIG.LANGUAGES.AR;
    }

    static getCurrentCurrency() {
        const settings = Utils.getLocalStorage(CONFIG.STORAGE_KEYS.SETTINGS);
        return settings?.currency || CONFIG.CURRENCY.USD;
    }

    static getCurrentDir() {
        const lang = this.getCurrentLanguage();
        return lang === CONFIG.LANGUAGES.AR ? 'rtl' : 'ltr';
    }

    static setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === CONFIG.LANGUAGES.AR ? 'rtl' : 'ltr';
    }
}