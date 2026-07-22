export const site = {
  name: "Safwan Hasan",
  headshot: "/headshot.png", // swap to /headshot.jpg when you add it to public/
  about: `I’m a student software engineer and AI researcher interested in building systems that turn complex data into tools people can actually use. My work spans machine learning, full-stack development, and applied research, with experience taking ideas from experimentation to deployment. I enjoy collaborating in technical teams, asking thoughtful questions, and refining solutions through iteration, and am particularly interested in projects at the intersection of computer science and language. I’m actively seeking opportunities where I can learn from experienced engineers while contributing meaningful, well-designed solutions.`,
  email: "safwanhasan120@outlook.com",
  school_email: "shasan08@uw.edu"
} as const;

export const experience = [
  {
    role: "AI Research Intern",
    company: "Mobile Intelligence Lab (UW Allen School)",
    period: "Jul 2025 – Sep 2025",
    roleType: "research",
    description:
      "Worked on an **atypical speech translation** project; developed **data-driven** insights on **ALS** and Parkinson’s speech patterns, expanded the model beyond **Cerebral Palsy**, and built a **deployment pipeline** validated across devices.",
  },
  {
    role: "Summer Research Intern",
    company: "Stanford AIMI Center",
    period: "Jun 2024 – Jul 2024",
    roleType: "research",
    description:
      "Selected as **1 of 26 interns** nationwide; built a **lung disease classification** pipeline by tokenizing radiology reports (**SpaCy**) and training a **ResNeXt-50** model with **LibAUC** optimization; team won **1st place** for the final presentation and pipeline.",
  },
  {
    role: "Lead Software Engineering Intern",
    company: "Rove (YC W24)",
    period: "Sep 2024 – Dec 2024",
    roleType: "engineering",
    description:
      "**Co-led** a team of interns to build Rove’s flight booking service. Spearheaded frontend architecture using **React**, designed booking flows and state management patterns, and coordinated sprint execution to deliver a scalable, production-ready user interface.",
  },
  {
    role: "Cofounder & Vice President (25–26) • Secretary (24–25)",
    company: "Applied Programming Club",
    period: "May 2024 – Present",
    roleType: "leadership",
    description:
      "Led **full-stack web** projects for startups and local businesses while teaching **frontend** fundamentals; helped grow the club to **35+ active members**.",
  },
] as const;

/** Logos for the experience strip (greyscale). Replace with official logos if desired. */
export const logoStrip = [
  { name: "Y Combinator", src: "/logos/yc.svg" },
  { name: "Stanford University", src: "/logos/stanford.svg" },
  { name: "University of Washington", src: "/logos/uw.svg" },
] as const;

export const skills = [
  // Languages
  "Python",
  "Java",
  "JavaScript/TypeScript",
  "C#",
  "C++",
  "HTML/CSS",

  // Frameworks / Libraries
  "React",
  "Next.js",
  "Node.js",
  "PyTorch",
  "TensorFlow",
  "Matplotlib",
  "Firebase",

  // Tools
  "Git/GitHub",
  "VS Code",
  "Google Colab",
] as const;

export const projects = [
  {
    title: "Synapse",
    description:
      "Built a shared AI memory and governance layer for engineering teams that plugs into tools like Cursor and VSCode. Designed a pnpm monorepo backend with PostgreSQL/pgvector, GitHub OAuth with JWT auth, and an events-ingestion pipeline using OpenAI embeddings for semantic search across developer-AI interactions. Pivoted the product from a shared memory store to a PR-style review layer, where agents propose context changes and humans approve before commit, exposed through an MCP server as the primary interface.",
    link: "https://github.com/SafwanHasan120/Synapse",
    award: "",
  },
  {
    title: "Roots",
    description:
      "Developed a full-stack internship discovery and resume tailoring platform using Next.js and TypeScript. Built a scraping pipeline to aggregate internship listings with Fuse.js-powered fuzzy search and filtering, paired with a Claude-powered 'Tailor' feature that rewrites LaTeX resumes to match specific job descriptions via the Anthropic API. Focused on a clean, responsive UI and an efficient search/filter experience for job seekers.",
    link: "https://github.com/SafwanHasan120/Roots",
    award: "",
  },
  {
    title: "Tesla STEM Job Portal (STEMLink)",
    description:
      "Built an unofficial job portal for students/employers with admin controls for postings and applications using Next.js + Firebase, styled with Tailwind and Framer; integrated OpenAI tooling. Won 1st at FBLA Regionals and 4th at State, qualifying for Nationals.",
    link: "https://stemlink.vercel.app/",
    award: "FBLA Website Coding & Development: 1st Regionals, 4th State (Qualified for Nationals)",
  },
  {
    title: "PotLaunch",
    description:
      "Built a community-driven funding platform that enables transparent, decentralized capital formation using blockchain-based smart contracts. Implemented automated profit-sharing mechanisms, integrated Stripe for real-time revenue tracking, and designed a scalable full-stack interface for launching and managing ventures.",
    link: "https://pot-launch.vercel.app/",
    award: "Niyyah Hacks: 2nd Place",
  },
  {
    title: "9-1-1 Assistant",
    description:
      "Created a conversational TTS 9-1-1 responder emulator to address responder staffing shortages using a Next.js + Flask stack, plus GTTS, PyDub, and OpenAI APIs.",
    link: "https://github.com/SafwanHasan120/EmergencyDispatchContactAI",
    award: "Medihacks 2024: 2nd place (U-18)",
  },
  {
    title: "Lost & Found",
    description:
      "Built a full-stack lost-item recovery platform using Next.js and Supabase. Designed a relational PostgreSQL schema to structure item listings, user authentication, and image metadata, with indexed search for efficient filtering. Implemented secure auth, row-level security policies, and real-time database updates. Focused on scalable backend design and a clean, responsive frontend UI.",
    link: "https://lostandfound-theta-seven.vercel.app/",
    award: "FBLA Regionals: 4th Place",
  },
  {
    title: "FarmFresh+",
    description:
      "Developed a farm-to-table marketplace startup concept with a full business plan: industry analysis, supply chain design, financial projections, and product mockups (Next.js + Figma).",
    link: "https://www.fbla.org/media/2025/07/TOP_10_NLC_HS.pdf",
    award: "FBLA Business Plan: 1st State, 2nd Nationals (200+ teams)",
  },
] as const;

export const social = {
  github: "https://github.com/SafwanHasan120",
  linkedin: "https://www.linkedin.com/in/safwan-hasan-610803282/",
  instagram: "", // optional: add if you want it shown
  calendly: "https://calendly.com/safwanhasan120/30min",
} as const;

export type SiteConfig = typeof site;
export type ExperienceItem = (typeof experience)[number];
export type ProjectItem = (typeof projects)[number];
