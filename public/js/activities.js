// ===================================
// Santa Barbara Activities Data
// Free activities listed first, then low-cost (max $10)
// Updated with ACTUAL Santa Barbara location-specific images
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
        image: "https://sspark.genspark.ai/cfimages?u1=lpQsopQlxNydRWhMwRk9XHK4m525G9IUj5nYQ0DLgPUvjVWlrpPttKBRfp3hFM2%2B1zLRyb%2Br0K0ZX%2BYOcBFvcbh04mjDD095vyVev%2B%2FJs51DrN12losTWZWXVkfqD15p&u2=H4gz5gPJXtmSs2MD&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=eqmtqB%2FxbfyijGyvS%2BkFusNm4UsQB0Eanm5tLKlx3WKvO8IV0o3F2IEk8EW9XZO4QEURslz%2BbiQmuQrbtpMXFLYx%2B4SxYmVvEbJwc78yP2RusOwdtqVYl0JCUyQBG3hl%2BxfrlK3QdIbiYGNSlkNUAV0X&u2=Mx3x2mKLCCbF5ZK5&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=eqKwS47Wp%2B5kuq47fhTRYXlcbLiBnaU0%2Fb5vE51ndJ2rD0dvuqMhK%2F6JgNCXJOuokpelIbVzfIWajyjHPzMIqtfkB6SzCEkaUocurwtZWGjSUkiDYeZFXM5PUExvIR9YBxMRQ2YIeK8VaugLyzq8%2FM6u%2B8o%3D&u2=gUjj0u172KPqF1vz&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=mbWId2jl0g4Axpyrlqd14ijBByNkY9048oyW7a2euM2cnrIJ7bybynLhTsu%2F36408irldmpHAwaJ1oO0m6sPRLaO%2BqTe5b1dgngQAGkClBLRVN%2F4CkggXRMWHdqJ6CFi9zJTtZwvDUN2lVvHhzVZ0BWEFWY%3D&u2=6%2BUL7ulJoYYshyYR&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=grjV9FU0E%2BhSbntKt97zoRTWKC45G5q3M%2FWY4Q7YxlR8HYmvfwTMRLsU1sqviBvcyrFj5sCEgsYKNAdAMuTUuhppU%2B8o%2Fr7rqwvqP1yXcA%3D%3D&u2=TMOJJBXCpj76gw%2FA&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=vbIhJ2hz%2BN8ktMQlJGrbCSViwGIr8OZYxrrYF1OfpQE%2FUODH3dvvE6o5jtvEtu2OZeNpq%2BjIWomiB08%2F%2FXVaa6XuFH4PKRWts06m7grgyHM%2FXkVVJih3wZxvwYW9WYS0wZsa1JpIwj5QlryHZoI%3D&u2=XXQg0xVPXUdJl1hL&width=2560",
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
        image: "/images/goleta-beach.jpg",
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
        image: "https://sspark.genspark.ai/cfimages?u1=yqS9teMxJgHPgmY8P2aChbPHLdtfQWuduDYODchkj%2BqCWq3FvQD7rjBChxV%2FkGGvSBMYdsre09hHBM2TjcFNPFQWoYCDQoDq5yp3E5GGpdZrGBn27tTI%2BoymhMZgrR7ggWrHzYoeZZSnzw%3D%3D&u2=qaZDs2qFTvYng2z3&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=73BfvudvQR5QAlhV1ZSWJt%2FtvWm8Urc6rde5ptbiTEmLjukkR1cnU3nH%2F544TBPCcMIkHJchuuGMXcIHutfj5HfSsaFN6eu6ccwdK3SEsWd%2FNCp3WZREtnfxwxHu7sSaVmVEAlaIKgBvkgl9ypk11gtU&u2=Em9F4wAcdNnkRLiZ&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=jL50xDy0KbcznvNNeAxqQKnNk39PEQarGcHWdaBuFrjl7z2rArbiRp9V4yX%2BJO6eD8J%2FnkRu8JgFwTrA9vS5wzDHnrZSHCYJi5%2BH9BrVD9Owx3BRo1DZphLrOVbByGL67ziioc%2FyqU5fti21FrIWEhksYTnY7T3NrLU9ENUaVdhkj%2B%2FiLSQ%3D&u2=DUlety1uVHdimz3g&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ALiJ6FIenmZ1sJAVeygH1UBGnYq9Kx4It1QCMFL%2F4ghL7SOimgO5Ey3RF1%2FiB57VacJKVwxMdxgqyetoWLWhKzYIHvrK77z5zpLQEqAgCza%2Fw1PW047HiRSApvcrCKeryiaULN21xC%2FSIJDtUxHNfw%3D%3D&u2=v9zKqwtDT3G6afRM&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=QXJxo%2F2%2F5M7OcvoQf9WpQ%2FFC64cMLbUxyQhO0cG4rwFySPsHsjqWhWaopoTvQkmDhYGw7xBsS0BlWUN1YQ61GRhK6FOjPQZ8ZX936SleDXIhJJpJZA%3D%3D&u2=nDotAAJcCK7muzO0&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=G1c0rVWCf0Mgyidq5%2BbcGtKrYeMt5RPdwAXDU1CimYI4OzfN0srxu7cNEjbvKusROAdrO4LI78sRGHWsJo5eE0vbWIUmd%2FbqynKp%2FrTvtX1aXDK5QGgbG%2F%2FOFcovzf8aGSzaaqxymT5idXE%3D&u2=jQwXly1pUUz%2B2K58&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=DfJaFSBGHIV2H2bs72UR7%2By7Dpbnd3mi10SSvrED5xXgpiTXTel033WlcytFwXB2TCv7QZZDiTCNXyj7EEjc4KuhLc8g2riHUWTd6q59%2B%2BZa0I8YN0f2u%2BgoqcoN00KOT3Z3faQ9siVSAwpwT3kJBckuYfYzY0%2Fd&u2=yq6XDZwszW0T5qM4&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=eUC398aZ7qc%2FXfNzz2GewmicBSSXBNBnQX47nJp4roWDcbyXJXf0tU95mra8cQ8G7RYMhKQmCHww7pmoGI6hQFR0eO3uBEOnst4DUfH9qWM0JuiiBLexuSF%2BcOt9Wm0G1UI0wrFVn7v5VbQcXwe%2FBpU%3D&u2=wIWkd8gBBbXQDGqf&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=rRAPEsU1qQIHqEGEBPHMUZY9NG1vq5Jff8%2FJv4MFQwls9x9WzYSBgzpirtW3PHka1i7O0xYzIdccXgCaRkUaBI%2Fb2RRDSyfrt6pQWa3x8nfRBDmaaT9pLWOmZ%2BONWtb688sY9khVNJT%2B4b24YQ%3D%3D&u2=9Lmj1BtsI5K5fsgQ&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=nxKx2SxQafw6Z1xWxQ5tsGXT7nzyawNG3I04P3FkeCCM9pxa%2FcxSucl1Dt5vXcVePxw1xsXAV3ro0tnB5wFy9VgMOByePVDXVVUUoIbRo7YQGTBY%2FyLYPi7LXuuX%2BBLdV4qvYpmwykE%3D&u2=%2Fcd9AYa9ed0II5uj&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=02tw8MaI4jfzGRJ5feR%2FcR497LtNwCOR4GWJpXAUZnGhLYzQmfKBnL0Lp8VOsUhtzVXYL1e%2BeaP5UMtyDo01Z4ELiZKXJixYMHkP9QKnfZsbfEQHKsaVVJB0E1JgZX0ZwNojJshqtPCwioDZORrFNCsbIIRE2Ps%3D&u2=F5Usv6M%2F5T2zrxX5&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=1dEWTXB5zPURyv02jbQadmO%2FmmvHTKSQALi6G5B8RWwYTeVBlYSWBQceDvtf%2BMCwUwZawxwWkyeMhbUY6Ej4vdOXBAvSEw%2FZctD8CaLhVoS5CbJX%2F1wF1BT5LIcbBcVleuofQINV2bzd3IPzCTWX4aAWD85WPFY43iqBog%3D%3D&u2=jlYUYBBync%2Fs9pwV&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ajmy0Cu14RAloSayC0bgmZt76cLsMqbNh6xNlAo1lLv%2Ft4RmpYd8lPTC8p%2F545BBDkqMmH%2BXqJuoGm9mGyCfJgtwnl05usOMvIrKpfu4wm1qn%2Ba3lKLN08kPfdEedltcnlaFx6vjpg7CEHBr6wLBXl%2Fh8PvqemvHlOpxvbdNEMf2ESpPChklRv2h5tuBzxn%2FzNeHnxAyJcE98vzba%2B8%3D&u2=H6LHp5c3Rka3HaWJ&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=QgGIRNbrQX0OqeNzMhBt3lvyYzgQyJPRMHD148prA57K%2FMM39OnviydLVHzaSqjKk5MSyaUKdOgImZPUYafmw8XjjKil5cQh8Eav56pSnmEaF2MY5jKqzw%3D%3D&u2=Xmk5BIJyO%2BGMTgAO&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=QCUJS1rGrgi%2F%2BDC4Ak%2FLNvTl4o8oQvupxhyETlf4IPrRACxnUZdSbZM%2BSDINEt4Ln0UUklaVJz8x%2FLyrlzwU06mGOQ9w86JWgZ0HBd41Ih4OYBuimTINfnF7oHJwb2Eaeu6Kp3RfqJfrXaIgRQ%3D%3D&u2=ssxeu7HeJw6koP5H&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=Jpv%2FcOraQuYyfPyb8uVE3I9mE5dpY%2FdB%2FGZ2RKPi4vMFa0y31Br%2B81ZoSF5SgBM6%2FqFZ0eTRqNXQWPFGMGrGdJrFyKOsvPgolR04vZFL6w%3D%3D&u2=S8t%2FtkcE0AnesMcY&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=UiFDhWvn89MNnEv6FQJD3uqWXbYHcfhJ5iJW%2Bia3F5j7pKDJUAuw2LlW7%2Fr%2FOx7OzymeM18clnPA%2BVP%2BJ%2BENml0jd1M%2FYT3rCvUWp2Y63%2BAKI6rI2moIsG6NmCa6KUtvZQZlZfFSIi%2Bnw32u8wmIu58d8q20%2F4Up05c%3D&u2=2N%2FbUcS8z2gOUWly&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=atamo52Na4xj263rZgEkLlD2ndKrlX7F0b8NV4vkqmUMWzvAY7RwSmhVIFvZPh7loDTVJrkL3uXDwM9hQnAVrCRN8G4u1CckNJjAf%2BjIv5TdcKrwHGqC3YXP7zXnR4a2LAs%3D&u2=9HKCI4sA1ZvHPxLM&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=fybE7Qe4c6tETiy9iwdkwhMABR8OjU%2BYDdIdxQ1Fl9lXafNNFl3wSF2vYHCexvURARQiYB8b%2BLUQpseAzGVT88GPtx1acXcK1j4vNAfrz8C4Vp7L5a9kmYFJ6Dw%3D&u2=auY4y%2Bq7%2FLlw%2BXsA&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=Vu6zWdp1ifpJRTLfaEIWfP8m8qRQU5rtZIFnzklCkJk%2Bsfw82mbZD8oeXneQc%2FeSquBfvvhCK6eHsuSP6NAZQb9uRObCvqSPCP9JED30WlelNWu6kslYbOZANelBC6Y6j0AQ7qz9D4LMCtHK28jXrGqO7xuTteeTVOUr2OZW34dsBfL1dLZ9%2BfpQdfNHNDDeA2CFtEzuvB1nJWCeOteL0uUBEauY96qenlyo8vfUr6siCzGoM8NeWKGhtCyPJ3%2B%2FPe%2FeuMyruNAtaSMS63RTfJ8%2FDx6yFWeDXDpOH6BIYsEZO1LAxJlly4oS5C9KlA5K2GMnhw%3D%3D&u2=7Ot5FQWM%2Fd7S8ifq&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=B8WkUxRe2OwNO80TaIwSioPiHH879dMRmJ9zozDbgwB8931xfpZq8P5O9QZia2Lgd2vOZa9%2FOUhbRUqisNZph%2F8%2BntjFP0qxl1yG1SJETWZpEOYMMe%2FI&u2=4ucBOW9SFbMwynNn&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=geV4Wt32eKpUzZIUdLPBVeEPJpAZtPeS19pxgbyck4%2FpRt865DQ45pEdLeb3nsUyoinq%2BwbCqSDJ3woWYv9mjyrUAGdkscDEivFJ9HMcM5sKNdo%2F0ozwjj%2B3ugDEBIrFZaPxzuQ%3D&u2=pn3dcXwtzc9Nvi51&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=yKQgFCNPYqX4Pvr7mFIk1tqb6eWqfOvh2uW%2FdVIEm474qgF5UX4dnSi5kYeARsPxvYidtNrxCEhbsPVc9sc%2FfF3M886O4RYCS9vXE%2Bgizk%2BfRPGBuTkvJ%2Bt7QJeXYv670gqjaHbnwx4Xro4AwrrmAosP%2B53pTtdJzxvpJoLZCF%2FHRJuPShfWcbWh&u2=f%2FyyPaT0o%2FGp08Rd&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=OCtFjnppD%2BI3c875J3KdjmhvlO54qy1hXc4hpi%2FxdjD%2FOsUybNRw%2Fowsm%2FzLj%2B%2F3tdxKtIff4cRR8jdCC9MTqjmDVoiUBCBQjTmOfk8oKxGMsj4g5SRPxyfi9js8FxY7hUwKRo5QX7IDmoKXi40g5CsYG1czQPD5yhZKWav6%2B27UgQ%3D%3D&u2=KGyCBQlaZvdxXUNS&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=%2FgzquLy6PsmGglqVB3nFTstnZeM1YW2q0C5jG%2BlTXz9hJ75Y6ogyurGeRKstiCLTzP3lk4xbpGFp5y58u3JTw9dBgSBqgh%2FTM97S527slnCwP30%2Booe%2BuPBdzTgzJbAuRCDn8T0eqs06GeHiBh8o&u2=m%2Bb4oq315mw49ZbP&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=rfYKwSG20xHwN0OKnHr0DY8ATibl3yVATBhcwcM0D%2Bls4LMUOUzzigYKwsokXzFp7umMLQ%2FpoK7r%2Bva%2F%2B00GGZWzkWmvLRQaoboHYNLCrz1dlZJbfyOeEfMOvcQNbkq84nMPBacG&u2=NWX7cEstyWhQynEs&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=5Q98DS2Db%2FCfX%2BunjUxwpGJpGLqsjBBJDM874YxB1Bmi88sxloAzCoNOTv%2B0t7a45n%2BYmrUIJ2hooFrAIblrJ%2BD%2ByriXSx8GFk8LA2gqIB8ev9Tauazb00sJ%2FQA4Nek%2BzsiA4UNLkuTWoLHj&u2=TZghDTjGXJRouxKg&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=YviHpiRkpLC6trSl3t5wVVHjBUjkyj9MrOTT0ZwkCFsKyzgiQMLW9sIKRXPygAmUvI2mUP1MA5vIVAeBEc3E%2BP4U0tw6iO%2B0UjOhNlXy6s3GIxpvu2IjOA%3D%3D&u2=VmubXZxlH7wIJqDv&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=B6tlDaYIx3A5BbfAswqyADCplTcXxVwC3oj111NC11%2BD%2BZxEixEM0%2Fg5P2ozcVvnadYsu8cGuodprrY6YIfV%2BUSzcwwtKWRV0xKIRwq6RTmyWKoaIMzehXo%3D&u2=z2BzpXFxZnr%2BO%2Bbb&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=nxwgtaarXZ%2FlgMtDu98ll%2F9MNaDBa2YEwOc60iWCLTWQa1cmk3fKfDl3xtnTtCsZ4lyxb8OOV0vAwFwk2NrhMe8uYCHV1jVm6MMYx33ccEAkpl1AI7e3uCRK8ZRsZit4t%2BodsO5LEIQAE%2Foq2Os1dwYEhA%3D%3D&u2=SVBAWquJFrOTovzx&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=qivUw1gDtOJvb%2Bg5g%2Ban7EB84sxnHQc%2BcH3gx%2FgM%2BWyDSVeDH%2F418L%2BADfpxy0CrXlYslKqCuQExaL3HmdJwzNjV%2BhioeSfAILF09eqpAM7o6oHNTZlEqrIQr2ocBZX1BNyv0XI3yQRJAzgAv1QY2hUjgg7CVprvyb2v7AohMx0cDrlQAg%3D%3D&u2=HbeTMcxoan3OKVwa&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=Lw7BIwHp4dxXvKSjoNsfQaKm%2ByjEEITILNK89QgtX%2FC4yMnr5IElncH2FNcq8uIIuaD7Ib2TfbLxC0uEAON%2BoYgl%2Bxr%2B%2B3LCvuwwSlOEScQMeJw9KO1pIAsQ1jW%2B0X0ygYk8V2UUM5iC99Muh1l2cv%2BkvHAyXPmm42g4WdcuEBDJOnnwLnrmqKBLAJkwSV3F0PYa40QaQh7zRMSqKXc%2FxfDUhcOIVAwxaWtXXWKezpnHjwzXUL9Nd2t54n1oWOonBRSIE4IfTmpSSIvQ0fStknSgeD2BPXRQGBXglw%3D%3D&u2=RWhPSzPi6CpG2v3%2B&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=2BVKZSFfY7ChHCMdpvhmYdsc5JIVqUqZsUSb20EOnRHVdhPDkUxYNbETmZzssPZxaFpagMOMqxL%2FmJTiUg9KS04YIMY%3D&u2=3TcSJSY%2BWGJf%2FXbW&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=3sjsHAJWI7m7vE6kFcvfClQSvYM%2FDeq0cwpfTc9JiBbGLCUSQ%2FrKWYi3v2vmgTTXRgHgz26xOo4uHWIfPcj5SE0hCShYn%2BPwHXVdPTxQkjlZ3%2Fl8MIZ1PIOrP%2F875FO1kWc%3D&u2=I%2FxopFOPiNQIxnh2&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ob23QaaEfT72NR9sLGgKnPxCcJ681%2FfRbXqIljS0iKbOH9GY9sSp4h6Xz%2FSRyMNC7bM3%2Fq1b7uzRaQn06k6yjwHfgQtZrIySxx2kKKdclNxBJxk2m4NclbNlOihqjgSDKhXX&u2=kVYeJNGxGm%2Bdbjkd&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=qivUw1gDtOJvb%2Bg5g%2Ban7EB84sxnHQc%2BcH3gx%2FgM%2BWyDSVeDH%2F418L%2BADfpxy0CrXlYslKqCuQExaL3HmdJwzNjV%2BhioeSfAILF09eqpAM7o6oHNTZlEqrIQr2ocBZX1BNyv0XI3yQRJAzgAv1QY2hUjgg7CVprvyb2v7AohMx0cDrlQAg%3D%3D&u2=HbeTMcxoan3OKVwa&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=GGYpmP%2Be8uid07wEc3kqh08naDHiI%2Bk4b9f7vNO%2B28FwOHgdDlLctpHWkctxHGih0g7ECncyWy9r7WcS7AnjHVSbopeVfqMg7LdyoDVz06KGiFbg8tfPQecfnzOGxxP6V2vudVf6Uq%2FbD8tgmg%3D%3D&u2=eQQPfsJbMnNNMmiW&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ea7DOFJ3GkOUT9jM3YG%2Bne5IvOrJv56hiT4obPP1mBdIeip%2FF0%2FKgt8Vv4hgew6BXm5yuwpg5mdxYB1hM2ZI2maYKDdn59KZa85kTkXc5uhM%2Fppfm3Ywz1WeR%2BUzK34eP%2BIdBGzNhFU7LtIpJ9aLPaSZp%2F9VGHIbUojEXhDbwlQnZWRtFoYwEFdYv5t420lhkg2iEM1B7Thvpzt%2FEOEFvi5eYBLg%2BNg%3D&u2=Gl3BTuXxyl4oKAUH&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=P3gJZ6eVKcjTWCsEV0zCbspxcRyeTcKUqoUajVThcjnng%2F9t5YTm80mx6lOaixz4aowh0WzVHgw2sIMVcuqo4%2BYJt9vFAKdNsa1U7qcO8FD%2B1poLWn2JW8igGydeTbBVHvFNU19hqiUlTtwvcWENag%3D%3D&u2=aqMmx633w1JZEQdW&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=IQzOzYDWgQTQp9v%2BIT5LhPPXE%2FUcEnGT7HTF183izlpRxTLnpEn23UtZX%2Fay6xG3xyHGsFyTqzdH64rUOPCCLL%2FGIZxkhe1%2Bec6oZoEC7A%3D%3D&u2=zEdAPOZXlrxy6pUS&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=vvM5HXDjlTKpAaz67lYwjtP%2F2QVYj7jcBBSbdISUHbdbkll85j%2B%2BtHPn6v%2FRIwoFDZiCntDZGAwZTsxDG1OYOtitVAFWzPx44JGD5xiDVFBcQ3kh&u2=6Y4IXId0eVPkpNdk&width=2560",
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
        image: "/images/sb-museum-of-art.jpg",
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
        image: "/images/old-mission-santa-barbara.jpg",
        tips: "Self-guided tour included with admission. Courtyard and grounds free to explore."
    },
    {
        id: 25,
        name: "El Presidio de Santa Barbara",
        description: "Visit the site of the original Spanish fort founded in 1782. Features reconstructed buildings, artifacts, and insight into colonial California.",
        category: "culture",
        price: 5,
        priceType: "lowcost",
        location: "123 E Canon Perdido St",
        duration: "1-2 hours",
        image: "https://sspark.genspark.ai/cfimages?u1=amD5Yzj6zT0KvGq6ihvDCqJsfIfrZP%2B3GjKqTJ5oR08uMRQ9GtarJWeR5dslul%2FiZYAK0paMBtw73LstGttFI3niD2j5SkLW7HZJfaRKeRCnxw90AofOvia0FslI5p6Syzrqu2cpTXm%2FB2vEx6hchDRSlOVNjSedpAqgxfu5jWdy5ozfpg%3D%3D&u2=%2BfePkmRreSZGjaNq&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=gEtb5oiSD%2FxMmwDphTY9rGzYhl1Xsk7qW%2Bs5DVjPN9wqps7EbR9s5LjJ70dAn4OfDKhh%2BCcq3wyaue3RVczM5po4RN9zgOPF5%2FHimiP3rVC0BaHbQxH0YIxJzZ%2BH4vdT&u2=GFnoqcP8guloVm%2BW&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=e8MoAXE6VXinl9xd93XKKBRhEsC4MD2OFQ5aZpRXzLtlLrl15OD8yxEepoqMvGoC2peamsbxHo67iCKCGTLc97KF4khTMu4Nx5NCJBMia4vW7K1gjZGU5Txa%2BiILZgQaI2R1iNLNqdYJ&u2=Gls6aUOgXJnchTAf&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ZlVkEFJEg13zdviFDCiTE5DqNOu7%2F0XVhlRfWsGZlMdueJ4X3qidov1oSoMGS%2F2F045AtGYl97TTF9wSOwX7B54EWRMvbkyv0VqrzGjBbyhn6EaqOb0WMIS7lhA7&u2=Mqr9V4KA6fdqsZOU&width=2560",
        tips: "Free first Sunday of each month. Free for seniors 60+ on specific dates."
    },
    {
        id: 27,
        name: "Santa Barbara Zoo",
        description: "A compact, beautifully landscaped zoo featuring over 500 animals with stunning ocean views. Perfect for families and animal lovers.",
        category: "nature",
        price: 3,
        priceType: "lowcost",
        location: "500 Ninos Dr",
        duration: "2-4 hours",
        image: "/images/santa-barbara-zoo.jpg",
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
        image: "https://sspark.genspark.ai/cfimages?u1=FuDU0rMKVUs%2BDOWNchEFfWweQFqLZM62dQnPxW2XQfZHfJiySabJ0zRTpHYyhXYbAZ4AuarU3QmyauyvS5i8vYNCWmYGP9Dw%2FGK2%2FGr6v1a4a3B4ZW7mTHvW5LqY7QxrmQzleWSVDrttq5cSxq5kJbC%2FU1PFH4T5AegrfP4kVLg%3D&u2=SRC%2Bd0GdYNYDk5sO&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=aZNgo2WXGD7bM0N9zizCZMkgZjRwBATw2HmY3b4Z%2FDnsy9J3kGWiwMRXF58F%2BmpmkPHCLRbhNp6vcZrsTQlBlsX4142ltwxITiKKJSj3cp1fmAT%2BnyQ5%2FIevREDmZG%2Bf1voCwbqo7B1QB0QM&u2=rNaYpsTySLl%2FHLgI&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=2BRuI9eW7hlrtHNzQW%2B8tUlQoCDnZ6L1B%2BNDlfZxKSfLFo%2BZWd7nULZyz41OQG4%2F6WYlClycOyS9o7Sl0wZjjXxk8mtF2pS8d0%2B3zscyD9HvJKpBkraQHP%2FQXkulWUbT60alnAD%2Bysq4EFXl&u2=NF%2FZPHv2virtqVsm&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=ubQyyw8SOzSfEZSlo47O88Eker9fO2VTl6TVL2478NDTsJWTvo0lSfrwydfNq%2FPK4GtR0yP5lcTzOr3WkaY8HnckTAE1RW%2BUmzD5ZPBzchTVwpUwwsa%2B0ft8WDLs6q3Kw%2B2daPGlFO42p4dSLIoU6y9%2BmJMDtflg&u2=LhdpukMIqVqxLQzr&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=P91xjSBt5RM3g5J%2BN%2B3VcYio1FyiNaNfix9R4c3bkE7uKBpLpBYB7iUK6vHtFdiGxUg1du%2BLJx5Qlj7pXtYlIsIZOSiHSZSaNSY%2BNP0Quu%2B2mIdahvkPuaJRVnPUblr%2BvjDjAWXBeKBXDcuzXdh5&u2=%2FhmLAuqfINZewqko&width=2560",
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
        image: "https://sspark.genspark.ai/cfimages?u1=3oL%2Bb%2FBG2TNTK82HUkBV6ybU0pXP9UkY2LYKoCGomNOLjn0D1OVxUfHxilCcgPPZP6cxOTbBwFQ6Jc8B1hr1%2FEUXONAYRxR8y0Vi51Wc%2BmLFve3gsxxnkEAVKm5tRvHKBFJFg7Q%3D&u2=XEEOsSKTE%2F41K8Ew&width=2560",
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
