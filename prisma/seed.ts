import { prisma } from '../src/lib/prisma'
import bcrypt from 'bcryptjs'
import { slugify } from '../src/lib/utils'

const packages = [
  {
    title: 'Ooty Nilgiri Hills Escape',
    destination: 'Ooty, Tamil Nadu',
    duration: '3N / 4D',
    groupSize: '2–20 pax',
    priceFrom: 8999,
    categoryName: 'Hill Station Escapes',
    typeName: 'India Holidays',
    tag: 'WEEKEND GETAWAY',
    description: '<p>Escape to the <strong>Queen of Hill Stations</strong> — Ooty. Nestled at 2,240 metres in the Nilgiri mountains, this curated package takes you through misty tea gardens, the iconic Nilgiri Mountain Railway, Botanical Gardens, and Ooty Lake. Our experienced coordinators handle every detail so you can simply breathe, explore, and enjoy.</p><p>Perfect for families, couples, and small groups looking for a refreshing retreat from Chennai\'s heat.</p>',
    highlights: ['Nilgiri Mountain Railway ride', 'Botanical Gardens visit', 'Ooty Lake boating', 'Tea factory tour', 'Doddabetta Peak viewpoint', 'Rose Garden walk'],
    inclusions: ['3 nights accommodation at 3-star resort', 'Daily breakfast and dinner', 'AC vehicle transport throughout', 'All sightseeing entry tickets', 'Experienced local guide', '24/7 Eventurism support'],
    exclusions: ['Airfare or train to Ooty', 'Lunch meals', 'Personal expenses', 'Photography charges at sites', 'Tips and gratuities'],
    itinerary: [
      { day: 1, title: 'Chennai → Ooty Arrival', description: 'Depart early morning from Chennai. Scenic drive through Coimbatore and Mettupalayam. Evening arrival, hotel check-in, welcome dinner.' },
      { day: 2, title: 'Ooty Sightseeing Day 1', description: 'Morning visit to Botanical Gardens and Rose Garden. Afternoon Ooty Lake boating. Evening stroll on Charring Cross commercial street.' },
      { day: 3, title: 'Nilgiri Railway & Tea Gardens', description: 'Morning Nilgiri Mountain Railway joy ride. Tea factory tour and tasting. Afternoon Doddabetta Peak for panoramic views.' },
      { day: 4, title: 'Departure Day', description: 'Post-breakfast checkout. Scenic return drive to Chennai. Arrive by evening.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
      'https://images.unsplash.com/photo-1574490093980-fb8f8d5dad45?w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    ],
    featured: true,
  },
  {
    title: 'Andaman Turquoise Paradise',
    destination: 'Port Blair & Havelock, Andaman',
    duration: '5N / 6D',
    groupSize: '2–15 pax',
    priceFrom: 24999,
    categoryName: 'Beach Escapes',
    typeName: 'India Holidays',
    tag: 'FAMILY FAVOURITE',
    description: '<p>Discover the <strong>jewel of India\'s coastline</strong> — the Andaman Islands. With crystal-clear emerald waters, white sandy beaches, and vibrant coral reefs, this package covers Port Blair\'s historic sites and the pristine beaches of Havelock Island.</p><p>Ideal for families, couples, and beach lovers seeking an unforgettable island experience far from the crowds.</p>',
    highlights: ['Radhanagar Beach (Asia\'s best beach)', 'Cellular Jail light and sound show', 'Snorkelling at Elephant Beach', 'Jolly Buoy Island excursion', 'Glass-bottom boat ride', 'Neil Island day trip'],
    inclusions: ['5 nights accommodation (Port Blair 2N + Havelock 3N)', 'Daily breakfast and dinner', 'All ferry transfers between islands', 'Snorkelling equipment', 'All sightseeing and entry fees', '24/7 Eventurism support'],
    exclusions: ['Flights to and from Port Blair', 'Lunch meals', 'Scuba diving (optional extra)', 'Personal expenses', 'Tips'],
    itinerary: [
      { day: 1, title: 'Arrival in Port Blair', description: 'Airport pickup. Check-in at hotel. Evening visit to Corbyn\'s Cove Beach. Welcome dinner.' },
      { day: 2, title: 'Port Blair Sightseeing', description: 'Morning Cellular Jail visit. Cellular Jail Sound & Light show in evening. Anthropological Museum in afternoon.' },
      { day: 3, title: 'Havelock Island', description: 'Morning ferry to Havelock. Check-in at beach resort. Afternoon at Radhanagar Beach (Beach No. 7). Sunset views.' },
      { day: 4, title: 'Elephant Beach Snorkelling', description: 'Full day at Elephant Beach. Snorkelling, glass-bottom boat, beach relaxation. Evening at leisure.' },
      { day: 5, title: 'Neil Island Day Trip', description: 'Morning trip to Neil Island. Natural Bridge, Laxmanpur Beach. Return to Havelock evening.' },
      { day: 6, title: 'Departure', description: 'Morning ferry back to Port Blair. Airport transfer. Depart with memories.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80',
      'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=800&q=80',
    ],
    featured: true,
  },
  {
    title: 'Kerala Backwaters & Munnar',
    destination: 'Cochin, Munnar & Alleppey, Kerala',
    duration: '4N / 5D',
    groupSize: '2–25 pax',
    priceFrom: 14999,
    categoryName: 'Kerala Escapes',
    typeName: 'India Holidays',
    tag: 'TRENDING',
    description: '<p>Kerala — <strong>God\'s Own Country</strong> — awaits. This package combines the misty tea gardens of Munnar with the serene backwaters of Alleppey on a traditional houseboat. Experience the magic of Kerala\'s lush green landscape, spice plantations, and tranquil waterways.</p>',
    highlights: ['Houseboat stay on Alleppey backwaters', 'Munnar tea garden walks', 'Mattupetty Dam and Echo Point', 'Cochin Fort walking tour', 'Kathakali cultural performance', 'Spice plantation visit'],
    inclusions: ['4 nights (Munnar 2N + Houseboat 1N + Cochin 1N)', 'All meals on houseboat', 'Breakfast at hotels', 'AC vehicle transport', 'Kathakali show entry', 'Local guide'],
    exclusions: ['Train/flight to Cochin', 'Lunch at hotels', 'Ayurvedic treatments', 'Camera charges', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival Cochin → Munnar', description: 'Arrive Cochin. Drive 4 hours to Munnar through scenic ghats. Hotel check-in. Evening at leisure.' },
      { day: 2, title: 'Munnar Sightseeing', description: 'Mattupetty Dam, Echo Point, Kundala Lake. Afternoon tea estate walk and factory visit.' },
      { day: 3, title: 'Munnar → Alleppey Houseboat', description: 'Morning drive to Alleppey. Board your private houseboat. Cruise through palm-lined canals. All meals on board.' },
      { day: 4, title: 'Alleppey → Cochin', description: 'Morning disembark. Drive to Cochin. Fort Kochi walking tour, Chinese fishing nets, Kathakali show evening.' },
      { day: 5, title: 'Departure', description: 'Cochin sightseeing — Mattancherry Palace, Jewish Synagogue. Airport/station transfer.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80',
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&q=80',
    ],
    featured: true,
  },
  {
    title: 'Pondicherry Heritage Weekend',
    destination: 'Pondicherry, Tamil Nadu',
    duration: '1N / 2D',
    groupSize: '2–30 pax',
    priceFrom: 3499,
    categoryName: 'Heritage Tours',
    typeName: 'India Holidays',
    tag: 'QUICK ESCAPE',
    description: '<p>A <strong>perfect weekend escape</strong> from Chennai — Pondicherry\'s French Quarter, serene beaches, and the spiritual calm of Auroville await. Just 3 hours from Chennai, this curated short break is ideal for couples, friends, and small families.</p>',
    highlights: ['French Quarter heritage walk', 'Promenade Beach sunrise', 'Auroville Matrimandir visit', 'Serenity Beach relaxation', 'Local French-Tamil cuisine dinner', 'Rock Beach sunset'],
    inclusions: ['1 night at boutique heritage hotel', 'Breakfast and dinner', 'AC cab Chennai–Pondicherry–Chennai', 'Auroville guided tour', 'Local city tour'],
    exclusions: ['Lunch', 'Personal shopping', 'Water sports', 'Tips'],
    itinerary: [
      { day: 1, title: 'Chennai → Pondicherry', description: 'Early morning departure from Chennai. Arrive Pondicherry by noon. Hotel check-in. Afternoon French Quarter walk and Promenade Beach. Evening Rock Beach sunset and dinner.' },
      { day: 2, title: 'Auroville & Departure', description: 'Morning Auroville Matrimandir and visitor center. Serenity Beach stop. Post-lunch return to Chennai.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80',
    ],
    featured: false,
  },
  {
    title: 'Kodaikanal Princess of Hills',
    destination: 'Kodaikanal, Tamil Nadu',
    duration: '2N / 3D',
    groupSize: '2–20 pax',
    priceFrom: 6999,
    categoryName: 'Hill Station Escapes',
    typeName: 'India Holidays',
    tag: 'COUPLES SPECIAL',
    description: '<p>Kodaikanal — the <strong>Princess of Hill Stations</strong> — is a world of mist, forests, and a shimmering star-shaped lake. This carefully crafted package lets you explore Kodai at a relaxed pace, taking in its natural wonders and cool highland air.</p>',
    highlights: ['Kodaikanal Lake boating', 'Coakers Walk morning stroll', 'Pillar Rocks viewpoint', 'Silver Cascade Waterfalls', 'Bear Shola Falls', 'Berijam Lake (permit required)'],
    inclusions: ['2 nights at hill resort', 'Breakfast and dinner', 'Vehicle transport', 'All sightseeing entry', 'Local guide'],
    exclusions: ['Travel to Kodaikanal', 'Lunch', 'Horse riding', 'Personal expenses'],
    itinerary: [
      { day: 1, title: 'Arrival & Kodaikanal Lake', description: 'Arrive Kodaikanal. Hotel check-in. Afternoon Kodaikanal Lake boating and Bryant Park walk. Cozy dinner at resort.' },
      { day: 2, title: 'Full Day Sightseeing', description: 'Coakers Walk morning. Pillar Rocks, Guna Cave, Devil\'s Kitchen. Afternoon Silver Cascade and Bear Shola Falls.' },
      { day: 3, title: 'Berijam Lake & Departure', description: 'Morning Berijam Lake (prior permit arranged). Post-lunch departure.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1485470733090-0aae1788d5af?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506461883276-594a12b5f735?w=800&q=80',
    ],
    featured: false,
  },
  {
    title: 'Mahabalipuram Heritage Day Tour',
    destination: 'Mahabalipuram, Tamil Nadu',
    duration: '0N / 1D',
    groupSize: '2–40 pax',
    priceFrom: 1499,
    categoryName: 'Heritage Tours',
    typeName: 'India Holidays',
    tag: 'DAY TRIP',
    description: '<p>A <strong>UNESCO World Heritage Site</strong> just 60km from Chennai — Mahabalipuram\'s 7th-century Pallava rock-cut temples and Shore Temple are an architectural marvel. This guided day tour is perfect for history lovers and families wanting a meaningful one-day excursion.</p>',
    highlights: ['Shore Temple at sunrise', 'Five Rathas (Pancha Rathas)', 'Arjuna\'s Penance rock carving', 'Krishna\'s Butter Ball', 'Mahabalipuram beach', 'Tiger Cave'],
    inclusions: ['AC cab from Chennai and back', 'Expert archaeologist guide', 'All entry fees', 'Bottled water throughout'],
    exclusions: ['Meals', 'Personal shopping', 'Camera fees inside monuments'],
    itinerary: [
      { day: 1, title: 'Chennai → Mahabalipuram → Chennai', description: 'Early morning pickup from Chennai. Visit Shore Temple, Five Rathas, Arjuna\'s Penance, Krishna\'s Butter Ball, Mahabalipuram beach. Return by evening.' },
    ],
    thumbnail: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80',
    images: [],
    featured: false,
  },
]

export async function seedDatabase() {
  try {
    // 1. Seed admin
    const hashedPassword = await bcrypt.hash('Eventurism@Admin2025', 12)
    await prisma.admin.upsert({
      where: { email: 'admin@eventurism.com' },
      update: {},
      create: { email: 'admin@eventurism.com', password: hashedPassword, name: 'Eventurism Admin' },
    })

    // 2. Seed Types
    const indiaType = await prisma.type.upsert({
      where: { slug: slugify('India Holidays') },
      update: {},
      create: { name: 'India Holidays', slug: slugify('India Holidays') },
    })

    const intlType = await prisma.type.upsert({
      where: { slug: slugify('International Holidays') },
      update: {},
      create: { name: 'International Holidays', slug: slugify('International Holidays') },
    })

    const typesMap = {
      'India Holidays': indiaType.id,
      'International Holidays': intlType.id,
    }

    // 3. Seed Categories
    const categoriesData = [
      { name: 'Hill Station Escapes', typeId: indiaType.id },
      { name: 'Beach Escapes', typeId: indiaType.id },
      { name: 'Nature Retreats', typeId: indiaType.id },
      { name: 'Heritage Tours', typeId: indiaType.id },
      { name: 'Kerala Escapes', typeId: indiaType.id },
      { name: 'Bali Tour Packages', typeId: intlType.id },
    ]

    const categoryMap: Record<string, string> = {}
    for (const cat of categoriesData) {
      const slug = slugify(cat.name)
      const createdCat = await prisma.category.upsert({
        where: { slug },
        update: {},
        create: { name: cat.name, slug, typeId: cat.typeId },
      })
      categoryMap[cat.name] = createdCat.id
    }

    // 4. Seed packages
    for (const pkg of packages) {
      const slug = slugify(pkg.title)
      const typeId = typesMap[pkg.typeName as keyof typeof typesMap]
      const categoryId = categoryMap[pkg.categoryName]

      const { categoryName, typeName, ...pkgData } = pkg

      await prisma.package.upsert({
        where: { slug },
        update: {
          typeId,
          categoryId
        },
        create: { 
          ...pkgData, 
          slug, 
          typeId,
          categoryId,
          itinerary: pkgData.itinerary as any 
        },
      })
    }

    console.log('✅ Database seeded successfully')
    console.log('Admin: admin@eventurism.com | Password: Eventurism@Admin2025')
  } catch (error) {
    console.error('Seed error:', error)
  }
}

seedDatabase()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
