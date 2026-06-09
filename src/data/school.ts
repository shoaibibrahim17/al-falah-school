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
    address: "Shanti Nagar, Adilabad",
    city: "Adilabad",
    state: "Telangana",
    full: "Shanti Nagar, Adilabad, Telangana",
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
    cta: "Enquire Now",
  },

  /* ── Hero Section ── */
  hero: {
    badge: "Admissions Open for 2026–27",
    headline: "A Strong Foundation for Every Child's Future",
    highlightPhrase: "Strong Foundation",
    subtitle: "A focused learning environment in Shanti Nagar, Adilabad, centred on academic growth, values, and student well-being.",
    cta: "Enquire About Admissions",
    ctaLink: "#contact",
    secondaryCta: "Explore Our School",
    secondaryLink: "#academics",
    admissionCardCta: "Enquire Now",
  },

  /* ── Admission Card (inside Hero) ── */
  admissionCard: {
    badge: "Admissions Enquiry Open",
    year: "Academic Year 2026–27",
    tagline: "Learning · Values · Growth",
    highlights: ["Library", "Playground", "Focused Learning"],
  },

  /* ── Trust Badges (inside Hero) ── */
  trustBadges: [
    { label: "Primary to Secondary" },
    { label: "State Board" },
    { label: "Shanti Nagar, Adilabad" },
    { label: "Admissions Enquiry Open" },
  ],

  /* ── About Section ── */
  about: {
    heading: "About Al-Falah",
    imagePlaceholder: "Our School Campus",
    paragraphs: [
      "Al-Falah High School was founded with a vision to provide accessible, quality education to families in the Adilabad region. We focus on building strong academic foundations while nurturing values that help students grow into responsible individuals.",
      "Our campus in Shanti Nagar, Adilabad, offers a safe and supportive environment where students from Pre-Primary through Secondary receive personal attention in every class.",
    ],
    linkText: "Know more about us",
    linkHref: "#contact",
  },

  /* ── Why Choose Us Section ── */
  whyChooseUs: {
    subtitle: "What families trust about Al-Falah.",
    items: [
      { title: "Experienced Faculty", description: "Our teachers bring years of classroom experience and a genuine commitment to helping every student succeed.", icon: "BookOpen" },
      { title: "Balanced Development", description: "We encourage students to take part in academics, sports, and creative activities for well-rounded growth.", icon: "Sparkles" },
      { title: "Safe & Supportive Campus", description: "A well-maintained campus with a child-safe environment where students feel secure and respected.", icon: "Shield" },
      { title: "Personal Attention", description: "Small class sizes allow teachers to understand each student's strengths and support their individual learning needs.", icon: "Users" },
      { title: "Engaging Classrooms", description: "Our teachers use interactive methods and regular assessments to make learning clear, meaningful, and enjoyable.", icon: "Monitor" },
      { title: "Values-Based Learning", description: "Moral education and character-building activities are part of everyday school life, helping students grow with integrity.", icon: "Heart" },
    ],
  },

  /* ── Academic Levels Section ── */
  academicLevels: {
    subtitle: "A comprehensive academic journey from early childhood to secondary education.",
    levels: [
      { level: "Pre-Primary", ages: "Ages 3–5", description: "A warm, play-based environment that builds early learning skills through curiosity, creativity, and guided play.", icon: "Baby" },
      { level: "Primary", grades: "Grades 1–5", description: "Building strong fundamentals in language, mathematics, science, and social awareness through interactive lessons.", icon: "BookOpen" },
      { level: "Middle School", grades: "Grades 6–8", description: "Developing analytical thinking and subject knowledge with a focus on conceptual understanding and collaboration.", icon: "Library" },
      { level: "Secondary", grades: "Grades 9–10", description: "Preparing students for board examinations with structured guidance, regular practice, and individual support.", icon: "GraduationCap" },
    ],
  },

  /* ── Facilities Section ── */
  facilities: {
    subtitle: "A campus designed to support learning, creativity, and well-being.",
    items: [
      { title: "Spacious Classrooms", description: "Well-lit, ventilated classrooms designed for focused learning and student comfort.", icon: "LayoutGrid" },
      { title: "Science & Computer Labs", description: "Equipped labs where students learn through practical experiments and hands-on activities.", icon: "FlaskConical" },
      { title: "Library", description: "A growing collection of books and reference materials to support reading and research.", icon: "Library" },
      { title: "Playground", description: "Outdoor space for sports and physical activities as part of a healthy school routine.", icon: "Trophy" },
      { title: "Art & Music Room", description: "Spaces for creative expression through art, music, and cultural activities.", icon: "Palette" },
      { title: "Clean & Safe Facilities", description: "Clean drinking water, hygienic washrooms, and well-maintained campus facilities.", icon: "Droplets" },
    ],
  },

  /* ── Gallery Section ── */
  gallery: {
    subtitle: "A look inside our campus and classrooms.",
    images: [
      { alt: "School building exterior", caption: "Our Campus" },
      { alt: "Classroom learning session", caption: "Interactive Classrooms" },
      { alt: "Students in library", caption: "Library Hours" },
      { alt: "Sports day event", caption: "Annual Sports Day" },
      { alt: "Cultural program performance", caption: "Cultural Fest" },
      { alt: "Science lab experiment", caption: "Lab Sessions" },
    ],
  },

  /* ── Latest School Updates Section ── */
  updates: {
    eyebrow: "Latest School Updates",
    heading: "What's Happening at Al-Falah",
    subtitle: "A glance at admissions, school life, and parent communication. Updated regularly.",
  },

  /* ── Posters / Updates (fallback when Sanity is not configured) ──
     Shape mirrors the future Sanity `homepagePoster` schema so the same
     renderer in PosterSlider.astro can consume either source. Keep claims
     evergreen here — specific events/dates must come from the CMS.        */
  posters: [
    {
      _id: "admissions-enquiry-2026-27",
      title: "Admissions Enquiry Open",
      description: "Now accepting enquiries for the 2026–27 academic year. Reach out to learn about classes, the campus, and the enrolment process.",
      image: null,
      imageAlt: "Notice of open admissions enquiry for the 2026–27 academic year at Al-Falah High School",
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
      _id: "school-activities",
      title: "School Activities & Events",
      description: "From classroom learning to creative and cultural activities, school life at Al-Falah is built around balanced growth and engagement.",
      image: null,
      imageAlt: "Visual summary of school activities and student engagement at Al-Falah High School",
      ctaLabel: "See Campus Life",
      ctaHref: "#gallery",
      active: true,
      featured: true,
      order: 2,
      startDate: null,
      endDate: null,
      accent: "green-light" as const,
    },
    {
      _id: "parent-communication",
      title: "Parent Communication & Notices",
      description: "Families can reach the school directly for queries, visit requests, or notices. We keep parents informed through clear and timely communication.",
      image: null,
      imageAlt: "Notice describing the school's approach to parent communication and important notices",
      ctaLabel: "Contact the School",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 3,
      startDate: null,
      endDate: null,
      accent: "deep-green" as const,
    },
  ],

  /* ── Admissions CTA Section ── */
  admissionsCta: {
    heading: "Begin Your Child's Journey",
    subtitle: "Admissions for the 2026–27 academic year are now open. Give your child the gift of quality education.",
    cta: "Enquire About Admissions",
    ctaLink: "#contact",
  },

  /* ── Contact Details ── (phone/email pending; placeholders only) */
  contact: {
    phone: "",
    email: "",
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
    description: "Al-Falah High School is committed to helping every student build confidence, strong values, and a love for learning.",
    quickLinks: [
      { label: "About", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "#",
    },
    copyright: `© ${new Date().getFullYear()} Al-Falah High School. All rights reserved.`,
  },
};
