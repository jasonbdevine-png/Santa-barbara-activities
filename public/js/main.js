// ===================================
// Santa Barbara Activities - Main JS
// ===================================

// State management
let currentPriceFilter = 'all';
let currentCategoryFilter = 'all';

// DOM Elements
const activitiesGrid = document.getElementById('activities-grid');
const noResults = document.getElementById('no-results');
const priceFilterButtons = document.querySelectorAll('#price-filter .filter-btn');
const categoryFilterButtons = document.querySelectorAll('#category-filter .filter-btn');
const categoryCards = document.querySelectorAll('.category-card');

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeFilters();
    initializeNavbar();
    initializeCategoryCards();
    renderActivities();
    updateStats();
    animateStatsOnScroll();
});

// ===================================
// Filter Functions
// ===================================

function initializeFilters() {
    // Price filter buttons
    priceFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            priceFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPriceFilter = btn.dataset.filter;
            renderActivities();
        });
    });

    // Category filter buttons
    categoryFilterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryFilterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategoryFilter = btn.dataset.filter;
            renderActivities();
        });
    });
}

function initializeCategoryCards() {
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            
            // Update category filter buttons
            categoryFilterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === category) {
                    btn.classList.add('active');
                }
            });
            
            currentCategoryFilter = category;
            renderActivities();
            
            // Scroll to activities section
            document.getElementById('activities').scrollIntoView({ behavior: 'smooth' });
        });
    });
}

function filterActivities() {
    let filtered = [...activities];

    // Apply price filter
    if (currentPriceFilter === 'free') {
        filtered = filtered.filter(a => a.priceType === 'free');
    } else if (currentPriceFilter === 'lowcost') {
        filtered = filtered.filter(a => a.priceType === 'lowcost');
    }

    // Apply category filter
    if (currentCategoryFilter !== 'all') {
        filtered = filtered.filter(a => a.category === currentCategoryFilter);
    }

    // Sort: Free activities first, then by price ascending
    filtered.sort((a, b) => {
        if (a.priceType === 'free' && b.priceType !== 'free') return -1;
        if (a.priceType !== 'free' && b.priceType === 'free') return 1;
        return a.price - b.price;
    });

    return filtered;
}

// ===================================
// Render Functions
// ===================================

function renderActivities() {
    const filtered = filterActivities();
    
    if (filtered.length === 0) {
        activitiesGrid.innerHTML = '';
        noResults.style.display = 'block';
        return;
    }

    noResults.style.display = 'none';
    
    activitiesGrid.innerHTML = filtered.map((activity, index) => `
        <article class="activity-card" style="animation: fadeInUp 0.5s ease ${index * 0.1}s backwards;">
            <div class="card-image">
                <img src="${activity.image}" alt="${activity.name}" loading="lazy">
                <span class="price-badge ${activity.priceType}">
                    ${activity.price === 0 ? 'Free' : '$' + activity.price}
                </span>
                <span class="category-badge">
                    <i class="${categoryIcons[activity.category]}"></i>
                    ${categoryNames[activity.category]}
                </span>
            </div>
            <div class="card-content">
                <h3>${activity.name}</h3>
                <p>${activity.description}</p>
                <div class="card-meta">
                    <span class="meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        ${activity.location}
                    </span>
                    <span class="meta-item">
                        <i class="fas fa-clock"></i>
                        ${activity.duration}
                    </span>
                </div>
            </div>
        </article>
    `).join('');
}

// ===================================
// Stats Functions
// ===================================

function updateStats() {
    const freeCount = activities.filter(a => a.priceType === 'free').length;
    const lowcostCount = activities.filter(a => a.priceType === 'lowcost').length;
    const totalCount = activities.length;

    document.getElementById('free-count').textContent = freeCount;
    document.getElementById('lowcost-count').textContent = lowcostCount;
    document.getElementById('total-count').textContent = totalCount;
}

function animateStatsOnScroll() {
    const statsSection = document.querySelector('.stats-section');
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                statNumbers.forEach(stat => {
                    const finalValue = parseInt(stat.textContent);
                    animateValue(stat, 0, finalValue, 1500);
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
}

function animateValue(element, start, end, duration) {
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        element.textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// ===================================
// Navbar Functions
// ===================================

function initializeNavbar() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
