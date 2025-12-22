// Navigation Data
export const navData = {
  logo: "/logo.png",
  brandName: "NSATWK2026",
  links: [
    { text: "About", href: "#about" },
    { text: "Agenda", href: "#timeline" },
    { text: "Speakers", href: "#mentors" },
    { text: "News", href: "#news" }
  ],
  ctaButton: { text: "Register Now", href: "#register" }
};

// Hero Section Data
export const heroData = {
  badge: "2ND ANNUAL EVENT",
  title: "Nigerian Satellite Week 2026",
  subtitle: "(NSATWK2026)",
  tagline: "Harnessing AI & Space Technologies for Nigeria's Digital Economy",
  date: "February 27-28 2026",
  location: "Abuja Continental Hotel",
  videoSrc: "/hero-background-max-compressed.mp4",
  ctaButtons: [
    { text: "Register for Demo Day", href: "#register", primary: true },
    { text: "Download Agenda", href: "#agenda", primary: false, icon: "download" }
  ]
};

// About Section Data
export const aboutData = {
  title: "About NSATWK2026",
  description: "This is the second edition of Nigeria's premier space technology conference, aimed at fostering innovation and policy development.",
  features: [
    {
      id: 1,
      icon: "./icon-1.png",
      pattern:"./pattern-1.png",
      title: "Showcasing Innovation",
      description: "Highlighting cutting-edge satellite solutions & their applications across sectors."
    },
    {
      id: 2,
       icon: "./icon-2.png",
      pattern:"./pattern-2.png",
      title: "Supporting Startups",
       image:"./supporting_startups.png",
      description: "Propelling startups to the forefront of innovation & growth in the space sector."
    },
    {
      id: 3,
      icon: "./icon-3.png",
      pattern:"./pattern-3.png",
      title: "Market Convergence",
      image:"./market_convergence.png",
      description: "Providing market access by uniting stakeholders in the space industry."
    }
  ]
};

// Timeline Data
export const timelineData = {
  title: "Event Timeline",
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

// Startup Showcase Data - Constellation/Solar System style
export const startupShowcaseData = {
  title: "The Startup Showcase (Demo Day)",
  subtitle: "Displaying the Urban Lift via Systems",
  startups: [
    {
      id: 1,
      name: "SpaceAgri",
      category: "AgriTech",
      description: "Satellite-based precision agriculture solutions for Nigerian farmers. Using advanced imagery to optimize crop yields.",
      founded: "2022",
      funding: "$500K",
      website: "https://spaceagri.ng",
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
      logo: "/startups/urbansight-logo.png"
    }
  ]
};

// Mentors Data
export const mentorsData = {
  title: "The Mentors",
  description: "Meet the seasoned professionals guiding the next generation of space entrepreneurs and startup founders.",
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

// Hosts & Keynotes Data
export const hostsData = {
  title: "The Hosts & Keynotes",
  description: "Meet the seasoned professionals guiding the next generation of space entrepreneurs as it grow startups in Africa.",
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

// Panelists/Institutions Data
export const panelistsData = {
  title: "The Panelists (Institutions)",
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

// Countdown Data
export const countdownData = {
  title: "Countdown to NSATWK2026",
  description: "Join us for 2 days to learn and enjoy fun-filled events exploring the future of satellites.",
  targetDate: "2026-02-27T09:00:00",
  backgroundVideo:"./bg.mp4"
};

// Footer Data
export const footerData = {
  logo: "/logo.png",
  companyName: "NIDCOMP",
  tagline: "Driving Nigeria's Space Economy",
  address: "Plot 564 A Cadastral Zone, Abuja",
  phone: "+234 9038 886 785",
  email: "info@nidcomp.com",
  workingHours: "9am—5pm",
  socialLinks: [
    { platform: "twitter", url: "#", icon: "twitter" },
    { platform: "linkedin", url: "#", icon: "linkedin" },
    { platform: "instagram", url: "#", icon: "instagram" },
    { platform: "facebook", url: "#", icon: "facebook" }
  ],
  navLinks: [
    { text: "Agenda", href: "#timeline" },
    { text: "Speakers", href: "#mentors" },
    { text: "Partners", href: "#panelists" }
  ]
};