import { Hono } from 'hono'

const app = new Hono()

// HTML template for the Santa Barbara Activities page
const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Santa Barbara Activities | Free & Low-Cost Things to Do</title>
    <meta name="description" content="Discover the best free and affordable activities in Santa Barbara. Explore beaches, parks, hiking trails, and local attractions without breaking the bank.">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css">
    <link rel="stylesheet" href="/css/style.css">
</head>
<body>
    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-overlay"></div>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <i class="fas fa-sun"></i>
                    <span>SB Activities</span>
                </div>
                <ul class="nav-links">
                    <li><a href="#activities">Activities</a></li>
                    <li><a href="#categories">Categories</a></li>
                    <li><a href="#about">About</a></li>
                </ul>
            </div>
        </nav>
        <div class="hero-content">
            <h1>Discover Santa Barbara</h1>
            <p class="tagline">Free & Low-Cost Adventures Await</p>
            <p class="hero-description">Explore the American Riviera without breaking the bank. From stunning beaches to scenic hiking trails, Santa Barbara offers endless affordable experiences.</p>
            <a href="#activities" class="cta-button">
                <i class="fas fa-compass"></i>
                Explore Activities
            </a>
        </div>
        <div class="scroll-indicator">
            <i class="fas fa-chevron-down"></i>
        </div>
    </header>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stat-card">
                <i class="fas fa-gift"></i>
                <span class="stat-number" id="free-count">0</span>
                <span class="stat-label">Free Activities</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-dollar-sign"></i>
                <span class="stat-number" id="lowcost-count">0</span>
                <span class="stat-label">Low-Cost ($1-$10)</span>
            </div>
            <div class="stat-card">
                <i class="fas fa-map-marker-alt"></i>
                <span class="stat-number" id="total-count">0</span>
                <span class="stat-label">Total Experiences</span>
            </div>
        </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section" id="activities">
        <div class="container">
            <h2 class="section-title">
                <span class="title-decoration"></span>
                Find Your Perfect Activity
                <span class="title-decoration"></span>
            </h2>
            <div class="filter-controls">
                <div class="filter-group">
                    <label>Price Range</label>
                    <div class="filter-buttons" id="price-filter">
                        <button class="filter-btn active" data-filter="all">
                            <i class="fas fa-layer-group"></i> All
                        </button>
                        <button class="filter-btn" data-filter="free">
                            <i class="fas fa-gift"></i> Free
                        </button>
                        <button class="filter-btn" data-filter="lowcost">
                            <i class="fas fa-coins"></i> $1-$10
                        </button>
                    </div>
                </div>
                <div class="filter-group">
                    <label>Category</label>
                    <div class="filter-buttons" id="category-filter">
                        <button class="filter-btn active" data-filter="all">
                            <i class="fas fa-th"></i> All
                        </button>
                        <button class="filter-btn" data-filter="outdoor">
                            <i class="fas fa-mountain"></i> Outdoor
                        </button>
                        <button class="filter-btn" data-filter="beach">
                            <i class="fas fa-umbrella-beach"></i> Beach
                        </button>
                        <button class="filter-btn" data-filter="culture">
                            <i class="fas fa-landmark"></i> Culture
                        </button>
                        <button class="filter-btn" data-filter="nature">
                            <i class="fas fa-leaf"></i> Nature
                        </button>
                        <button class="filter-btn" data-filter="entertainment">
                            <i class="fas fa-star"></i> Entertainment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Activities Grid -->
    <section class="activities-section">
        <div class="container">
            <div class="activities-grid" id="activities-grid">
                <!-- Activities will be populated by JavaScript -->
            </div>
            <div class="no-results" id="no-results" style="display: none;">
                <i class="fas fa-search"></i>
                <h3>No activities found</h3>
                <p>Try adjusting your filters to see more options.</p>
            </div>
        </div>
    </section>

    <!-- Categories Section -->
    <section class="categories-section" id="categories">
        <div class="container">
            <h2 class="section-title">
                <span class="title-decoration"></span>
                Explore by Category
                <span class="title-decoration"></span>
            </h2>
            <div class="categories-grid">
                <div class="category-card" data-category="beach">
                    <div class="category-icon">
                        <i class="fas fa-umbrella-beach"></i>
                    </div>
                    <h3>Beaches</h3>
                    <p>Stunning coastline and sandy shores</p>
                </div>
                <div class="category-card" data-category="outdoor">
                    <div class="category-icon">
                        <i class="fas fa-hiking"></i>
                    </div>
                    <h3>Hiking & Trails</h3>
                    <p>Scenic mountain and coastal paths</p>
                </div>
                <div class="category-card" data-category="culture">
                    <div class="category-icon">
                        <i class="fas fa-museum"></i>
                    </div>
                    <h3>Culture & History</h3>
                    <p>Museums, missions, and architecture</p>
                </div>
                <div class="category-card" data-category="nature">
                    <div class="category-icon">
                        <i class="fas fa-tree"></i>
                    </div>
                    <h3>Parks & Gardens</h3>
                    <p>Green spaces and botanical wonders</p>
                </div>
                <div class="category-card" data-category="entertainment">
                    <div class="category-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <h3>Entertainment</h3>
                    <p>Events, markets, and local fun</p>
                </div>
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section class="about-section" id="about">
        <div class="container">
            <div class="about-content">
                <h2 class="section-title">
                    <span class="title-decoration"></span>
                    About This Guide
                    <span class="title-decoration"></span>
                </h2>
                <p>Santa Barbara, known as the "American Riviera," offers a wealth of experiences that don't require a big budget. This guide showcases the best free and low-cost activities in the area, making it easy for visitors and locals alike to enjoy everything this beautiful coastal city has to offer.</p>
                <div class="about-features">
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Curated activities under $10</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Free activities prioritized</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Local insider tips</span>
                    </div>
                    <div class="feature">
                        <i class="fas fa-check-circle"></i>
                        <span>Easy filtering by category</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <div class="logo">
                        <i class="fas fa-sun"></i>
                        <span>SB Activities</span>
                    </div>
                    <p>Your guide to affordable adventures in Santa Barbara.</p>
                </div>
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#activities">Activities</a></li>
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#about">About</a></li>
                    </ul>
                </div>
                <div class="footer-social">
                    <h4>Connect</h4>
                    <div class="social-icons">
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Santa Barbara Activities Guide. All rights reserved.</p>
            </div>
        </div>
    </footer>

    <script src="/js/activities.js"></script>
    <script src="/js/main.js"></script>
</body>
</html>`

// Main route - serve the HTML page
app.get('/', (c) => {
  return c.html(htmlTemplate)
})

// API route to get activities (optional, for future use)
app.get('/api/activities', (c) => {
  return c.json({ message: 'API endpoint for activities' })
})

export default app
