export type AdmissionCardAnimation = "pulse" | "shine" | "both";
export type NoticePriority = "normal" | "important" | "urgent";
export type PosterAccent = "deep-green" | "green-light";
export type GalleryMediaType = "image" | "video";
export type CmsIconName =
  | "Atom"
  | "Award"
  | "Baby"
  | "BookOpen"
  | "BookOpenCheck"
  | "Droplets"
  | "FlaskConical"
  | "GraduationCap"
  | "Heart"
  | "HeartHandshake"
  | "LayoutGrid"
  | "Library"
  | "MessageCircle"
  | "Mic"
  | "Monitor"
  | "Palette"
  | "Shield"
  | "Sparkles"
  | "Trophy"
  | "Users";

export interface LinkItem {
  label: string;
  href: string;
}

export interface SplitHeadingContent {
  enabled: boolean;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
}

export interface SectionImage {
  src: string | null;
  alt: string;
  caption: string;
  isActive: boolean;
}

export interface HeroAdmissionCardContent {
  enabled: boolean;
  style: AdmissionCardAnimation;
  badge: string;
  eyebrow: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface HeroSection {
  badge: string;
  headline: string;
  subtitle: string;
  cta: string;
  ctaLink: string;
  secondaryCta: string;
  secondaryLink: string;
  admissionCard: HeroAdmissionCardContent;
  backgroundImage: SectionImage;
  visualImage: SectionImage;
}

export interface AboutSection extends SplitHeadingContent {
  heading: string;
  imagePlaceholder: string;
  placeholderTitle: string;
  placeholderDescription: string;
  image: SectionImage;
  paragraphs: string[];
  linkText: string;
  linkHref: string;
}

export interface IconFeatureItem {
  title: string;
  description: string;
  icon: CmsIconName;
}

export interface ParentExpectationsSection extends SplitHeadingContent {
  items: IconFeatureItem[];
}

export interface AcademicLevelItem {
  level: string;
  ages?: string;
  grades?: string;
  description: string;
  icon: CmsIconName;
}

export interface AcademicLevelsSection extends SplitHeadingContent {
  levels: AcademicLevelItem[];
}

export interface FacilitiesSection extends SplitHeadingContent {
  items: IconFeatureItem[];
}

export interface GalleryMediaItem {
  src: string;
  alt: string;
  caption: string;
  type?: GalleryMediaType;
}

export interface GalleryCategory {
  id: string;
  name: string;
  subtitle: string;
  coverImage: string;
  isActive: boolean;
  order: number;
  images: GalleryMediaItem[];
}

export interface GallerySection extends SplitHeadingContent {
  emptyState: string;
  categories: GalleryCategory[];
}

export interface PrincipalValueCard {
  label: string;
  icon: CmsIconName;
}

export interface PrincipalMessageSection {
  enabled: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  animatedLine: string;
  valuesHeading: string;
  valuesDescription: string;
  body: string[];
  authorLabel: string;
  authorLocation: string;
  valueCards: PrincipalValueCard[];
  image: string | null;
  imageAlt: string | null;
}

export interface AcademicHighlightItem extends IconFeatureItem {
  id: string;
  highlight?: boolean;
}

export interface AcademicHighlightGroup {
  title: string;
  itemIds: string[];
}

export interface AcademicHighlightsSection {
  enabled: boolean;
  eyebrow: string;
  title: string;
  subtitle: string;
  groups: AcademicHighlightGroup[];
  items: AcademicHighlightItem[];
}

export interface NoticePdf {
  label: string;
  file: string;
  uploadedDate: string | null;
}

export interface SchoolNotice {
  id: string;
  title: string;
  description: string;
  noticeDate: string | null;
  category: string;
  priority: NoticePriority;
  ctaLabel: string | null;
  ctaHref: string | null;
  isActive: boolean;
  order: number;
  startDate: string | null;
  endDate: string | null;
  pdf: NoticePdf | null;
}

export interface NoticeBoardSection {
  enabled: boolean;
  eyebrow: string;
  heading: string;
  subtitle: string;
  maxItems: number;
  notices: SchoolNotice[];
}

export interface PosterItem {
  _id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  active: boolean;
  featured: boolean;
  order: number;
  startDate: string | null;
  endDate: string | null;
  accent: PosterAccent;
}

export interface AdmissionsCtaSection {
  enabled: boolean;
  pillLabel: string;
  heading: string;
  subtitle: string;
  primaryCta: string;
  primaryCtaLink: string;
  secondaryCta: string;
  secondaryCtaLink: string;
}

export interface ParentFormSection {
  enabled: boolean;
  label: string;
  heading: string;
  description: string;
  requestTypesLabel: string;
  requestTypes: string[];
  panel: {
    title: string;
    description: string;
    ctaLabel: string;
    note: string;
    urlPlaceholder: string;
  };
  url: string;
}

export interface LocationSection {
  enabled: boolean;
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  subtitle: string;
  cardHeading: string;
  directionsLabel: string;
  addressLabel: string;
  phoneLabel: string;
  emailLabel: string;
}

export interface FooterSection {
  identityLine: string;
  description: string;
  quickLinksTitle: string;
  quickLinks: LinkItem[];
  parentSupportTitle: string;
  parentSupportLinks: LinkItem[];
  socialTitle: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    youtube: string;
    whatsapp: string;
  };
  copyright: string;
}

export interface SchoolData {
  name: string;
  shortName: string;
  initials: string;
  tagline: string;
  description: string;
  seo: {
    canonicalUrl: string;
    ogImage: string;
  };
  location: {
    address: string;
    city: string;
    state: string;
    full: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  nav: {
    links: LinkItem[];
    cta: string;
    ctaLink: string;
  };
  hero: HeroSection;
  trustBadges: { label: string }[];
  about: AboutSection;
  whatParentsCanExpect: ParentExpectationsSection;
  academicLevels: AcademicLevelsSection;
  facilities: FacilitiesSection;
  gallery: GallerySection;
  principalMessage: PrincipalMessageSection;
  academicHighlights: AcademicHighlightsSection;
  faculty: {
    enabled: boolean;
    heading: string;
    subtitle: string;
    placeholderNote: string;
    members: Array<{
      name: string;
      designation: string;
      department?: string;
      image?: string;
      imageAlt?: string;
      profileUrl?: string;
    }>;
  };
  noticeBoard: NoticeBoardSection;
  updates: {
    enabled: boolean;
    eyebrow: string;
    heading: string;
    subtitle: string;
  };
  posters: PosterItem[];
  admissionsCta: AdmissionsCtaSection;
  contact: {
    phones: Array<{
      display: string;
      href: string;
    }>;
    email: string;
  };
  parentForm: ParentFormSection;
  locationSection: LocationSection;
  footer: FooterSection;
}

export const SCHOOL: SchoolData = {
  /* ── Core ── */
  name: "Al-Falah High School",
  shortName: "Al-Falah",
  initials: "AF",
  // Confirm final official naming with the school before final delivery.
  tagline: "Strong Foundations for Lifelong Learning",
  description:
    "A learning community where students build strong academic foundations, develop good values, and grow with confidence.",

  /* ── SEO ── */
  seo: {
    canonicalUrl: "https://shoaibibrahim17.github.io/al-falah-school/",
    ogImage: "/images/hero/al-falah-building-card.png",
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
    cta: "Contact",
    ctaLink: "#contact",
  },

  /* ── Hero Section ── */
  hero: {
    badge: "Admissions Open for 2026–27",
    headline: "Al-Falah High School",
    subtitle:
      "A neighbourhood school on Shanti Nagar Road focused on building strong basics, good habits, and clear communication with parents.",
    cta: "Admission Enquiry",
    ctaLink: "#parent-form",
    secondaryCta: "Learn More",
    secondaryLink: "#about",
    /* Admission card attention animation (CMS-managed).
       The hero admission card can be disabled, restyled, or updated
       later from Sanity without changing the component. */
    admissionCard: {
      enabled: true,
      style: "pulse",
      badge: "Admissions Enquiry Open",
      eyebrow: "Academic Year 2026–27",
      headline: "basics · habits · growth",
      ctaLabel: "Enquire Now",
      ctaHref: "#parent-form",
    },
    /* Background image — subtle blurred atmosphere behind hero content */
    backgroundImage: {
      src: "/images/hero/al-falah-hero-bg.png",
      alt: "",
      caption: "",
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
    enabled: true,
    eyebrow: "Our Story",
    titleLead: "About",
    titleAccent: "Al-Falah",
    subtitle: "",
    heading: "About Al-Falah",
    imagePlaceholder: "School campus photo",
    placeholderTitle: "Campus photo will be added soon.",
    placeholderDescription:
      "The school image area is intentionally hidden until an official campus photo is available.",
    image: {
      src: null,
      alt: "",
      caption: "",
      isActive: false,
    },
    paragraphs: [
      "Al-Falah High School is an English-medium school in Bokkalguda, Adilabad. We serve students from the local neighbourhood and surrounding areas, focusing on clear basics, regular practice, and honest communication with parents.",
      "The school is located on Shanti Nagar Road and is reachable for admission enquiries, school visits, and general questions during office hours.",
    ],
    linkText: "Contact the school office",
    linkHref: "#contact",
  },

  /* ── What Parents Can Expect Section ── */
  whatParentsCanExpect: {
    enabled: true,
    eyebrow: "What to Expect",
    titleLead: "What Parents",
    titleAccent: "Can Expect",
    subtitle: "Here's what parents and students can expect at Al-Falah.",
    items: [
      {
        title: "Academic Focus",
        description:
          "Lessons in language, mathematics, science, and social studies — following the state board curriculum.",
        icon: "BookOpen",
      },
      {
        title: "Values & Discipline",
        description:
          "Punctuality, respect, and honest work are part of daily school life.",
        icon: "Sparkles",
      },
      {
        title: "Parent-Friendly Communication",
        description:
          "The school office is reachable for queries, visit requests, and regular updates.",
        icon: "Shield",
      },
      {
        title: "Admission Guidance",
        description:
          "The admission process is straightforward. The school office helps parents with forms, documents, and enquiries.",
        icon: "Users",
      },
      {
        title: "School Office Support",
        description:
          "For fee queries, leave applications, exam schedules, and general concerns — the school office assists parents directly.",
        icon: "Monitor",
      },
      {
        title: "Clean Learning Environment",
        description:
          "A simple, well-kept campus with adequate space for learning and basic amenities.",
        icon: "Heart",
      },
    ],
  },

  /* ── Academic Levels Section ── */
  academicLevels: {
    enabled: true,
    eyebrow: "Curriculum",
    titleLead: "Academic",
    titleAccent: "Levels",
    subtitle:
      "Classes from Pre-Primary through Secondary. The school follows the state board curriculum.",
    levels: [
      {
        level: "Pre-Primary",
        ages: "Ages 3–5",
        description:
          "A warm, play-based environment that builds early learning skills through curiosity and guided play.",
        icon: "Baby",
      },
      {
        level: "Primary",
        grades: "Grades 1–5",
        description:
          "Building strong fundamentals in language, mathematics, science, and social awareness.",
        icon: "BookOpen",
      },
      {
        level: "Middle School",
        grades: "Grades 6–8",
        description:
          "Developing analytical thinking and subject knowledge with a focus on conceptual understanding.",
        icon: "Library",
      },
      {
        level: "Secondary",
        grades: "Grades 9–10",
        description:
          "Preparing students for board examinations with structured guidance, regular practice, and individual support.",
        icon: "GraduationCap",
      },
      {
        level: "Higher Secondary",
        grades: "Grades 11–12",
        description:
          "Specialised streams for Science and Commerce with focused board preparation and career guidance.",
        icon: "BookOpen",
      },
    ],
  },

  /* ── Facilities Section ── */
  facilities: {
    enabled: true,
    eyebrow: "Campus",
    titleLead: "School",
    titleAccent: "Facilities",
    subtitle: "Basic facilities available for students during school hours.",
    items: [
      {
        title: "Classrooms",
        description:
          "Well-lit and ventilated rooms set up for regular classroom learning and exams.",
        icon: "LayoutGrid",
      },
      {
        title: "Reading Room",
        description:
          "A quiet space where students can read and study during free periods.",
        icon: "FlaskConical",
      },
      {
        title: "Study Resources",
        description:
          "Textbooks and basic reference materials are available for student use.",
        icon: "Library",
      },
      {
        title: "Play Area",
        description:
          "Basic outdoor space for daily recess and physical activities.",
        icon: "Trophy",
      },
      {
        title: "School Office",
        description:
          "The administrative office handles admissions, fee collections, and parent enquiries.",
        icon: "Palette",
      },
      {
        title: "Basic Amenities",
        description:
          "Clean drinking water and maintained washroom facilities for students.",
        icon: "Droplets",
      },
    ],
  },

  /* ── Gallery Section ── */
  gallery: {
    enabled: true,
    eyebrow: "Campus Life",
    titleLead: "Our",
    titleAccent: "Gallery",
    subtitle:
      "Glimpses of school life — activities, classrooms, and events from campus.",
    emptyState: "Gallery photos will be added soon.",
    categories: [
      {
        id: "activities",
        name: "Activities",
        subtitle: "Students engaged in creative and cultural activities",
        coverImage:
          "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25.jpeg",
        isActive: true,
        order: 1,
        images: [
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.23 (1).jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.23.jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.24 (1).jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.24 (2).jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25 (1).jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25 (2).jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.42.25.jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.44.42.jpeg",
          },
          {
            alt: "School activity photo",
            caption: "",
            src: "/images/gallery/activities/WhatsApp Image 2026-06-10 at 14.47.25.jpeg",
          },
        ],
      },
      {
        id: "classrooms",
        name: "Classrooms",
        subtitle: "Learning spaces and classroom environments",
        coverImage:
          "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.04.jpeg",
        isActive: true,
        order: 2,
        images: [
          {
            alt: "Classroom photo",
            caption: "",
            src: "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.04.jpeg",
          },
          {
            alt: "Classroom photo",
            caption: "",
            src: "/images/gallery/classrooms/WhatsApp Image 2026-06-10 at 14.47.25.jpeg",
          },
        ],
      },
      {
        id: "events",
        name: "Events",
        subtitle: "School events, celebrations, and gatherings",
        coverImage:
          "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.26.jpeg",
        isActive: true,
        order: 3,
        images: [
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.26.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.27.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.28 (2).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29 (1).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29 (2).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.29.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30 (1).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30 (2).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.30.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.31 (1).jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.40.31.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.45.32.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.51.16.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.51.48.jpeg",
          },
          {
            alt: "School event photo",
            caption: "",
            src: "/images/gallery/events/WhatsApp Image 2026-06-10 at 14.52.21.jpeg",
          },
          {
            type: "video",
            alt: "School event video",
            caption: "School Event",
            src: "/videos/gallery/WhatsApp Video 2026-06-10 at 14.46.24.mp4",
          },
        ],
      },
    ],
  },

  /* ── Principal's Message ── */
  principalMessage: {
    enabled: true,
    eyebrow: "Principal's Desk",
    title: "Message from the School Leadership",
    subtitle: "Guiding students with knowledge, values, and responsibility.",
    animatedLine: "Building character, confidence, and responsibility.",
    valuesHeading: "Our guiding values",
    valuesDescription: "The principles that shape everyday learning at Al-Falah.",
    body: [
      "At Al-Falah, education is not only about marks. We aim to build character, confidence, discipline, and a sense of responsibility.",
      "We guide students to become good human beings, respectful children, responsible neighbours, loyal friends, and true citizens of India.",
      "Al-Falah means success — success in this life and success in the hereafter. Our effort is to nurture students with knowledge, values, and good conduct.",
    ],
    authorLabel: "School Leadership",
    authorLocation: "Al-Falah High School, Adilabad",
    valueCards: [
      { label: "Character", icon: "Sparkles" },
      { label: "Responsibility", icon: "Shield" },
      { label: "Good Conduct", icon: "Heart" },
      { label: "Nation Building", icon: "Users" },
    ],
    image: null,
    imageAlt: null,
  },

  /* ── Academic Highlights ── */
  academicHighlights: {
    enabled: true,
    eyebrow: "Academic Highlights",
    title: "Academic Highlights",
    subtitle:
      "A quick look at how students are supported across classes and subjects.",
    groups: [
      {
        title: "Academic Support",
        itemIds: [
          "spell-bee",
          "fluency-pronunciation",
          "primary-teachers",
          "higher-class-teachers",
        ],
      },
      {
        title: "Student Performance & Foundation",
        itemIds: [
          "class-x-record",
          "strong-performance",
          "neet-iit-foundation",
          "affordable-tuition",
        ],
      },
    ],
    items: [
      {
        id: "spell-bee",
        title: "SPELL BEE Course",
        description:
          "Introduced for higher classes to support vocabulary, spelling, and language confidence.",
        icon: "BookOpenCheck",
      },
      {
        id: "fluency-pronunciation",
        title: "Fluency & Pronunciation",
        description:
          "International-style methods are used to improve speaking fluency and pronunciation.",
        icon: "Mic",
      },
      {
        id: "class-x-record",
        title: "Class X Result Record",
        description: "100% Class X result record for the past 5 years.",
        icon: "Trophy",
        highlight: true,
      },
      {
        id: "strong-performance",
        title: "Strong Student Performance",
        description:
          "In each batch, many students have scored between 85% and 98%.",
        icon: "Award",
      },
      {
        id: "primary-teachers",
        title: "Experienced Primary Teachers",
        description: "Experienced teachers support learning from Class I to V.",
        icon: "Users",
      },
      {
        id: "higher-class-teachers",
        title: "Qualified Higher-Class Teachers",
        description:
          "B.Ed teachers with 10 to 20 years of experience guide students from VI to X.",
        icon: "GraduationCap",
      },
      {
        id: "neet-iit-foundation",
        title: "NEET & IIT Foundation",
        description:
          "Foundation classes from VII to X with Physics-focused support material.",
        icon: "Atom",
      },
      {
        id: "affordable-tuition",
        title: "Affordable Tuition Fee",
        description: "Affordable tuition support for academic and Islamic studies.",
        icon: "HeartHandshake",
      },
    ],
  },

  /* ── Faculty Section ── */
  faculty: {
    enabled: false,
    heading: "Our Faculty",
    subtitle:
      "Dedicated teachers committed to every student's growth and learning.",
    placeholderNote: "Faculty details will be added soon.",
    members: [],
  },

  /* ── School Notice Board ── */
  noticeBoard: {
    enabled: true,
    eyebrow: "Important Notices",
    heading: "School Notice Board",
    subtitle:
      "Stay informed about admissions, school updates, and important announcements.",
    maxItems: 4,
    notices: [
      {
        id: "admissions-enquiry-open",
        title: "Admissions Enquiry Open",
        description:
          "Parents can contact the school office for admission-related questions for the 2026–27 academic year.",
        noticeDate: "2026-06-01",
        category: "Admission",
        priority: "important",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 1,
        startDate: null,
        endDate: null,
        pdf: null,
      },
      {
        id: "documents-required",
        title: "Documents Required for Admission",
        description:
          "Parents are requested to keep basic student and parent documents ready during the admission enquiry process.",
        noticeDate: "2026-06-05",
        category: "Documents",
        priority: "normal",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 2,
        startDate: null,
        endDate: null,
        pdf: null,
      },
      {
        id: "school-visit-enquiries",
        title: "School Visit Enquiries",
        description:
          "Parents may contact the school office before visiting the campus for admission or general enquiries.",
        noticeDate: "2026-06-08",
        category: "Visit",
        priority: "normal",
        ctaLabel: null,
        ctaHref: null,
        isActive: true,
        order: 3,
        startDate: null,
        endDate: null,
        pdf: null,
      },
    ],
  },

  /* ── Latest School Updates Section ── */
  updates: {
    enabled: true,
    eyebrow: "Updates",
    heading: "School Updates",
    subtitle:
      "Admission news, school announcements, and important information for parents.",
  },

  /* ── Posters / Updates (fallback when Sanity is not configured) ── */
  posters: [
    {
      _id: "admissions-enquiry-2026-27",
      title: "Admissions Open",
      description:
        "Admission enquiries for the 2026–27 academic year are welcome. Parents can visit the school office or fill the parent form.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.40.26 (1).jpeg",
      imageAlt: "Admissions Open poster",
      ctaLabel: "Enquire Now",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 1,
      startDate: null,
      endDate: null,
      accent: "deep-green",
    },
    {
      _id: "school-office-hours",
      title: "School Office",
      description:
        "The school office is open for parent enquiries, admission forms, and general questions during working hours.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.41.14.jpeg",
      imageAlt: "School Office poster",
      ctaLabel: "Visit School",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 2,
      startDate: null,
      endDate: null,
      accent: "green-light",
    },
    {
      _id: "parent-communication",
      title: "Parent Communication",
      description:
        "Parents can reach the school office directly for updates on fees, exams, holidays, and student progress.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.41.54.jpeg",
      imageAlt: "Parent Communication poster",
      ctaLabel: "Contact Office",
      ctaHref: "#contact",
      active: true,
      featured: true,
      order: 3,
      startDate: null,
      endDate: null,
      accent: "deep-green",
    },
    {
      _id: "school-update-4",
      title: "School Update",
      description:
        "Stay connected with the school for the latest updates, events, and announcements.",
      image: "/images/posters/WhatsApp Image 2026-06-10 at 14.53.30.jpeg",
      imageAlt: "School Update poster",
      ctaLabel: "Learn More",
      ctaHref: "#updates",
      active: true,
      featured: true,
      order: 4,
      startDate: null,
      endDate: null,
      accent: "deep-green",
    },
  ],

  /* ── Admissions CTA Section ── */
  admissionsCta: {
    enabled: true,
    pillLabel: "Academic Year 2026–27",
    heading: "Admission Enquiry",
    subtitle:
      "Admissions for the 2026–27 academic year are open. Parents can visit the school office or submit an enquiry to begin.",
    primaryCta: "Visit School Office",
    primaryCtaLink: "#contact",
    secondaryCta: "View Notices",
    secondaryCtaLink: "#notices",
  },

  /* ── Contact Details ── */
  contact: {
    phones: [
      { display: "9030396250", href: "+919030396250" },
      { display: "7981757850", href: "+917981757850" },
    ],
    // Email uses "internationalschool" while the site name says "High School".
    // Keep as provided for now and confirm the final official naming with the school.
    email: "alfalahinternationalschool@gmail.com",
  },

  /* ── Parent Enquiry & Feedback Form ── */
  parentForm: {
    enabled: true,
    label: "For Parents",
    heading: "Parent Help Desk",
    description:
      "Use this form for admission enquiries, general questions, suggestions, complaints, or callback requests. Your message will be reviewed by the school office.",
    requestTypesLabel: "Request types accepted",
    requestTypes: [
      "Admission Enquiry",
      "General Enquiry",
      "Complaint / Concern",
      "Suggestion",
      "Request Callback",
    ],
    panel: {
      title: "Send your Enquiry",
      description:
        "Your message goes directly to the school office. We respond to all enquiries within working hours.",
      ctaLabel: "Submit Enquiry",
      note: "Please share a working phone number so we can reach you if needed.",
      urlPlaceholder: "Form link will be available soon",
    },
    url: "https://docs.google.com/forms/d/e/1FAIpQLScFgy0IChSjjfbtUkAiuXaMOfE2ofdpNWfYl8Qxl8hiMbdlZw/viewform?usp=header",
  },

  /* ── Location / Contact Section ── */
  locationSection: {
    enabled: true,
    eyebrow: "Visit Us",
    titleLead: "Get in",
    titleAccent: "Touch",
    subtitle:
      "We'd love to hear from you. Reach out to us for admissions, enquiries, or a campus visit.",
    cardHeading: "Contact Information",
    directionsLabel: "Get Directions",
    addressLabel: "Address",
    phoneLabel: "Phone",
    emailLabel: "Email",
  },

  /* ── Footer ── */
  footer: {
    identityLine: "English Medium High School",
    description:
      "An English Medium school in Adilabad focused on learning, discipline, values, and parent-friendly communication.",
    quickLinksTitle: "Explore",
    quickLinks: [
      { label: "Home", href: "#" },
      { label: "About", href: "#about" },
      { label: "Academics", href: "#academics" },
      { label: "Facilities", href: "#facilities" },
      { label: "Gallery", href: "#gallery" },
    ],
    parentSupportTitle: "Parent Support",
    parentSupportLinks: [
      { label: "Admissions Enquiry", href: "#contact" },
      { label: "Contact", href: "#contact" },
      { label: "Location", href: "#contact" },
    ],
    socialTitle: "Follow Us",
    socialLinks: {
      facebook: "#",
      instagram: "#",
      youtube: "https://youtube.com/@schoolalfalah1364?si=uKc-gDUSJv5PKJCn",
      whatsapp: "https://wa.me/919030396250",
    },
    copyright: `© ${new Date().getFullYear()} Al-Falah High School. All rights reserved.`,
  },
};
