export const brand = {
  name: "FOURGE",
  // Placeholder name — swap this one string and the whole site updates.
  tagline: "Four founders. One build discipline.",
  email: "hello@fourge.dev",
  location: "Remote-first · India",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Founders", href: "#founders" },
  { label: "Work", href: "#work" },
  { label: "Engagement", href: "#engagement" },
  { label: "FAQ", href: "#faq" },
];

export const services = [
  {
    code: "01",
    title: "Web Application Development",
    desc: "Full-stack products built on React, Node and Postgres — from first wireframe to production deploy.",
    stack: ["React", "Node.js", "PostgreSQL", "Vite"],
  },
  {
    code: "02",
    title: "Mobile App Development",
    desc: "Cross-platform apps in React Native or native Swift/Kotlin when performance demands it.",
    stack: ["React Native", "Swift", "Kotlin"],
  },
  {
    code: "03",
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, container orchestration and infrastructure that scales without surprises.",
    stack: ["AWS", "Docker", "GitHub Actions", "Render"],
  },
  {
    code: "04",
    title: "Data Engineering & Analytics",
    desc: "Pipelines, warehouses and dashboards that turn raw events into decisions.",
    stack: ["Python", "Airflow", "Power BI", "SQL"],
  },
  {
    code: "05",
    title: "UI/UX Design",
    desc: "Interfaces designed around what your users actually do, not what a template assumes.",
    stack: ["Figma", "Design systems", "Prototyping"],
  },
  {
    code: "06",
    title: "Product Consulting",
    desc: "Technical audits, architecture reviews and roadmap planning before you write a line of code.",
    stack: ["Architecture", "Roadmapping", "Audits"],
  },
];

export const process = [
  {
    step: "DISCOVER",
    title: "Scope the build",
    desc: "We map requirements, constraints and success criteria in a working document you own — not a slide deck.",
  },
  {
    step: "DRAFT",
    title: "Architecture & design",
    desc: "System diagrams, data models and UI wireframes reviewed with you before any code is written.",
  },
  {
    step: "BUILD",
    title: "Sprints with visibility",
    desc: "Weekly demos, a shared board, and a staging environment you can poke at any time.",
  },
  {
    step: "SHIP",
    title: "Launch & handover",
    desc: "Deployed, documented, and handed over with source access — no lock-in to us.",
  },
  {
    step: "SUPPORT",
    title: "Post-launch care",
    desc: "Optional retainer for monitoring, fixes and incremental features after go-live.",
  },
];

export const founders = [
  {
    name: "Founder One",
    role: "Full-Stack Engineering",
    bio: "Leads architecture decisions across the stack — from database schema to deployment pipeline.",
    focus: ["React", "Node.js", "System Design"],
  },
  {
    name: "Founder Two",
    role: "Mobile & Frontend",
    bio: "Builds the interfaces clients and their users actually touch, with an eye for detail and performance.",
    focus: ["React Native", "UI Engineering", "Accessibility"],
  },
  {
    name: "Founder Three",
    role: "Cloud & Infrastructure",
    bio: "Keeps everything running — CI/CD, containers, monitoring, and the 2am pages nobody else sees.",
    focus: ["AWS", "Docker", "Observability"],
  },
  {
    name: "Founder Four",
    role: "Data & Product",
    bio: "Turns client requirements into specs, and client data into dashboards that get looked at twice a day.",
    focus: ["Data Engineering", "Power BI", "Product Strategy"],
  },
];

export const work = [
  {
    tag: "WEB PLATFORM",
    title: "Booking & operations dashboard",
    desc: "A real-time booking tracker for a co-living operator, replacing manual spreadsheets across five properties.",
    stack: ["React", "PostgreSQL", "Power BI"],
  },
  {
    tag: "DATA PIPELINE",
    title: "Retail sales ETL pipeline",
    desc: "Automated ingestion and transformation of daily retail sales data into a queryable warehouse.",
    stack: ["Python", "Airflow", "Docker"],
  },
  {
    tag: "MOBILE + REALTIME",
    title: "Live translation video platform",
    desc: "A video meeting product with real-time voice translation layered over a WebRTC core.",
    stack: ["React", "WebRTC", "Node.js"],
  },
];

export const engagementModels = [
  {
    title: "Fixed Scope",
    desc: "A defined deliverable with a defined timeline. Best when requirements are settled before we start.",
    bullets: ["Clear milestones", "Fixed delivery date", "Ideal for MVPs & landing builds"],
  },
  {
    title: "Dedicated Team",
    desc: "All four of us, or a subset, working exclusively on your product for a set number of months.",
    bullets: ["Weekly sprints", "Direct Slack/Discord access", "Scope can evolve with you"],
  },
  {
    title: "Retainer",
    desc: "Ongoing support, monitoring and incremental features after your product has launched.",
    bullets: ["Monthly hours block", "Priority response time", "No long-term lock-in"],
  },
];

export const testimonials = [
  {
    quote:
      "They scoped the project honestly instead of just telling us what we wanted to hear — that alone saved us weeks.",
    name: "Placeholder Client",
    role: "Operations Lead, Co-living Startup",
  },
  {
    quote:
      "Weekly demos meant we never had to wonder what was actually being built.",
    name: "Placeholder Client",
    role: "Founder, D2C Brand",
  },
];

export const faqs = [
  {
    q: "You don't have prices listed — why?",
    a: "Every engagement is scoped individually based on complexity, timeline and team size needed. Tell us what you're building and we'll come back with a fixed quote or a retainer estimate within a couple of days.",
  },
  {
    q: "Do we own the code and IP?",
    a: "Yes. On final payment, full source code and IP transfer to you. We don't retain rights or lock you into our infrastructure.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Yes — we regularly plug into existing engineering teams for a specific module, migration, or crunch period rather than owning the whole build.",
  },
  {
    q: "What's your typical project timeline?",
    a: "A focused MVP typically runs 6–10 weeks. Larger platform builds run in monthly phases with a demo at the end of each.",
  },
  {
    q: "Where are you based?",
    a: "We work remote-first out of India, with overlap hours arranged for clients in Europe and the US.",
  },
];
