const gifts = [
    { id: '#0001', name: 'Desk Calendar', price: 25, icon: 'fa-calendar-day', color: '#6c91f2' },
    { id: '#0002', name: 'Victory Medal', price: 50, icon: 'fa-medal', color: '#ffd700' },
    { id: '#0003', name: 'Vice Cream', price: 35, icon: 'fa-ice-cream', color: '#ff6b9d' },
    { id: '#0004', name: 'Joyful Bundle', price: 75, icon: 'fa-gift', color: '#2fc370' },
    { id: '#0005', name: 'Snoop Dogg', price: 100, icon: 'fa-dog', color: '#8b5cf6' },
    { id: '#0006', name: 'Jolly Chimp', price: 45, icon: 'fa-monkey', color: '#f59e0b' },
    { id: '#0007', name: 'Mad Pumpkin', price: 40, icon: 'fa-face-laugh-squint', color: '#f97316' },
    { id: '#0008', name: 'Faith Amulet', price: 120, icon: 'fa-gem', color: '#06b6d4' },
    { id: '#0009', name: 'Ginger Cookie', price: 30, icon: 'fa-cookie-bite', color: '#d97706' },
    { id: '#0010', name: 'Top Hat', price: 55, icon: 'fa-hat-cowboy', color: '#1f2937' },
    { id: '#0011', name: 'Jester Hat', price: 60, icon: 'fa-masks-theater', color: '#ec4899' },
    { id: '#0012', name: 'Xmas Stocking', price: 25, icon: 'fa-sock', color: '#dc2626' }
];

let cart = JSON.parse(localStorage.getItem('mrkt_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    renderGrid();
    updateCartBadge();
    setTimeout(showMain, 2000);
}

function showMain() {
    const preloader = document.getElementById('preloader');
    const spinner = preloader.querySelector('.preloader-spinner');
    preloader.classList.add('hidden');
    spinner.style.opacity = '1';
    setTimeout(() => {
        document.getElementById('app').classList.add('visible');
        preloader.style.display = 'none';
    }, 300);
}

function renderGrid() {
    const grid = document.getElementById('marketGrid');
    grid.innerHTML = gifts.map(gift => `
        <div class="gift-card" data-id="${gift.id}">
            <div class="gift-img">
                <i class="fa-solid ${gift.icon}"></i>
            </div>
            <div class="gift-info">
                <div class="gift-name">${gift.name}</div>
                <div class="gift-id">${gift.id}</div>
                <div class="gift-footer">
                    <div class="gift-price">${gift.price} <span>TON</span></div>
                    <button class="buy-btn" onclick="addToCart('${gift.id}')">
                        <i class="fa-solid fa-plus"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function addToCart(id) {
    const gift = gifts.find(g => g.id === id);
    if (gift && !cart.includes(id)) {
        cart.push(id);
        localStorage.setItem('mrkt_cart', JSON.stringify(cart));
        updateCartBadge();
        showToast();
        updateButton(id);
    }
}

function updateButton(id) {
    const btn = document.querySelector(`.gift-card[data-id="${id}"] .buy-btn`);
    if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.style.background = 'var(--success)';
    }
}

function updateCartBadge() {
    const badge = document.querySelector('.cart-btn .badge');
    if (badge) {
        badge.textContent = cart.length;
        badge.classList.toggle('show', cart.length > 0);
    }
}

function showToast() {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 2000);
}

// Tab Navigation
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', function() {
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Bottom Navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        this.classList.add('active');
    });
});

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        if (!this.classList.contains('highlight')) {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        }
    });
});
