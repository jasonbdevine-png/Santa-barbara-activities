// ===================================
// Santa Barbara Activities Data
// Free activities listed first, then low-cost (max $10)
// ===================================

const activities = [
    // ============ FREE ACTIVITIES ============
    
    // Beach Activities (Free)
    {
        id: 1,
        name: "East Beach",
        description: "One of Santa Barbara's most popular beaches featuring volleyball courts, a playground, and stunning views of the harbor. Perfect for swimming, sunbathing, and picnicking.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "1118 E Cabrillo Blvd",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=400&fit=crop",
        tips: "Arrive early on weekends for parking. Volleyball courts are first-come, first-served."
    },
    {
        id: 2,
        name: "Butterfly Beach",
        description: "A scenic, uncrowded beach in Montecito known for its beautiful sunsets, tide pools, and occasional celebrity sightings. Great for a peaceful walk or swim.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "Channel Dr, Montecito",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&h=400&fit=crop",
        tips: "Best at low tide for exploring tide pools. Limited street parking available."
    },
    {
        id: 3,
        name: "Leadbetter Beach",
        description: "A family-friendly beach with calm waters, grassy areas for picnics, and a scenic point for watching surfers and sailboats.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "Shoreline Dr & Loma Alta Dr",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=600&h=400&fit=crop",
        tips: "Great spot for beginner surfers. Restrooms and showers available."
    },
    {
        id: 4,
        name: "Arroyo Burro Beach (Hendry's Beach)",
        description: "A local favorite with a dog-friendly section, tide pools, and a beachside restaurant. Perfect for watching sunsets over the Pacific.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "2981 Cliff Dr",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?w=600&h=400&fit=crop",
        tips: "Dogs allowed off-leash in designated area. Free parking lot fills up fast on weekends."
    },
    {
        id: 33,
        name: "West Beach",
        description: "Ideal for kayaking and paddleboarding with calm, protected waters near the harbor. Great for families and water sports enthusiasts.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "W Cabrillo Blvd",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=600&h=400&fit=crop",
        tips: "Calmer waters make it perfect for beginners. Close to Stearns Wharf."
    },
    {
        id: 34,
        name: "Thousand Steps Beach",
        description: "A local favorite for sunset viewing and tide pooling. Despite the name, there are only about 100 steps to this secluded beach.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "Shoreline Dr, Santa Barbara",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1520942702018-0862200e6873?w=600&h=400&fit=crop",
        tips: "Best at low tide. The stairs can be steep, so wear appropriate footwear."
    },
    {
        id: 35,
        name: "Goleta Beach",
        description: "Perfect for bird watching, fishing off the pier, and family picnics. Features a playground, volleyball courts, and BBQ areas.",
        category: "beach",
        price: 0,
        priceType: "free",
        location: "5986 Sandspit Rd, Goleta",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?w=600&h=400&fit=crop",
        tips: "Great fishing spot from the pier. Restaurant on-site for convenient meals."
    },
    
    // Outdoor/Hiking Activities (Free)
    {
        id: 5,
        name: "Inspiration Point Hike",
        description: "A moderate 3.8-mile round-trip hike offering panoramic views of the city, coastline, and Channel Islands. One of the most rewarding short hikes in the area.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Tunnel Trail, Mission Canyon",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=400&fit=crop",
        tips: "Start early to avoid heat. Bring plenty of water and wear sturdy shoes."
    },
    {
        id: 6,
        name: "Seven Falls Trail",
        description: "A popular 3-mile round-trip hike through a scenic canyon to a series of beautiful waterfalls. Best visited after rainfall for optimal water flow.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Tunnel Rd, Mission Canyon",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=600&h=400&fit=crop",
        tips: "Trail can be slippery when wet. Swimming is allowed at the pools."
    },
    {
        id: 7,
        name: "Douglas Family Preserve",
        description: "A 70-acre coastal bluff preserve with easy walking trails, ocean views, and a dog-friendly environment. Great for bird watching and wildflowers in spring.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Medcliff Rd & Selrose Ln",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop",
        tips: "Dogs can be off-leash. Multiple trail loops available for different skill levels."
    },
    {
        id: 8,
        name: "Rattlesnake Canyon Trail",
        description: "A beautiful 3.5-mile round-trip hike through oak woodlands and alongside a creek. Features a small waterfall and diverse plant life.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Las Canoas Rd",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=400&fit=crop",
        tips: "Despite the name, rattlesnakes are rarely seen. Shaded trail, good for hot days."
    },
    {
        id: 36,
        name: "Nojoqui Falls Trail",
        description: "An easy 0.8-mile trail leading to an impressive 80-foot waterfall cascading down a moss-covered cliff. One of the most accessible waterfalls in the area.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Nojoqui Falls County Park, Solvang",
        duration: "1 hour",
        image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&h=400&fit=crop",
        tips: "Best after winter rains. The park also has picnic areas and BBQ facilities."
    },
    {
        id: 37,
        name: "Lizard's Mouth",
        description: "Unique sandstone rock formations offering panoramic views of the Santa Barbara coastline and Channel Islands. Popular for rock climbing and sunset viewing.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "West Camino Cielo, Santa Barbara",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
        tips: "Great for photography. The road can be narrow, so drive carefully."
    },
    {
        id: 38,
        name: "Tunnel Trail",
        description: "A moderate hike with sweeping valley views of Santa Barbara and the Pacific Ocean. Connects to Jesusita and Inspiration Point trails.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Tunnel Rd, Mission Canyon",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=600&h=400&fit=crop",
        tips: "Multiple trail options for different skill levels. Bring sun protection."
    },
    {
        id: 39,
        name: "Cold Spring Trail",
        description: "A shaded canyon hike popular with locals, featuring creek crossings and lush vegetation. Offers both east and west fork options.",
        category: "outdoor",
        price: 0,
        priceType: "free",
        location: "Mountain Dr, Montecito",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&h=400&fit=crop",
        tips: "The west fork is more challenging. Creek water not safe for drinking."
    },
    
    // Culture & History (Free)
    {
        id: 9,
        name: "Santa Barbara County Courthouse",
        description: "A stunning Spanish Colonial Revival building featuring beautiful murals, gardens, and a clock tower with 360-degree views of the city. Free guided tours available.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "1100 Anacapa St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&h=400&fit=crop",
        tips: "Free docent-led tours Mon-Sat at 2pm. Climb the clock tower for the best views."
    },
    {
        id: 10,
        name: "Stearns Wharf",
        description: "California's oldest working wooden wharf, offering shops, restaurants, and stunning harbor views. Watch sea lions and pelicans from this historic landmark.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "217 Stearns Wharf",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
        tips: "Visit at sunset for beautiful photos. First 90 minutes of parking is free."
    },
    {
        id: 11,
        name: "Santa Barbara Harbor & Breakwater",
        description: "A scenic walkway along the harbor where you can watch fishing boats, kayakers, and wildlife. Great for an evening stroll or morning jog.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "132 Harbor Way",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&h=400&fit=crop",
        tips: "Walk to the end of the breakwater for panoramic views and sea lion sightings."
    },
    {
        id: 12,
        name: "State Street Promenade",
        description: "The heart of downtown Santa Barbara, this pedestrian-friendly street features Spanish architecture, shops, restaurants, and street performers.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "State Street, Downtown",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
        tips: "Best on Saturday mornings when the farmers market is in full swing."
    },
    {
        id: 40,
        name: "Santa Barbara Historical Museum",
        description: "Explore Santa Barbara's rich history from the Chumash era to modern times. Features artifacts, photographs, and a beautiful Spanish-style courtyard.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "136 E De La Guerra St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1575223970966-76ae61ee7838?w=600&h=400&fit=crop",
        tips: "Always free admission. The courtyard is perfect for a quiet break."
    },
    {
        id: 41,
        name: "Chumash Painted Cave",
        description: "Ancient rock art created by the Chumash people, featuring colorful pictographs in a small sandstone cave. A unique glimpse into indigenous history.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "Painted Cave Rd, San Marcos Pass",
        duration: "30 minutes",
        image: "https://images.unsplash.com/photo-1533930083450-178a0df10f6d?w=600&h=400&fit=crop",
        tips: "The road is narrow and winding. Bring a flashlight to see the paintings better."
    },
    {
        id: 42,
        name: "City Hall Gallery",
        description: "Free art exhibitions featuring local and regional artists in the heart of downtown Santa Barbara. Rotating shows throughout the year.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "735 Anacapa St",
        duration: "30 minutes - 1 hour",
        image: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=600&h=400&fit=crop",
        tips: "Open Monday-Thursday 9 AM-5 PM. Check for special exhibition openings."
    },
    {
        id: 43,
        name: "Channing Peake Gallery",
        description: "County gallery featuring rotating exhibitions of contemporary art in a beautiful historic building. Free admission to all exhibitions.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "105 E Anapamu St",
        duration: "30 minutes - 1 hour",
        image: "https://images.unsplash.com/photo-1531243269054-5ebf6f34081e?w=600&h=400&fit=crop",
        tips: "Located in the County Administration Building. Great for art enthusiasts."
    },
    {
        id: 44,
        name: "Red Tile Walking Tour",
        description: "Self-guided 12-block historic downtown tour featuring Spanish Colonial architecture, historic adobes, and cultural landmarks.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "Downtown Santa Barbara",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        tips: "Pick up a free map at the Visitor Center. Best done in comfortable walking shoes."
    },
    {
        id: 45,
        name: "Free Walking Tours Santa Barbara",
        description: "Guided walking tours of the Harbor, Funk Zone, and Old Town led by local volunteers. Learn about local history and hidden gems.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "Various starting points",
        duration: "1.5-2 hours",
        image: "https://images.unsplash.com/photo-1569949381669-ecf31ae8f6ec?w=600&h=400&fit=crop",
        tips: "Check schedule online. Tips appreciated but not required."
    },
    {
        id: 46,
        name: "Moreton Bay Fig Tree",
        description: "One of the world's largest fig trees, planted in 1877. This magnificent tree has a spread of over 170 feet and is a National Historic Landmark.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "201 W Montecito St",
        duration: "15-30 minutes",
        image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=600&h=400&fit=crop",
        tips: "Great photo opportunity. Located near the train station."
    },
    {
        id: 47,
        name: "Chromatic Gate",
        description: "A colorful public art installation by Herbert Bayer, featuring rainbow-colored arches overlooking the ocean. Perfect for photos.",
        category: "culture",
        price: 0,
        priceType: "free",
        location: "Cabrillo Blvd at Castillo St",
        duration: "15-30 minutes",
        image: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=600&h=400&fit=crop",
        tips: "Best photographed in the morning light. Near East Beach."
    },
    
    // Nature & Parks (Free)
    {
        id: 13,
        name: "Alice Keck Park Memorial Garden",
        description: "A beautiful 4.5-acre botanical garden featuring koi ponds, sensory garden, playground, over 75 species of trees, and winding pathways.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "1500 Santa Barbara St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
        tips: "Bring bread to feed the koi fish. Best visited in spring for blooming flowers."
    },
    {
        id: 14,
        name: "Shoreline Park",
        description: "A scenic coastal park with grassy areas, picnic tables, and unobstructed ocean views. Popular for watching whales, dolphins, and spectacular sunsets.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "Shoreline Dr",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        tips: "Bring binoculars for whale watching (Dec-April). Playground for kids available."
    },
    {
        id: 15,
        name: "Elings Park",
        description: "The largest privately-funded public park in the US, offering hiking trails, disc golf, paragliding, and panoramic city views. Over 230 acres of open space.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "1298 Las Positas Rd",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1510797215324-95aa89f43c33?w=600&h=400&fit=crop",
        tips: "Watch paragliders launch from the hilltop. Dog-friendly trails throughout."
    },
    {
        id: 16,
        name: "Chase Palm Park",
        description: "A waterfront park featuring a carousel, playground, skate park, and the Shipwreck Playground for kids. Beautiful palm-lined walkways along the beach.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "236 E Cabrillo Blvd",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
        tips: "The Shipwreck Playground is a hit with kids. Sunday Arts & Crafts Show nearby."
    },
    {
        id: 32,
        name: "Andree Clark Bird Refuge",
        description: "A peaceful freshwater lagoon and wildlife sanctuary home to over 200 bird species. Walking path circles the entire refuge.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "1400 E Cabrillo Blvd",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1551085254-e96b210db58a?w=600&h=400&fit=crop",
        tips: "Bring binoculars for bird watching. Best times are early morning or evening."
    },
    {
        id: 48,
        name: "A.C. Postel Memorial Rose Garden",
        description: "Beautiful garden featuring over 1,500 rose bushes in Mission Canyon. Peak bloom in spring and early summer with stunning colors and fragrances.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "1500 Mission Ridge Rd",
        duration: "1 hour",
        image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=600&h=400&fit=crop",
        tips: "Best visited April-June for peak bloom. Bring a camera for photos."
    },
    {
        id: 49,
        name: "Ellwood Bluffs Monarch Butterfly Grove",
        description: "Winter viewing site for thousands of migrating monarch butterflies. The eucalyptus grove provides a stunning backdrop for these beautiful creatures.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "7699 Hollister Ave, Goleta",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
        tips: "Best viewing November-February. Docents often available to answer questions."
    },
    {
        id: 50,
        name: "Coal Oil Point Reserve",
        description: "Coastal reserve perfect for bird watching, with stunning bluffs, beaches, and diverse wildlife. Home to the endangered snowy plover.",
        category: "nature",
        price: 0,
        priceType: "free",
        location: "Coal Oil Point, Goleta",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
        tips: "Stay on marked trails to protect wildlife. Best for bird watching at dawn."
    },
    
    // Entertainment (Free)
    {
        id: 17,
        name: "Santa Barbara Farmers Market",
        description: "One of the best farmers markets in California, featuring fresh produce, flowers, prepared foods, and local artisan products every Saturday morning.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Santa Barbara & Cota St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=600&h=400&fit=crop",
        tips: "Arrive early (8am) for best selection. Bring cash for smaller vendors."
    },
    {
        id: 18,
        name: "Sunday Arts & Crafts Show",
        description: "A weekly outdoor art show featuring over 200 local artists displaying paintings, jewelry, photography, and handmade crafts along Cabrillo Boulevard.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Cabrillo Blvd at Chase Palm Park",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
        tips: "Every Sunday 10am-dusk. Great place to find unique souvenirs."
    },
    {
        id: 19,
        name: "Free Summer Concerts",
        description: "Enjoy free outdoor concerts at various venues throughout Santa Barbara during summer months, featuring jazz, classical, and contemporary music.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Various locations",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&h=400&fit=crop",
        tips: "Check local event calendars. Bring blankets and picnic supplies."
    },
    {
        id: 51,
        name: "Santa Barbara Harbor & Seafood Festival",
        description: "Annual free festival featuring boat rides, maritime education, fresh seafood, and family activities celebrating Santa Barbara's fishing heritage.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Santa Barbara Harbor",
        duration: "3-4 hours",
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=400&fit=crop",
        tips: "Usually held in October. Arrive early for the best activities."
    },
    {
        id: 52,
        name: "Summer Solstice Parade & Festival",
        description: "One of the largest art events in the county featuring a colorful parade, live music, food, and art. A celebration of creativity and community.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "State Street & Alameda Park",
        duration: "4-6 hours",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
        tips: "Held in late June. No written words or motors allowed in the parade!"
    },
    {
        id: 53,
        name: "Old Spanish Days Fiesta",
        description: "Historic cultural celebration featuring free events, traditional dancing, music, and parades honoring Santa Barbara's Spanish and Mexican heritage.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Various locations downtown",
        duration: "Variable",
        image: "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?w=600&h=400&fit=crop",
        tips: "Held in August. Many free events, some ticketed. El Mercado De La Guerra is free."
    },
    {
        id: 54,
        name: "Earth Day Festival",
        description: "Annual environmental celebration at Alameda Park featuring eco-friendly vendors, live entertainment, educational exhibits, and family activities.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Alameda Park",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
        tips: "Held in April. Bring reusable bags and water bottles."
    },
    {
        id: 55,
        name: "Concerts in the Park",
        description: "Free Thursday evening concerts at Chase Palm Park Great Meadow featuring local musicians and a family-friendly atmosphere.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Chase Palm Park Great Meadow",
        duration: "1.5-2 hours",
        image: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=600&h=400&fit=crop",
        tips: "Thursdays 6-7:30 PM during summer. Bring a blanket and picnic dinner."
    },
    {
        id: 56,
        name: "Free Summer Cinema",
        description: "Free outdoor movie screenings on Fridays in July/August at the Santa Barbara County Courthouse Sunken Garden. A magical movie experience.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "SB County Courthouse Sunken Garden",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&h=400&fit=crop",
        tips: "Arrive early for good spots. Bring blankets, snacks, and warm layers."
    },
    {
        id: 57,
        name: "UCSB Campus Tours",
        description: "Free guided tours of the beautiful UC Santa Barbara campus, featuring stunning oceanfront views, historic buildings, and the famous lagoon.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "UCSB Campus, Goleta",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&h=400&fit=crop",
        tips: "Check online for tour schedules. The campus beach is worth visiting."
    },
    {
        id: 58,
        name: "Whale Watching from Shore",
        description: "Watch migrating gray whales from shoreline viewing points during December-April. Free alternative to whale watching boat tours.",
        category: "entertainment",
        price: 0,
        priceType: "free",
        location: "Shoreline Park & other coastal points",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1567756611589-f1f4d0a0ffd1?w=600&h=400&fit=crop",
        tips: "Best viewing December-April. Bring binoculars for better sightings."
    },
    
    // ============ LOW-COST ACTIVITIES ($1-$10) ============
    
    // Beach/Water Activities (Low-Cost)
    {
        id: 20,
        name: "Paddle Board Rental",
        description: "Rent a stand-up paddle board and explore the calm waters of Santa Barbara Harbor. Great for beginners and a unique way to see the coastline.",
        category: "beach",
        price: 10,
        priceType: "lowcost",
        location: "Santa Barbara Harbor",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
        tips: "Morning hours offer calmest water. Group rates often available."
    },
    {
        id: 21,
        name: "Kayak Harbor Tour",
        description: "Paddle through the harbor and along the coastline in a rental kayak. Spot sea lions, pelicans, and enjoy views of the Santa Ynez Mountains.",
        category: "beach",
        price: 10,
        priceType: "lowcost",
        location: "Santa Barbara Harbor",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=600&h=400&fit=crop",
        tips: "Single kayaks around $10/hour. Double kayaks slightly more."
    },
    
    // Culture & History (Low-Cost)
    {
        id: 22,
        name: "Santa Barbara Museum of Art",
        description: "A renowned art museum featuring impressive collections of Asian art, American works, and European paintings. Special discount days available.",
        category: "culture",
        price: 6,
        priceType: "lowcost",
        location: "1130 State St",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1564399579883-451a5d44ec08?w=600&h=400&fit=crop",
        tips: "Free First Thursday evenings (5-8 PM) and Second Sundays. $6 for children 6-17."
    },
    {
        id: 23,
        name: "Old Mission Santa Barbara",
        description: "The 'Queen of the Missions' offers beautiful architecture, historic artifacts, gardens, and stunning views. A must-see piece of California history.",
        category: "culture",
        price: 9,
        priceType: "lowcost",
        location: "2201 Laguna St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1562619398-5c8c5b8d0e4f?w=600&h=400&fit=crop",
        tips: "Self-guided tour included with admission. Courtyard and grounds free to explore."
    },
    {
        id: 25,
        name: "El Presidio de Santa Bárbara",
        description: "Visit the site of the original Spanish fort founded in 1782. Features reconstructed buildings, artifacts, and insight into colonial California.",
        category: "culture",
        price: 5,
        priceType: "lowcost",
        location: "123 E Canon Perdido St",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=600&h=400&fit=crop",
        tips: "Combined ticket available with other historic sites. Guided tours on weekends."
    },
    {
        id: 59,
        name: "Santa Barbara Maritime Museum",
        description: "Explore Santa Barbara's rich maritime history through interactive exhibits, ship models, and artifacts. Features a virtual sportfishing experience.",
        category: "culture",
        price: 8,
        priceType: "lowcost",
        location: "113 Harbor Way",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?w=600&h=400&fit=crop",
        tips: "$8 for seniors, $2 with EBT card. Third Thursday free 5-8 PM."
    },
    {
        id: 60,
        name: "Santa Barbara Museum of Natural History",
        description: "Explore nature through exhibits on mammals, birds, marine life, and Chumash culture. Features a planetarium and beautiful outdoor spaces.",
        category: "culture",
        price: 3,
        priceType: "lowcost",
        location: "2559 Puesta del Sol",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1566274360936-69fae3dc0f29?w=600&h=400&fit=crop",
        tips: "$3 with EBT card for up to 4 people. Free through SoCal Museums Free-For-All."
    },
    
    // Nature & Gardens (Low-Cost)
    {
        id: 26,
        name: "Santa Barbara Botanic Garden",
        description: "A 78-acre garden dedicated to California native plants. Features 5 miles of trails through meadows, redwood groves, and desert sections.",
        category: "nature",
        price: 10,
        priceType: "lowcost",
        location: "1212 Mission Canyon Rd",
        duration: "2-3 hours",
        image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop",
        tips: "Free first Sunday of each month. Free for seniors 60+ on specific dates."
    },
    {
        id: 27,
        name: "Santa Barbara Zoo",
        description: "A compact, beautifully landscaped zoo featuring over 500 animals with stunning ocean views. Perfect for families and animal lovers.",
        category: "nature",
        price: 3,
        priceType: "lowcost",
        location: "500 Niños Dr",
        duration: "2-4 hours",
        image: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?w=600&h=400&fit=crop",
        tips: "$3 admission for families receiving food assistance. Children under 2 free."
    },
    {
        id: 61,
        name: "Cachuma Lake Recreation Area",
        description: "Beautiful lake in the Santa Ynez Valley offering nature programs, wildlife viewing, and scenic beauty. Great for a day trip from Santa Barbara.",
        category: "nature",
        price: 10,
        priceType: "lowcost",
        location: "2225 Highway 154, Santa Barbara",
        duration: "3-5 hours",
        image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=600&h=400&fit=crop",
        tips: "$10 per vehicle includes nature programs. Eagle cruises available in winter."
    },
    {
        id: 62,
        name: "Rancho La Patera & Stow House",
        description: "Goleta's oldest frame house, built in 1872. Features Victorian architecture, heritage orchards, and historic exhibits about early California life.",
        category: "nature",
        price: 5,
        priceType: "lowcost",
        location: "304 N Los Carneros Rd, Goleta",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&h=400&fit=crop",
        tips: "Suggested donation. Beautiful grounds for picnicking."
    },
    
    // Entertainment (Low-Cost)
    {
        id: 28,
        name: "Chase Palm Park Carousel",
        description: "Take a ride on a beautiful vintage-style carousel located in Chase Palm Park. A delightful experience for children and adults alike.",
        category: "entertainment",
        price: 3,
        priceType: "lowcost",
        location: "236 E Cabrillo Blvd",
        duration: "30 minutes",
        image: "https://images.unsplash.com/photo-1570179538662-166d2bffed42?w=600&h=400&fit=crop",
        tips: "Open daily during summer, weekends in winter. Cash preferred."
    },
    {
        id: 29,
        name: "Wine Tasting on the Waterfront",
        description: "Sample local Santa Barbara County wines at the tasting rooms along the waterfront. Many offer tastings for under $10 with waived fees on purchase.",
        category: "entertainment",
        price: 10,
        priceType: "lowcost",
        location: "Various waterfront locations",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop",
        tips: "Many tasting fees waived with bottle purchase. The Funk Zone has multiple options."
    },
    {
        id: 30,
        name: "Sea Center Aquarium",
        description: "An interactive marine science center on Stearns Wharf featuring touch tanks, a shark exhibit, and educational programs about local ocean life.",
        category: "entertainment",
        price: 9,
        priceType: "lowcost",
        location: "211 Stearns Wharf",
        duration: "1-2 hours",
        image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?w=600&h=400&fit=crop",
        tips: "Third Thursday of each month is free (3-5pm). Great for kids."
    },
    
    // Outdoor Activities (Low-Cost)
    {
        id: 31,
        name: "Bike Rental - Cabrillo Bikeway",
        description: "Rent a bike and cruise along the scenic Cabrillo Bikeway, a flat 3-mile coastal path connecting the harbor to the Andree Clark Bird Refuge.",
        category: "outdoor",
        price: 8,
        priceType: "lowcost",
        location: "Various rental shops",
        duration: "1-3 hours",
        image: "https://images.unsplash.com/photo-1471506480208-91b3a4cc78be?w=600&h=400&fit=crop",
        tips: "Hourly rentals available. Surrey bikes and electric bikes cost more."
    }
];

// Category icon mapping
const categoryIcons = {
    beach: "fas fa-umbrella-beach",
    outdoor: "fas fa-mountain",
    culture: "fas fa-landmark",
    nature: "fas fa-leaf",
    entertainment: "fas fa-star"
};

// Category display names
const categoryNames = {
    beach: "Beach",
    outdoor: "Outdoor",
    culture: "Culture",
    nature: "Nature",
    entertainment: "Entertainment"
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { activities, categoryIcons, categoryNames };
}
