import { fetchCmsDocument } from "./sanity";
import { clientReflections, homeImpactStats, homePatterns, homeServices, homepageTestimonials, impactIntro, impactQualifier, impactSections } from "./shareefContent";

export type SiteImage = {
  src: string;
  alt: string;
  position: string;
};

export type MawzunContent = {
  global: {
    navigation: Array<{ href: string; label: string }>;
    email: string;
    footerEyebrow: string;
    footerHeading: string;
    name: string; shortName: string; arabicName: string; legalName: string; tagline: string; logo: SiteImage;
  };
  home: {
    heroHeading: string;
    heroIntroduction: string;
    heroCta: string;
    audiencesEyebrow: string;
    audiencesHeading: string;
    audiencesIntroduction: string[];
    audiences: string[];
    servicesEyebrow: string;
    servicesHeading: string;
    servicesHint: string;
    services: typeof homeServices;
    servicesCta: string;
    patternsEyebrow: string;
    patternsHeading: string;
    patterns: typeof homePatterns;
    impactEyebrow: string;
    impactHeading: string;
    impactLabels: string[];
    impactStats: typeof homeImpactStats;
    testimonialsEyebrow: string;
    testimonialsHeading: string;
    testimonials: typeof homepageTestimonials;
    testimonialsCta: string;
    engagementsEyebrow: string; engagementsHeading: string; engagementsIntroduction: string; engagementDetailLabel: string; engagementsCta: string;
    engagements: Array<{ number: string; title: string; description: string; details: Array<{ label: string; value: string }> }>;
    aboutSection: { eyebrow: string; heading: string; paragraphs: string[]; statistics: Array<{ value: string; label: string }>; cta: string; imageName: string; imageRole: string };
    secondImage: SiteImage;
    shareefImage: SiteImage;
    heroDesktopImage: SiteImage; heroMobileImage: SiteImage; conveningImage: SiteImage;
  };
  about: {
    eyebrow: string; heading: string; subheading: string; introduction: string[]; image: SiteImage; imageCaption: string;
    regionEyebrow: string; regionHeading: string; regionText: string; workEyebrow: string; workHeading: string; workParagraphs: string[];
    independenceEyebrow: string; independenceLead: string; independenceText: string; competenciesHeading: string; competencies: string[];
    credentialsHeading: string; credentials: string[]; closingLead: string; closingQuote: string;
  };
  approach: {
    eyebrow: string; heading: string; lead: string; introduction: string; image: SiteImage; patternsEyebrow: string; patternsHeading: string; patterns: string[];
    workEyebrow: string; workHeading: string; workBlocks: Array<{ title: string; body: string; service: string }>;
  };
  impact: { eyebrow: string; heading: string; introduction: string; qualifier: string; openLabel: string; closeLabel: string; sections: typeof impactSections };
  testimonials: { eyebrow: string; heading: string; introduction: string; reflections: typeof clientReflections; ctaText: string; ctaLabel: string };
  services: {
    eyebrow: string; heading: string; introEyebrow: string; introLead: string; introText: string; processEyebrow: string; processSteps: string[];
    imageCaption: string; roomEyebrow: string; roomLead: string; roomText: string;
    mainImage: SiteImage;
    shareefImage: SiteImage;
  };
  contact: {
    eyebrow: string; emailLabel: string; imageCaption: string;
    heading: string;
    introduction: string[];
    email: string;
    locations: string;
    confidentiality: string[];
    image: SiteImage;
  };
};

export const defaultMawzunContent: MawzunContent = {
  global: {
    navigation: [{ href: "/about", label: "About" }, { href: "/approach", label: "Approach" }, { href: "/services", label: "Services" }, { href: "/impact", label: "Impact" }, { href: "/testimonials", label: "Testimonials" }, { href: "/contact", label: "Contact" }],
    email: "enquire@mawzun-inc.com",
    footerEyebrow: "Contact",
    footerHeading: "Request a confidential conversation.",
    name: "Mawzun Advisory", shortName: "Mawzun", arabicName: "مَوزُون", legalName: "Mawzun Advisory", tagline: "Senior advisory for high-stakes alignment in transformation settings", logo: { src: "/mawzun-logo.png", alt: "Mawzun Advisory logo", position: "50% 50%" },
  },
  home: {
    heroHeading: "The strategy is not the problem. The room is.",
    heroDesktopImage: { src: "/3TsHeroBG.png", alt: "Executive boardroom", position: "50% 50%" }, heroMobileImage: { src: "/3TsHeroBGmobile.png", alt: "Executive boardroom", position: "50% 50%" }, conveningImage: { src: "/home-convening.webp", alt: "Prepared executive convening room", position: "50% 50%" },
    heroIntroduction: "Transformations stall when the people who must implement a decision are not yet aligned around it, or aren’t even present. I work with senior sponsors in the MENA region to convene and hold the rooms where that alignment is built, and to ensure the decisions made there survive contact with reality.",
    heroCta: "Request a Confidential Conversation",
    audiencesEyebrow: "Who We Work With",
    audiencesHeading: "Trusted when the room is complex.",
    audiencesIntroduction: ["Mawzun works with the sponsors and senior leaders of transformations, reforms, and consequential leadership transitions — across governments, multilaterals, sovereign-backed institutions, family enterprises, and large private-sector organizations.", "There is no “one size fits all.” Every engagement is tailored to meet your specific needs, challenges, and goals."],
    audiences: ["Governments & Multilaterals", "Sovereign-backed institutions", "Family enterprises", "Large private-sector organizations", "Non-Profit & Public-Sector Organizations"],
    servicesEyebrow: "What We Do",
    servicesHeading: "The work is organized around four engagements, each designed for a different stage of the alignment problem.",
    servicesHint: "Hover, focus, or select an engagement to open it.",
    services: homeServices,
    servicesCta: "Read More About How We Work",
    patternsEyebrow: "Patterns I help clients identify and navigate.",
    patternsHeading: "Patterns I help clients identify and navigate.",
    patterns: homePatterns,
    impactEyebrow: "Selected Impact",
    impactHeading: "Real progress you can actually measure.",
    impactLabels: ["Leadership scores", "Gun violence · 3 months", "In the room", "Years at senior level"],
    impactStats: homeImpactStats,
    testimonialsEyebrow: "What Clients Have Said",
    testimonialsHeading: "Real evidence from real leaders.",
    testimonials: homepageTestimonials,
    testimonialsCta: "Visit Testimonials Page",
    engagementsEyebrow: "Selected Engagements", engagementsHeading: "Most of this work is confidential.", engagementsIntroduction: "Selected public-safe cases below.", engagementDetailLabel: "Public-safe detail", engagementsCta: "More engagements",
    engagements: [
      { number: "01", title: "Saudi Arabia —\nVision 2030 Assessment", description: "Supporting the World Bank GCC Prosperity team in the assessment of Saudi Arabia's Vision 2030 progress and next steps.\nOngoing.", details: [{ label: "Context", value: "World Bank GCC Prosperity team" }, { label: "Mode", value: "Assessment facilitation and next-step design" }, { label: "Status", value: "Current engagement" }] },
      { number: "02", title: "Malaysia —\nNational Governance Reform", description: "Directed a $27M governance portfolio engaging Parliament, ministries, anti-corruption bodies, and civil society on reform priorities. $17M in cumulative impact to 80+ local actors within 18 months.", details: [{ label: "Role", value: "Chief of Party" }, { label: "Table", value: "Parliament, ministries, anti-corruption bodies, civil society" }, { label: "Scale", value: "$27M portfolio; 80+ local grantees" }] },
      { number: "03", title: "World Bank —\nLeadership Development at Scale", description: "Delivered leadership training across 18 cohorts of World Bank Team Leaders and Supervisors. Cohorts recorded a 16% improvement in measured leadership scores.", details: [{ label: "Audience", value: "Team Leaders and Supervisors" }, { label: "Scale", value: "18 cohorts" }, { label: "Signal", value: "16% improvement in leadership scores" }] },
    ],
    aboutSection: { eyebrow: "About Mawzun", heading: "Mawzun Advisory is a private advisory practice led by Shareef Khatib.", paragraphs: ["Eighteen years of senior international experience across the Gulf, the Levant, Africa, and Asia, including chief-of-party leadership of multi-country governance and reform portfolios up to USD 161 million.", "World Bank facilitator and trainer roster member. Georgetown-trained in Leadership Coaching and in Organizational Development & Change Leadership. British and Jordanian — formed by both worlds and comfortable operating across them.", "The work is advisory. The purpose is consequential: decisions that hold, institutions that deliver, and communities that shape their own futures."], statistics: [{ value: "18+", label: "years across complex international contexts" }, { value: "$161M", label: "largest portfolio led through closeout" }, { value: "18", label: "World Bank leadership cohorts delivered" }, { value: "9", label: "Senior multi-stakeholder processes led in fragile, post-conflict, and reform environments — across governments, militaries, multilaterals, and civil society." }], cta: "More About Shareef Khatib", imageName: "Shareef Samir Khatib", imageRole: "Principal Consultant" },
    secondImage: {
      src: "/home-facilitation.webp",
      alt: "Shareef Khatib facilitating a senior working session",
      position: "48% 44%",
    },
    shareefImage: {
      src: "/shareef-home.webp",
      alt: "Shareef Samir Khatib facilitating a working session",
      position: "46% 42%",
    },
  },
  about: {
    eyebrow: "About Shareef",
    heading: "Shareef Samir Khatib",
    subheading: "Senior adviser for high-stakes alignment in transformation settings.",
    introduction: [
      "I work with senior sponsors navigating the hardest part of transformation: getting the right people aligned around difficult decisions, and ensuring those decisions survive contact with reality. My work is most useful when the issue is politically sensitive, cross-functional, or stuck between strategy and execution: where ordinary workshops and generic facilitation are not enough.",
      "My position is grounded in eighteen years of senior operating experience, not in method training. As senior program director and principal adviser across Nigeria, Malaysia, Iraq, Afghanistan, Turkey and Syria, I held direct accountability for multi-country portfolios ranging from $27M to $161M, and for the governments, communities, and institutions those portfolios were designed to serve. The rooms I worked in were consequential. The decisions made in them had costs measured in lives and livelihoods. This experience is what grounds my advisory practice.",
    ],
    image: { src: "/shareef-khatib.webp", alt: "Shareef Samir Khatib", position: "center 28%" },
    imageCaption: "Quiet judgment for rooms where trust is fragile and decisions matter.",
    regionEyebrow: "On working in the region", regionHeading: "Trust is built differently here.",
    regionText: "I am British and Jordanian — formed by both worlds and comfortable operating across them. I work across the Arab world and other Muslim-majority and complex environments in English, with conversational Arabic and French, and with the cultural literacy that comes from having lived and worked across the region. I understand that trust is built differently here: through discretion, through demonstrated judgment, and through the patience to let a relationship earn its own authority before claiming any.",
    workEyebrow: "On how I work", workHeading: "Disciplined, calm, and highly engaged with content.",
    workParagraphs: ["As I demonstrate in Approach, I am disciplined, calm, and highly engaged with content. I listen for the narratives beneath positions, draw out the connections no one has yet made visible, and play back synthesis with precision — so that senior teams can make informed choices and leave with decisions that hold. I hold the room with respect and authority, encouraging candid and at times provocative exchange while maintaining the cohesion that makes decisions possible.", "The work starts long before the meeting does. Upstream diagnosis, stakeholder mapping, sponsor preparation, and agenda architecture are where most alignment problems are actually solved — or lost. By the time the room begins, the work is already well underway."],
    independenceEyebrow: "Independent judgment, offered without self-interest.",
    independenceLead: "Senior leaders are rarely short of agreement. What they often lack is a trusted adviser who will name what others in the room will not — not to provoke, but because clear decisions require honest premises.",
    independenceText: "I work without an agenda of my own. My interest is in my client's success and the quality of their decisions. That independence is what makes my honesty useful: it is not flattery, and it is not criticism. It is a precise read of the situation, offered with respect and without self-interest.",
    competenciesHeading: "Core Competencies",
    competencies: ["High-Stakes Stakeholder Alignment", "Politically Sensitive Convening & Decision Architecture", "Executive Sponsor Coaching & Transition Advisory", "Organisational Diagnosis & Change Design", "Crisis Navigation & Continuity Leadership", "Cross-Cultural & Intercultural Judgment"],
    credentialsHeading: "Credentials",
    credentials: ["World Bank facilitator and trainer roster member", "Georgetown University — Certificate in Leadership Coaching; Certificate in Organisational Development & Change Leadership", "Project Management Professional (PMP)", "Advanced degrees in Governance & International Development and Behavioural Neuroscience", "20+ countries of professional experience across the Middle East, Africa, Asia, and beyond"],
    closingLead: "The work is advisory. The purpose is consequential: decisions that hold, institutions that deliver, and communities that shape their own futures.",
    closingQuote: "Quiet judgment for rooms where trust is fragile and decisions matter.",
  },
  approach: {
    eyebrow: "Our Approach", heading: "The work starts long before the meeting does",
    lead: "The visible meeting is usually the smallest part of the work. Most alignment problems are solved — or lost — before anyone enters the room.",
    introduction: "I work upstream: listening for the narratives beneath positions, mapping where alignment is actually breaking, designing the sequence of the room, and helping sponsors translate decisions into action that holds. The method is tailored and varies. The underlying logic does not.",
    image: { src: "/approach-advisory.webp", alt: "Confidential advisory materials arranged for stakeholder alignment", position: "50% 50%" },
    patternsEyebrow: "Patterns I help clients identify and navigate.", patternsHeading: "Patterns I help clients identify and navigate.",
    patterns: homePatterns.map((item) => item.text), workEyebrow: "How I Work", workHeading: "Four lenses for work that has to survive implementation.",
    workBlocks: [
      { title: "The room is only as good as what it produces.", body: "Most gatherings generate energy without producing decisions. The reason is almost never the agenda. It is the unspoken resistance, the competing narratives, the stakeholder who was never quite aligned, the decision that was assumed rather than earned. I design and hold the rooms where that changes. My work is not to manage the conversation but to listen for what is underneath it — and to play that back with precision, so senior teams can make informed choices and leave with decisions that survive contact with implementation.", service: "This is the Facilitation work of the Decision Sprint and the High-Stakes Room." },
      { title: "Clarity about yourself is the precondition for everything else.", body: "Senior leaders carrying transformation mandates are often the last people given space to think clearly about their own position. I work with sponsors and principals navigating genuine inflection points: new roles, politically sensitive mandates, decisions with consequences they will carry. My approach is disciplined and direct. I hold the structure firmly while creating space for real exploration — listening for the person beneath the presenting problem and reflecting it back with precision, so the next step is chosen rather than made for you.", service: "This is the Coaching work of the Retained Advisory and the First 90 Days." },
      { title: "The gap between what the data shows and what people experience is always the real brief.", body: "Before a room can be convened or an intervention designed, the alignment problem must be understood. I begin every engagement by listening — to the sponsor, to the principals, to the stakeholders who will not speak freely in the room itself. I map where alignment is breaking, what the competing narratives are, and what a workable decision path might look like. That diagnosis shapes everything that follows: who is in the room, in what sequence, and what the room is actually trying to produce.", service: "This is the Systems Diagnostic work of the Alignment Read." },
      { title: "Announced change is not adopted change.", body: "Transformation fails most often not because the strategy was wrong but because the conditions for adoption were never built. The governance was retrofitted. The resistance was ignored. The actual implementation was hoped for. The people carrying the work were never asked what they actually needed. I work with leaders and institutions to close that gap: diagnosing where the friction sits, designing the interventions that address it, and building the structures that make new ways of working stick in practice and reality.", service: "This is the Change Management work of the Retained Advisory and longer engagements." },
    ],
  },
  impact: { eyebrow: "Impact", heading: "IMPACT", introduction: impactIntro, qualifier: impactQualifier, openLabel: "Open", closeLabel: "Close", sections: impactSections },
  testimonials: {
    eyebrow: "Client Reflections",
    heading: "What changes when the work is done well.",
    introduction: "Selected reflections from clients across program leadership, organisational alignment, facilitation, and coaching engagements. Most work is confidential; what follows is shared with permission.",
    reflections: clientReflections,
    ctaText: "If this work feels relevant, the right first step is a short, confidential conversation.",
    ctaLabel: "Write to enquire@mawzun-inc.com",
  },
  services: {
    eyebrow: "Services", heading: "Structured interventions for complex alignment problems.", introEyebrow: "Designed, not improvised", introLead: "Each engagement is built around the actual decision, room, or transition in front of the client.", introText: "The work may begin as a diagnostic, become a sprint, or stay with the sponsor through a longer transformation. The constant is careful preparation, confidential judgment, and follow-through.", processEyebrow: "How a conversation becomes movement", processSteps: ["Listen", "Map", "Design", "Convene", "Follow through"], imageCaption: "Field note: facilitated working session", roomEyebrow: "In the room", roomLead: "These processes all create a structure. The product of each is clearer decisions and more durable alignment.", roomText: "Shareef designs the intervention, prepares the stakeholders, and then holds the conversation with enough structure for movement and enough care for candor. That combination is what turns a meeting into a consequential working session.",
    mainImage: {
      src: "/services-convening.webp",
      alt: "Shareef Khatib listening during a senior stakeholder convening",
      position: "66% 42%",
    },
    shareefImage: {
      src: "/shareef-services.webp",
      alt: "Shareef Khatib facilitating a working session",
      position: "52% 42%",
    },
  },
  contact: {
    eyebrow: "Contact", emailLabel: "Write to", imageCaption: "Careful listening before consequential decisions",
    heading: "Start with a conversation.",
    introduction: [
      "If a decision is stalled, a room needs design, or a transition is underway — and you are wondering whether this work might be relevant — the right first step is a short, confidential conversation.",
      "There is no pitch. No proposal before we have spoken. The first conversation is for clarity: whether the situation fits, whether the timing is right, and whether there is a useful next step worth taking.",
    ],
    email: "enquire@mawzun-inc.com",
    locations: "Washington, DC · London, UK · Amman, JO",
    confidentiality: [
      "All initial conversations are completely confidential. Nothing discussed is shared, attributed, or referenced without your explicit agreement.",
      "No recordings. No AI note takers.",
      "Meeting method and/or platform of your choosing.",
    ],
    image: {
      src: "/shareef-contact.webp",
      alt: "Shareef Khatib listening during a facilitated workshop",
      position: "68% 48%",
    },
  },
};

export function getMawzunContent() {
  return fetchCmsDocument<MawzunContent>(
    `*[_type == "mawzunSite"][0]{
      global{..., logo{"src": asset->url, alt, position}},
      home{
        ...,
        heroDesktopImage{"src": asset->url, alt, position},
        heroMobileImage{"src": asset->url, alt, position},
        conveningImage{"src": asset->url, alt, position},
        secondImage{"src": asset->url, alt, position},
        shareefImage{"src": asset->url, alt, position}
      },
      about{..., image{"src": asset->url, alt, position}},
      approach{..., image{"src": asset->url, alt, position}},
      impact,
      testimonials,
      services{
        mainImage{"src": asset->url, alt, position},
        shareefImage{"src": asset->url, alt, position}
      },
      contact{
        heading,
        introduction,
        email,
        locations,
        confidentiality,
        image{"src": asset->url, alt, position}
      }
    }`,
    defaultMawzunContent,
  );
}
