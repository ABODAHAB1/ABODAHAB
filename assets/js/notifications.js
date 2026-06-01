class NotificationManager {
    static init() {
        this.checkNotificationPermission();
        this.setupMenuToggle();
    }

    static checkNotificationPermission() {
        const modal = document.getElementById('notificationModal');
        const hasAsked = localStorage.getItem(CONFIG.STORAGE_KEYS.NOTIFICATION_PERMISSION);

        if (!hasAsked && 'Notification' in window) {
            setTimeout(() => {
                modal.classList.add('active');
            }, 2000);
        }
    }

    static setupMenuToggle() {
        const toggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (toggle && navLinks) {
            toggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });
        }
    }

    static requestNotificationPermission() {
        if ('Notification' in window) {
            if (Notification.permission === 'default') {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        this.showSuccessNotification();
                    }
                });
            }
        }
        localStorage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATION_PERMISSION, 'true');
    }

    static showSuccessNotification() {
        UI.showNotification('التنبيهات مفعّلة', {
            body: 'سوف تتلقى إشعارات حول أسعار العملات الرقمية',
            tag: 'notification-enabled'
        });
    }

    static setupModalListeners() {
        const modal = document.getElementById('notificationModal');
        const yesBtn = document.getElementById('notificationYes');
        const noBtn = document.getElementById('notificationNo');

        if (yesBtn) {
            yesBtn.addEventListener('click', () => {
                this.requestNotificationPermission();
                modal.classList.remove('active');
                this.showSuccessNotification();
            });
        }

        if (noBtn) {
            noBtn.addEventListener('click', () => {
                modal.classList.remove('active');
                localStorage.setItem(CONFIG.STORAGE_KEYS.NOTIFICATION_PERMISSION, 'true');
            });
        }
    }

    static createAlert(alertData) {
        const alerts = Utils.getLocalStorage(CONFIG.STORAGE_KEYS.ALERTS) || [];
        alerts.push({
            id: Utils.generateId(),
            timestamp: new Date().toISOString(),
            ...alertData
        });
        Utils.setLocalStorage(CONFIG.STORAGE_KEYS.ALERTS, alerts);
    }

    static getAlerts() {
        return Utils.getLocalStorage(CONFIG.STORAGE_KEYS.ALERTS) || [];
    }

    static deleteAlert(alertId) {
        const alerts = this.getAlerts();
        const filtered = alerts.filter(alert => alert.id !== alertId);
        Utils.setLocalStorage(CONFIG.STORAGE_KEYS.ALERTS, filtered);
    }

    static checkAlerts() {
        const alerts = this.getAlerts();
        alerts.forEach(alert => {
        });
    }
}