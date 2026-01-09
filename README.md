# Santa Barbara Activities Guide

A beautiful, responsive website showcasing free and low-cost activities available in Santa Barbara, California. The site prioritizes free activities and includes only low-cost options with a maximum price of $10.

## 🌟 Features

### Currently Completed Features

1. **Interactive Activities Showcase**
   - 32 curated activities (19 free + 13 low-cost)
   - Beautiful card-based layout with images
   - Activities sorted with free options prioritized first

2. **Smart Filtering System**
   - Filter by price: All, Free, or Low-Cost ($1-$10)
   - Filter by category: Beach, Outdoor, Culture, Nature, Entertainment
   - Combined filtering for precise results

3. **Category Quick Navigation**
   - Clickable category cards for easy navigation
   - Categories: Beaches, Hiking & Trails, Culture & History, Parks & Gardens, Entertainment

4. **Responsive Design**
   - Fully responsive layout for desktop, tablet, and mobile
   - Mobile-friendly navigation and filter controls

5. **Animated Statistics**
   - Live counters showing total free, low-cost, and total activities
   - Smooth number animation on scroll

6. **Modern UI/UX**
   - Beautiful hero section with animated wave background
   - Smooth scroll navigation
   - Hover effects and transitions
   - Fixed navbar with scroll effect

## 🔗 URLs

- **Development**: https://3000-ipj53zgfhxhfpmrev255i-cbeee0f9.sandbox.novita.ai

## 📂 Project Structure

```
webapp/
├── src/
│   └── index.tsx           # Main Hono application (serves HTML)
├── public/
│   ├── css/
│   │   └── style.css       # All styles including responsive design
│   └── js/
│       ├── activities.js   # Activity data and configuration
│       └── main.js         # Main application logic
├── dist/                   # Build output
├── ecosystem.config.cjs    # PM2 configuration
├── vite.config.ts          # Vite configuration
├── wrangler.jsonc          # Cloudflare configuration
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## 🔗 Entry Points

| Path | Description |
|------|-------------|
| `/` | Main page - Activities showcase |
| `/#activities` | Jump to activities section with filters |
| `/#categories` | Jump to category cards section |
| `/#about` | Jump to about section |
| `/api/activities` | API endpoint (for future use) |

## 📊 Activity Data

### Categories
- **Beach** (6 activities) - Beaches, water activities, paddle boarding
- **Outdoor** (5 activities) - Hiking trails, biking paths
- **Culture** (6 activities) - Museums, historical sites, architecture
- **Nature** (6 activities) - Parks, gardens, wildlife refuges
- **Entertainment** (9 activities) - Markets, events, attractions

### Price Breakdown
- **Free Activities**: 19 activities (prioritized in display)
- **Low-Cost Activities**: 13 activities ($1-$10 max)

## 🛠️ Technologies Used

- **Hono** - Lightweight web framework for Cloudflare Workers
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool
- **Wrangler** - Cloudflare development CLI
- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid, animations
- **JavaScript (ES6+)** - DOM manipulation, filtering, IntersectionObserver
- **Google Fonts** - Montserrat & Playfair Display
- **Font Awesome 6** - Icons

## 🚀 Development

### Local Development
```bash
# Install dependencies
npm install

# Build the project
npm run build

# Start development server
pm2 start ecosystem.config.cjs

# Or use wrangler directly
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000
```

### Available Scripts
```bash
npm run dev       # Start Vite dev server
npm run build     # Build for production
npm run preview   # Preview production build
npm run deploy    # Deploy to Cloudflare Pages
```

## 🚀 Features Not Yet Implemented

1. **Map Integration** - Interactive map showing activity locations
2. **Search Functionality** - Text search across activity names and descriptions
3. **Favorites System** - Save favorite activities (using localStorage)
4. **Activity Details Modal** - Expanded view with more information
5. **Weather Integration** - Current weather conditions for outdoor activities
6. **User Reviews/Ratings** - Community ratings for activities
7. **Share Functionality** - Social media sharing for activities
8. **Print-Friendly Version** - Optimized layout for printing

## 📝 Recommended Next Steps

1. **Add Map View** - Integrate Leaflet.js or Google Maps to show activity locations
2. **Implement Search** - Add a search bar to filter activities by keywords
3. **Add Activity Details** - Create modal popups with additional information, tips, and directions
4. **Mobile Menu** - Add hamburger menu for mobile navigation
5. **LocalStorage Favorites** - Allow users to save their favorite activities
6. **Loading States** - Add skeleton loaders for better perceived performance
7. **SEO Optimization** - Add meta tags, structured data, and sitemap

## 💡 Usage

### Filtering Activities

1. Use the **Price Range** buttons to filter by free or low-cost activities
2. Use the **Category** buttons to filter by activity type
3. Click on **Category Cards** in the categories section to quickly filter
4. Filters can be combined for more specific results

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome for Android)

## 📄 License

This project is open source and available for personal and educational use.

---

*Discover the American Riviera without breaking the bank!* 🌴☀️🌊
