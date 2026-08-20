export const brand = {
  name: "Elysion",
  tagline: "Digital products made to move business forward.",
  email: "elysiontech19@gmail.com",
  location: "Remote-first · Worldwide",
};

export const nav = [
  { label: "Our Story", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Founders", href: "#founders" },
  { label: "Work", href: "#work" },
  { label: "Engagement", href: "#engagement" },
  { label: "FAQ", href: "#faq" },
  { label: "Inquiries", href: "#contact" },
];

export const services = [
  {
    code: "01",
    title: "Web Application Development",
    desc: "Full-stack products built on React, Node, and Postgres — from first wireframe to production deployment.",
    stack: ["React", "Node.js", "PostgreSQL", "Vite"],
    features: [
      "Custom React & Next.js architectures",
      "High-throughput REST & GraphQL APIs",
      "Database modeling & index optimization",
      "End-to-end automated testing",
    ],
  },
  {
    code: "02",
    title: "Mobile App Development",
    desc: "Cross-platform mobile applications in React Native or native Swift/Kotlin when maximum hardware performance demands it.",
    stack: ["React Native", "Swift", "Kotlin"],
    features: [
      "Smooth 60fps gesture interactions",
      "Offline-first synchronization",
      "Native device sensor integration",
      "Automated App Store & Play Store CI/CD",
    ],
  },
  {
    code: "03",
    title: "Cloud & DevOps",
    desc: "CI/CD pipelines, container orchestration, and serverless infrastructure that scales smoothly without surprise bills.",
    stack: ["AWS", "Docker", "GitHub Actions", "Render"],
    features: [
      "Zero-downtime deployment pipelines",
      "Infrastructure-as-Code (Terraform)",
      "Observability, APM & alerting",
      "Hardened security & IAM policies",
    ],
  },
  {
    code: "04",
    title: "Data Engineering & Analytics",
    desc: "Pipelines, data warehouses, and interactive dashboards that turn raw event streams into actionable executive decisions.",
    stack: ["Python", "Airflow", "Power BI", "SQL"],
    features: [
      "Automated ETL / ELT batch pipelines",
      "Real-time event streaming",
      "Data warehouse modeling (Snowflake/BigQuery)",
      "Executive KPI dashboards",
    ],
  },
  {
    code: "05",
    title: "UI/UX Design",
    desc: "Cinematic, user-centered interfaces designed around what users actually need, crafted with meticulous micro-interactions.",
    stack: ["Figma", "Design Systems", "Prototyping"],
    features: [
      "Comprehensive design systems",
      "Interactive high-fidelity prototypes",
      "WCAG 2.1 AA accessibility compliance",
      "Design-to-code token pipelines",
    ],
  },
  {
    code: "06",
    title: "Product Consulting",
    desc: "Technical audits, architecture reviews, and product roadmap planning before committing large engineering budgets.",
    stack: ["Architecture", "Roadmapping", "Audits"],
    features: [
      "Legacy codebase & security audits",
      "Scalability & performance profiling",
      "Build vs. buy technical advisory",
      "Quarterly technical roadmaps",
    ],
  },
];

export const process = [
  {
    step: "01",
    code: "DISCOVER",
    title: "Scope the build",
    desc: "We map requirements, constraints, and success criteria in a living working document you own — not an abstract slide deck.",
  },
  {
    step: "02",
    code: "DRAFT",
    title: "Architecture & design",
    desc: "System diagrams, database schemas, and interactive UI wireframes thoroughly reviewed with you before any code is written.",
  },
  {
    step: "03",
    code: "BUILD",
    title: "Sprints with visibility",
    desc: "Weekly demo calls, a shared kanban board, and a private staging environment you can test anytime.",
  },
  {
    step: "04",
    code: "SHIP",
    title: "Launch & handover",
    desc: "Deployed to production, extensively documented, and handed over with full source code IP — no vendor lock-in.",
  },
  {
    step: "05",
    code: "SUPPORT",
    title: "Post-launch care",
    desc: "Dedicated support retainers for infrastructure monitoring, patches, and iterative feature releases post-launch.",
  },
];

export const founders = [
  {
    name: "Founder One",
    role: "Full-Stack Engineering",
    bio: "Leads architecture decisions across the stack — from database schema design to automated multi-region deployment pipelines.",
    focus: ["React", "Node.js", "System Design"],
  },
  {
    name: "Founder Two",
    role: "Mobile & Frontend",
    bio: "Crafts tactile interfaces and mobile experiences with obsessive attention to fluid motion, rendering speed, and typography.",
    focus: ["React Native", "UI Engineering", "Accessibility"],
  },
  {
    name: "Founder Three",
    role: "Cloud & Infrastructure",
    bio: "Engineers resilient cloud architectures — automated CI/CD, container orchestration, zero-downtime deployments, and telemetry.",
    focus: ["AWS", "Docker", "Observability"],
  },
  {
    name: "Founder Four",
    role: "Data & Product",
    bio: "Translates complex operational requirements into sharp technical specifications, data pipelines, and analytical tools.",
    focus: ["Data Engineering", "Power BI", "Product Strategy"],
  },
];

export const work = [
  {
    tag: "WEB PLATFORM",
    title: "Booking & operations dashboard",
    desc: "A real-time booking tracker and management engine for a co-living operator, replacing manual spreadsheets across five properties.",
    stack: ["React", "PostgreSQL", "Power BI"],
  },
  {
    tag: "DATA PIPELINE",
    title: "Retail sales ETL pipeline",
    desc: "Automated ingestion and transformation of high-volume retail transactions into a sub-second analytical data warehouse.",
    stack: ["Python", "Airflow", "Docker"],
  },
  {
    tag: "MOBILE + REALTIME",
    title: "Live translation video platform",
    desc: "A collaborative video conferencing product with synchronized real-time voice translation layered over a custom WebRTC core.",
    stack: ["React", "WebRTC", "Node.js"],
  },
];

export const engagementModels = [
  {
    title: "Fixed Scope",
    badge: "01",
    desc: "A clearly defined deliverable with a guaranteed timeline and fixed budget. Ideal when specs are settled upfront.",
    bullets: [
      "Rigorous milestone roadmap",
      "Guaranteed delivery date",
      "Ideal for MVPs & product launches",
      "Full IP & source code transfer",
    ],
  },
  {
    title: "Dedicated Team",
    badge: "02",
    highlight: true,
    desc: "Our engineering and design partners embedded directly with your team for continuous product development.",
    bullets: [
      "Weekly agile sprint cycles",
      "Direct Slack/Discord access",
      "Evolving scope aligned with user feedback",
      "Direct senior engineering access",
    ],
  },
  {
    title: "Retainer",
    badge: "03",
    desc: "Continuous technical maintenance, SLA-backed response times, performance tuning, and incremental feature releases.",
    bullets: [
      "Dedicated monthly hours block",
      "Priority SLA response time",
      "Proactive infrastructure monitoring",
      "No long-term lock-in contract",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "They scoped the project honestly instead of just telling us what we wanted to hear — that alone saved us weeks of wasted engineering.",
    name: "Alex Thorne",
    role: "Operations Lead, Co-living Startup",
  },
  {
    quote:
      "Weekly demos and transparent staging builds meant our leadership never had to wonder what was actually being developed.",
    name: "Elena Rostova",
    role: "Founder & CEO, D2C Studio",
  },
];

export const faqs = [
  {
    q: "You don't have static prices listed — why?",
    a: "Every project has distinct technical requirements, scaling targets, and timelines. Submit your brief through our inquiry form and we'll reply with a detailed scope estimate and proposal within two business days.",
  },
  {
    q: "Do we own the intellectual property and source code?",
    a: "Yes, 100%. Upon completion and final milestone payment, all intellectual property, repository access, and infrastructure credentials transfer completely to your organization.",
  },
  {
    q: "Can you collaborate with our existing in-house team?",
    a: "Absolutely. We frequently integrate alongside existing engineering teams to lead specialized modules, cloud migrations, or critical delivery crunch periods.",
  },
  {
    q: "What is your typical project timeline?",
    a: "A focused MVP build typically spans 6 to 10 weeks. Larger platform ecosystems operate in monthly iterative phases with deployable releases at each milestone.",
  },
  {
    q: "Where is the team based and how do you handle timezones?",
    a: "We are a remote-first studio with distributed partners across India, Europe, and the Americas, providing guaranteed daily working overlap hours with US and European clients.",
  },
];
