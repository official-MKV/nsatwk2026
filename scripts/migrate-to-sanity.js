/**
 * Migration script to push data from data.js to Sanity
 *
 * Usage: node scripts/migrate-to-sanity.js
 */

import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: path.join(process.cwd(), '.env') });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Sanity client with write permissions
const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID || '0euo9kc6',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_DEVELOPER_TOKEN,
});

// Import data from data.js (we'll manually define it here to avoid import issues)
const hostsData = {
  hosts: [
    {
      id: 1,
      name: "Jane Egerton-Idehen",
      role: "Host",
      organization: "Space Innovation Hub",
      image: "/speaker-1.png"
    },
    {
      id: 2,
      name: "Dr. Nasun Tipre",
      role: "Keynote Speaker",
      organization: "NASRDA",
      image: "/speaker-2.png"
    },
    {
      id: 3,
      name: "Lieutenant General Olufemi Oluyede",
      role: "Special Guest",
      organization: "Nigerian Army",
      image: "/speaker-1.png"
    },
    {
      id: 4,
      name: "Kashifu Inuwa Abdullahi",
      role: "Keynote Speaker",
      organization: "NITDA",
      image: "/hosts/host4.jpg"
    }
  ]
};

const startupsData = {
  startups: [
    {
      id: 1,
      name: "SpaceAgri",
      category: "AgriTech",
      description: "Satellite-based precision agriculture solutions for Nigerian farmers. Using advanced imagery to optimize crop yields.",
      founded: "2022",
      funding: "$500K",
      website: "https://spaceagri.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/logo.png"
    },
    {
      id: 2,
      name: "OrbitComms",
      category: "Telecommunications",
      description: "Low-cost satellite internet solutions bridging the digital divide in rural communities across Nigeria.",
      founded: "2021",
      funding: "$1.2M",
      website: "https://orbitcomms.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/orbitcomms-logo.png"
    },
    {
      id: 3,
      name: "GeoSecure",
      category: "Security",
      description: "Geospatial intelligence and surveillance systems providing real-time security monitoring.",
      founded: "2023",
      funding: "$750K",
      website: "https://geosecure.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/geosecure-logo.png"
    },
    {
      id: 4,
      name: "SatHealth",
      category: "HealthTech",
      description: "Telemedicine platform powered by satellite connectivity reaching remote healthcare facilities.",
      founded: "2022",
      funding: "$600K",
      website: "https://sathealth.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/sathealth-logo.png"
    },
    {
      id: 5,
      name: "AstroLogistics",
      category: "Logistics",
      description: "Satellite tracking and fleet management solutions for efficient supply chain operations.",
      founded: "2021",
      funding: "$900K",
      website: "https://astrologistics.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/astrologistics-logo.png"
    },
    {
      id: 6,
      name: "EarthWatch",
      category: "Environment",
      description: "Climate monitoring and environmental analysis platform tracking deforestation and pollution.",
      founded: "2023",
      funding: "$450K",
      website: "https://earthwatch.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/earthwatch-logo.png"
    },
    {
      id: 7,
      name: "NaviSat",
      category: "Navigation",
      description: "Precision navigation systems for maritime and aviation industries across West Africa.",
      founded: "2020",
      funding: "$1.5M",
      website: "https://navisat.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/navisat-logo.png"
    },
    {
      id: 8,
      name: "DataOrbit",
      category: "Data Analytics",
      description: "Big data analytics platform processing satellite imagery for actionable business insights.",
      founded: "2022",
      funding: "$800K",
      website: "https://dataorbit.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/dataorbit-logo.png"
    },
    {
      id: 9,
      name: "SpaceEdu",
      category: "EdTech",
      description: "Space science education and STEM programs inspiring the next generation of Nigerian scientists.",
      founded: "2023",
      funding: "$300K",
      website: "https://spaceedu.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/spaceedu-logo.png"
    },
    {
      id: 10,
      name: "SolarNet",
      category: "Energy",
      description: "Solar energy optimization using satellite data for renewable energy project planning.",
      founded: "2021",
      funding: "$700K",
      website: "https://solarnet.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/solarnet-logo.png"
    },
    {
      id: 11,
      name: "AquaSat",
      category: "Water Management",
      description: "Water resource monitoring and management systems for sustainable water usage.",
      founded: "2022",
      funding: "$550K",
      website: "https://aquasat.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/aquasat-logo.png"
    },
    {
      id: 12,
      name: "UrbanSight",
      category: "Urban Planning",
      description: "Smart city planning with satellite analytics enabling data-driven urban development.",
      founded: "2023",
      funding: "$650K",
      website: "https://urbansight.ng",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      logo: "/startups/urbansight-logo.png"
    }
  ]
};

const timelineData = {
  events: [
    {
      id: 1,
      day: "Pre-Event",
      date: "Feb 26, 2026",
      title: "Satellite Week Cocktail Soiree",
      time: "6:00PM - 10:00PM",
      venue: "Transcorp Hilton Hotel Towers",
      location: "Abuja",
      description: "An exclusive evening of networking and innovation",
      highlights: "Stakeholder matchmaking, pitch night keynote, and cocktail reception",
      image: "/background.jpg",
      activities: [
        "Networking cocktail reception",
        "Stakeholder matchmaking sessions",
        "Pitch night keynote address"
      ]
    },
    {
      id: 2,
      day: "Day 1",
      date: "Feb 27, 2026",
      title: "Opening Ceremony & Keynotes",
      time: "9:00AM - 5:00PM",
      venue: "Abuja Continental Hotel",
      location: "Abuja",
      description: "Kick-off with industry leaders and space tech innovations",
      highlights: "Welcome address, keynote speeches, and panel discussions on satellite technology trends",
      image: "/background.jpg",
      activities: [
        "Official opening ceremony",
        "Panel discussions on space tech",
        "Startup exhibition booths",
        "Networking lunch"
      ]
    },
    {
      id: 3,
      day: "Day 1",
      date: "Feb 27, 2026",
      title: "Workshops & Exhibitions",
      time: "2:00PM - 5:00PM",
      venue: "Abuja Continental Hotel",
      location: "Abuja",
      description: "Interactive sessions and technology showcases",
      highlights: "Hands-on workshops, startup exhibitions, and technology demonstrations",
      image: "/background.jpg",
      activities: [
        "Technical workshops",
        "Startup booth exhibitions",
        "Live product demos",
        "Q&A sessions"
      ]
    },
    {
      id: 4,
      day: "Day 2",
      date: "Feb 28, 2026",
      title: "Demo Day & Pitches",
      time: "9:00AM - 1:00PM",
      venue: "Abuja Continental Hotel",
      location: "Abuja",
      description: "Showcase innovations and pitch to investors",
      highlights: "Startup demonstrations, investor pitches, and product launches",
      image: "/background.jpg",
      activities: [
        "Startup demo presentations",
        "Investor pitch sessions",
        "Product launch announcements",
        "Networking sessions"
      ]
    },
    {
      id: 5,
      day: "Day 2",
      date: "Feb 28, 2026",
      title: "Awards & Closing Ceremony",
      time: "2:00PM - 6:00PM",
      venue: "Abuja Continental Hotel",
      location: "Abuja",
      description: "Celebrate achievements and close the event",
      highlights: "Awards ceremony, recognition of innovators, and closing remarks",
      image: "/background.jpg",
      activities: [
        "Innovation awards ceremony",
        "Startup recognition",
        "Closing keynote address",
        "Networking reception"
      ]
    }
  ]
};

const mentorsData = {
  mentors: [
    {
      id: 1,
      name: "Jane Egerton-Idehen",
      title: "CEO & Founder",
      organization: "Space Innovation Hub",
      image: "/mentors/mentor1.jpg",
      bio: "Former Microsoft executive with 20+ years in tech leadership across Africa."
    },
    {
      id: 2,
      name: "Dr. Nasun Tipre",
      title: "Director",
      organization: "NASRDA",
      image: "/mentors/mentor2.jpg",
      bio: "Leading researcher in satellite communications and space policy development."
    },
    {
      id: 3,
      name: "Lieutenant General Olufemi Oluyede",
      title: "Chief of Army Staff",
      organization: "Nigerian Army",
      image: "/mentors/mentor3.jpg",
      bio: "Defense satellite communications specialist with decades of experience."
    },
    {
      id: 4,
      name: "Kashifu Inuwa Abdullahi",
      title: "Director General",
      organization: "NITDA",
      image: "/mentors/mentor4.jpg",
      bio: "Director General of Nigeria's IT Development Agency driving digital transformation."
    }
  ]
};

const panelistsData = {
  categories: [
    {
      name: "Representing Tech",
      institutions: [
        { id: 1, name: "NASENI", logo: "/logos/naseni.png" },
        { id: 2, name: "Ministry", logo: "/logos/ministry.png" },
        { id: 3, name: "MOFI", logo: "/logos/mofi.png" },
        { id: 4, name: "ONDI", logo: "/logos/ondi.png" }
      ]
    },
    {
      name: "Representing Investment",
      institutions: [
        { id: 5, name: "NCC", logo: "/logos/ncc.png" },
        { id: 6, name: "INTELSAT", logo: "/logos/intelsat.png" },
        { id: 7, name: "3MTT", logo: "/logos/3mtt.png" },
        { id: 8, name: "FUTURE AFRICA", logo: "/logos/future-africa.png" }
      ]
    }
  ]
};

async function migrateHosts() {
  console.log('Migrating hosts...');

  for (const host of hostsData.hosts) {
    try {
      const doc = {
        _type: 'host',
        name: host.name,
        role: host.role,
        organization: host.organization,
        // Note: Images will need to be uploaded separately or via assets API
        // For now, we'll store the image path as a reference
        imagePath: host.image,
      };

      const result = await client.create(doc);
      console.log(`✓ Created host: ${host.name}`);
    } catch (error) {
      console.error(`✗ Failed to create host ${host.name}:`, error.message);
    }
  }
}

async function migrateStartups() {
  console.log('\nMigrating startups...');

  for (const startup of startupsData.startups) {
    try {
      const doc = {
        _type: 'startup',
        name: startup.name,
        category: startup.category,
        description: startup.description,
        founded: startup.founded,
        funding: startup.funding,
        website: startup.website,
        video: startup.video,
        logoPath: startup.logo,
      };

      const result = await client.create(doc);
      console.log(`✓ Created startup: ${startup.name}`);
    } catch (error) {
      console.error(`✗ Failed to create startup ${startup.name}:`, error.message);
    }
  }
}

async function migrateTimeline() {
  console.log('\nMigrating timeline events...');

  for (const event of timelineData.events) {
    try {
      const doc = {
        _type: 'timelineEvent',
        day: event.day,
        date: new Date(event.date).toISOString(),
        title: event.title,
        time: event.time,
        venue: event.venue,
        location: event.location,
        description: event.description,
        highlights: event.highlights,
        imagePath: event.image,
        activities: event.activities,
      };

      const result = await client.create(doc);
      console.log(`✓ Created timeline event: ${event.title}`);
    } catch (error) {
      console.error(`✗ Failed to create timeline event ${event.title}:`, error.message);
    }
  }
}

async function migrateMentors() {
  console.log('\nMigrating mentors...');

  for (const mentor of mentorsData.mentors) {
    try {
      const doc = {
        _type: 'mentor',
        name: mentor.name,
        title: mentor.title,
        organization: mentor.organization,
        bio: mentor.bio,
        imagePath: mentor.image,
      };

      const result = await client.create(doc);
      console.log(`✓ Created mentor: ${mentor.name}`);
    } catch (error) {
      console.error(`✗ Failed to create mentor ${mentor.name}:`, error.message);
    }
  }
}

async function migratePanelists() {
  console.log('\nMigrating panelist categories...');

  for (const category of panelistsData.categories) {
    try {
      const doc = {
        _type: 'panelistCategory',
        name: category.name,
        institutions: category.institutions.map(inst => ({
          _type: 'object',
          name: inst.name,
          logoPath: inst.logo,
        })),
      };

      const result = await client.create(doc);
      console.log(`✓ Created panelist category: ${category.name}`);
    } catch (error) {
      console.error(`✗ Failed to create panelist category ${category.name}:`, error.message);
    }
  }
}

async function deleteAllDocuments() {
  console.log('\nDeleting existing documents...');

  const types = ['host', 'startup', 'timelineEvent', 'mentor', 'panelistCategory'];

  for (const type of types) {
    try {
      const query = `*[_type == "${type}"]`;
      const docs = await client.fetch(query);

      for (const doc of docs) {
        await client.delete(doc._id);
      }

      console.log(`✓ Deleted ${docs.length} ${type} documents`);
    } catch (error) {
      console.error(`✗ Failed to delete ${type} documents:`, error.message);
    }
  }
}

async function main() {
  console.log('Starting migration to Sanity...\n');
  console.log('Project ID:', process.env.SANITY_PROJECT_ID);
  console.log('Dataset: production\n');

  try {
    // Optionally delete existing data (uncomment if you want to start fresh)
    // await deleteAllDocuments();

    await migrateHosts();
    await migrateStartups();
    await migrateTimeline();
    await migrateMentors();
    await migratePanelists();

    console.log('\n✓ Migration completed successfully!');
  } catch (error) {
    console.error('\n✗ Migration failed:', error);
    process.exit(1);
  }
}

main();
