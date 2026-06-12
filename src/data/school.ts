export const SCHOOL = {
  /* ── Core ── */
  name: "Al-Falah High School",
  shortName: "Al-Falah",
  initials: "AF",
  tagline: "Strong Foundations for Lifelong Learning",
  description: "A learning community where students build strong academic foundations, develop good values, and grow with confidence.",

  /* ── SEO ── */
  seo: {
    canonicalUrl: "https://shoaibibrahim17.github.io/al-falah-school/",
    ogImage: "og-image.jpg",
  },

  /* ── Location ── (verified from Google Maps + JustDial listings) */
  location: {
    address: "# 1-2-56/26 Shanti Nagar Road, Bokkalguda, Adilabad",
    city: "Adilabad",
    state: "Telangana",
    full: "# 1-2-56/26 Shanti Nagar Road, Bokkalguda, Adilabad - 504001",
    coordinates: { lat: 19.6690535, lng: 78.5415095 },
  },

  /* ── Navigation ── */
  nav: {
    links: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    cta: "Parent Form",
    ctaLink: "#parent-form",
  },

  /* ── Hero Section ── */
  hero: {
    badge: "Admissions Open for 2026–27",
    headline: "Al-Falah High School",
    subtitle: "A neighbourhood school on Shanti Nagar Road focused on building strong basics, good habits, and clear communication with parents.",
    cta: "Admission Enquiry",
    ctaLink: "#contact",
    secondaryCta: "Learn More",
    secondaryLink: "#about",
    /* Background image — subtle blurred atmosphere behind hero content */
    backgroundImage: {
      src: "/images/hero/al-falah-hero-bg.png",
      alt: "",
      isActive: true,
    },
    /* Foreground visual — clear school building card on right */
    visualImage: {
      src: "/images/hero/al-falah-building-card.png",
      alt: "Exterior view of Al-Falah High School building",
      caption: "School building exterior",
      isActive: true,
    },
  },

  /* ── Trust Badges (inside Hero) ── */
  trustBadges: [
    { label: "English Medium" },
    { label: "State Board" },
    { label: "Admissions Enquiry Open" },
  ],

  /* ── About Section ── */
  about: {
    heading: "About Al-Falah",
    imagePlaceholder: "Our School Campus",
    paragraphs: [
      "Al-Falah High School is an English-medium school in Bokkalguda, Adilabad. We serve students from the local neighbourhood and surrounding areas, focusing on clear basics, regular practice, and honest communication with parents.",
      "The school is located on Shanti Nagar Road and is reachable for admission enquiries, school visits, and general questions during office hours.",
    ],
    linkText: "Contact the school office",
    linkHref: "#contact",
  },

  /* ── What Parents Can Expect Section ── */
  whatParentsCanExpect: {
    subtitle: "Here's what parents and students can expect at Al-Falah.",
    items: [
      { title: "Academic Focus", description: "Clear, structured lessons in language, mathematics, science, and social studies following the state board curriculum.", icon: "BookOpen" },
      { title: "Values & Discipline", description: "Daily habits and conduct are part of school life — punctuality, respect, and honest work are encouraged consistently.", icon: "Sparkles" },
      { title: "Parent-Friendly Communication", description: "The school office is reachable for queries, visit requests, and regular updates. Parents are kept informed.", icon: "Shield" },
      { title: "Admission Guidance", description: "The admission process is straightforward. The school office helps parents with forms, documents, and enquiries.", icon: "Users" },
      { title: "School Office Support", description: "For fee queries, leave applications, exam schedules, and general concerns — the school office assists parents directly.", icon: "Monitor" },
      { title: "Clean Learning Environment", description: "A simple, well-kept campus with adequate space for learning activities and basic amenities.", icon: "Heart" },
    ],
  },

  /* ── Academic Levels Section ── */
  academicLevels: {
    subtitle: "Classes offered from Pre-Primary through Secondary. The school follows the state board curriculum.",
    levels: [
      { level: "Pre-Primary", ages: "Ages 3–5", description: "A warm, play-based environment that builds early learning skills through curiosity, creativity, and guided play.", icon: "Baby" },
      { level: "Primary", grades: "Grades 1–5", description: "Building strong fundamentals in language, mathematics, science, and social awareness through interactive lessons.", icon: "BookOpen" },
      { level: "Middle School", grades: "Grades 6–8", description: "Developing analytical thinking and subject knowledge with a focus on conceptual understanding and collaboration.", icon: "Library" },
      { level: "Secondary", grades: "Grades 9–10", description: "Preparing students for board examinations with structured guidance, regular practice, and individual support.", icon: "GraduationCap" },
      { level: "Higher Secondary", grades: "Grades 11–12", description: "Specialised streams for Science and Commerce with focused board preparation and career guidance.", icon: "BookOpen" },
    ],
  },

  /* ── Facilities Section ── */
  facilities: {
    subtitle: "Basic facilities available for students during school hours.",
    items: [
      { title: "Classrooms", description: "Well-lit and ventilated rooms set up for regular classroom learning and exams.", icon: "LayoutGrid" },
      { title: "Reading Room", description: "A quiet space where students can read and study during free periods.", icon: "FlaskConical" },
      { title: "Study Resources", description: " textbooks and basic reference materials are available for student use.", icon: "Library" },
      { title: "Play Area", description: "Basic outdoor space for daily recess and physical activities.", icon: "Trophy" },
      { title: "School Office", description: "The administrative office handles admissions, fee collections, and parent enquiries.", icon: "Palette" },
      { title: "Basic Amenities", description: "Clean drinking water and maintained washroom facilities for students.", icon: "Droplets" },
    ],
  },

  /* ── Gallery Section ── */
  gallery: {
    subtitle: "Glimpses of school life — activities, classrooms, and events from campus.",
    categories: [
      {
        id: "activities",
        name: "Activities",
        subtitle: "Students engaged in creative and cultural activities",
        coverImage: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25.jpeg",
        isActive: true,
        order: 1,
        images: [
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.23 (1).jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.23.jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.24 (1).jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.24 (2).jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25 (1).jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25 (2).jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25.jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.44.42.jpeg" },
          { alt: "School activity photo", caption: "", src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.47.25.jpeg" },
        ],
      },
      {
        id: "classrooms",
        name: "Classrooms",
        subtitle: "Learning spaces and classroom environments",
        coverImage: "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.04.jpeg",
        isActive: true,
        order: 2,
        images: [
          { alt: "Classroom photo", caption: "", src: "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.04.jpeg" },
          { alt: "Classroom photo", caption: "", src: "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.25.jpeg" },
        ],
      },
      {
        id: "events",
        name: "Events",
        subtitle: "School events, celebrations, and gatherings",
        coverImage: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.26.jpeg",
        isActive: true,
        order: 3,
        images: [
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.26.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.27.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.28 (2).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29 (1).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29 (2).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30 (1).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30 (2).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.31 (1).jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.31.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.45.32.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.51.16.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.51.48.jpeg" },
          { alt: "School event photo", caption: "", src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.52.21.jpeg" },
          { type: "video", alt: "School event video", caption: "School Event", src: "/videos/gallery/WhatsApp Video 2026-06-10 at 14.46.24.mp4" },
        ],
      },
    ],
  },

  /* ── Principal's Message ── */
  principalMessage: {
    enabled: false, // Set to true once message is provided by the school
    heading: "A Message from Our Principal",
    placeholderNote: "The principal's message will be added once confirmed by the school.",
    name: null,
    designation: null,
    message: null,
    image: null,
    imageAlt: null,
  },

  /* ── Faculty Section ── */
  faculty: {
    enabled: false, // Set to true once faculty list is provided by the school
    heading: "Our Faculty",
    subtitle: "Dedicated teachers committed to every student's growth and learning.",
    placeholderNote: "Faculty details will be added soon.",
    members: [], // { name, designation, department, image, imageAlt, profileUrl }
  },

  /* ── School Notice Board ── */
  noticeBoard: {
    eyebrow: "Important Notices",
    heading: "School Notice Board",
    subtitle: "Stay informed about admissions, school updates, and important announcements.",
    notices: [
      {
        id: "admissions-enquiry-open",
        title: "Admissions Enquiry Open",
        description: "Parents can contact the school office for admission-related questions for the 2026–27 academic year.",
        noticeDate: "2026-06-01",
        category: "Admission",
        priority: "important" as "normal" | "important" | "urgent",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 1,
        startDate: null,
        endDate: null,
        // CMS-ready: set pdf when a real notice PDF is uploaded through Sanity.
        pdf: null,
      },
      {
        id: "documents-required",
        title: "Documents Required for Admission",
        description: "Parents are requested to keep basic student and parent documents ready during the admission enquiry process.",
        noticeDate: "2026-06-05",
        category: "Documents",
        priority: "normal" as "normal" | "important" | "urgent",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 2,
        startDate: null,
        endDate: null,
        // CMS-ready: set pdf when a real notice PDF is uploaded through Sanity.
        pdf: null,
      },
      {
        id: "school-visit-enquiries",
        title: "School Visit Enquiries",
        description: "Parents may contact the school office before visiting the campus for admission or general enquiries.",
        noticeDate: "2026-06-08",
        category: "Visit",
        priority: "normal" as "normal" | "important" | "urgent",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 3,
        startDate: null,
        endDate: null,
        // CMS-ready: set pdf when a real notice PDF is uploaded through Sanity.
        pdf: null,
      },
    ],
  },

  /* ── Latest School Updates Section ── */
  updates: {
    eyebrow: "Updates",
    heading: "School Updates",
    subtitle: "Admission news, school announcements, and important information for parents.",
  },

  /* ── Posters / Updates (fallback when Sanity is not configured) ──
     Shape mirrors the future Sanity `homepagePoster` schema so the same
     renderer in PosterSlider.astro can consume either source. Keep claims
     evergreen here — specific events/dates must come from the CMS.        */
  posters: [
    {
      _id: "admissions-enquiry-2026-27",
      title: "Admissions Open",
      description: "Admission enquiries for the 2026–27 academic year are welcome. Parents can visit the school office or fill the parent form.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.40.26 (1).jpeg",
      imageAlt: "Admissions Open poster",
      ctaLabel: "Enquire Now",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 1,
      startDate: null,
      endDate: null,
      accent: "deep-green" as const,
    },
    {
      _id: "school-office-hours",
      title: "School Office",
      description: "The school office is open for parent enquiries, admission forms, and general questions during working hours.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.41.14.jpeg",
      imageAlt: "School Office poster",
      ctaLabel: "Visit School",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 2,
      startDate: null,
      endDate: null,
      accent: "green-light" as const,
    },
    {
      _id: "parent-communication",
      title: "Parent Communication",
      description: "Parents can reach the school office directly for updates on fees, exams, holidays, and student progress.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.41.54.jpeg",
      imageAlt: "Parent Communication poster",
      ctaLabel: "Fill Parent Form",
      ctaHref: "#parent-form",
      active: true,
      featured: true,
      order: 3,
      startDate: null,
      endDate: null,
      accent: "deep-green" as const,
    },
    {
      _id: "school-update-4",
      title: "School Update",
      description: "Stay connected with the school for the latest updates, events, and announcements.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.53.30.jpeg",
      imageAlt: "School Update poster",
      ctaLabel: "Learn More",
      ctaHref: "#updates",
      active: true,
      featured: true,
      order: 4,
      startDate: null,
      endDate: null,
      accent: "deep-green" as const,
    },
  ],

  /* ── Admissions CTA Section ── */
  admissionsCta: {
    heading: "Admission Enquiry",
    subtitle: "Admissions for the 2026–27 academic year are open. Parents can visit the school office or fill the parent form to enquire.",
    cta: "Fill Parent Form",
    ctaLink: "#parent-form",
  },

  /* ── Contact Details ── */
  contact: {
    phone: "9030396250, 7981757850",
    email: "alfalahinternationalschool@gmail.com",
  },

  /* ── Parent Enquiry & Feedback Form ── */
  parentForm: {
    enabled: true,
    label: "For Parents",
    heading: "Parent Help Desk",
    description: "Use this form for admission enquiries, general questions, suggestions, complaints, or callback requests. Your message will be reviewed by the school office.",
    requestTypes: [
      "Admission Enquiry",
      "General Enquiry",
      "Complaint / Concern",
      "Suggestion",
      "Request Callback",
    ],
    panel: {
      title: "Send your Enquiry",
      description: "Your message goes directly to the school office. We respond to all enquiries within working hours.",
      ctaLabel: "Submit Enquiry",
      note: "Please share a working phone number so we can reach you if needed.",
      urlPlaceholder: "Form link will be available soon",
    },
    // Replace with your real Google Form link when ready.
    // Example formats:
    //   https://forms.gle/XXXXXXXXXXXXXXXX
    //   https://docs.google.com/forms/d/e/XXXXXXXX/viewform
    url: "https://docs.google.com/forms/d/e/1FAIpQLScFgy0IChSjjfbtUkAiuXaMOfE2ofdpNWfYl8Qxl8hiMbdlZw/viewform?usp=header",
  },

  /* ── Location / Contact Section ── */
  locationSection: {
    subtitle: "We'd love to hear from you. Reach out to us for admissions, enquiries, or a campus visit.",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },

  /* ── Footer ── */
  footer: {
    description: "An English Medium school in Adilabad focused on learning, discipline, values, and parent-friendly communication.",
    quickLinks: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
    ],
    parentSupportLinks: [
      { label: "Admissions Enquiry", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Location", href: "#contact" },
    ],
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "https://youtube.com/@schoolalfalah1364?si=uKc-gDUSJv5PKJCn",
      whatsapp: "https://wa.me/919030396250",
    },
    copyright: `© ${new Date().getFullYear()} Al-Falah High School. All rights reserved.`,
  },
};
