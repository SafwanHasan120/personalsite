export const site = {
  name: "Safwan Hasan",
  tagline: "High School Senior | AI Researcher | Software Engineer",
  headshot: "/headshot.png", // swap to /headshot.jpg when you add it to public/
  about: `I’m a high school senior at Tesla STEM High School in the Seattle area, focused on AI research and full-stack engineering. I’ve worked on applied ML projects spanning medical imaging and atypical speech translation, and I enjoy turning messy real-world data into reliable, user-facing systems. Lately, I’ve been building products that blend modern web stacks with AI to help people work faster—whether that’s coding, writing, or research. I also enjoy reading, playing chess, and learning new things.`,
  email: "safwanhasan120@outlook.com",
} as const;

export const experience = [
  {
    role: "AI Research Intern",
    company: "Mobile Intelligence Lab (UW Allen School)",
    period: "Jul 2025 – Sep 2025",
    description:
      "Worked on an **atypical speech translation** project; developed **data-driven** insights on **ALS** and Parkinson’s speech patterns, expanded the model beyond **Cerebral Palsy**, and built a **deployment pipeline** validated across devices.",
  },
  {
    role: "Summer Research Intern",
    company: "Stanford AIMI Center",
    period: "Jun 2024 – Jul 2024",
    description:
      "Selected as **1 of 26 interns** nationwide; built a **lung disease classification** pipeline by tokenizing radiology reports (**SpaCy**) and training a **ResNeXt-50** model with **LibAUC** optimization; team won **1st place** for the final presentation and pipeline.",
  },
  {
    role: "Lead Software Engineering Intern",
    company: "Rove (YC W24)",
    period: "Sep 2024 – Dec 2024",
    description:
      "**Co-led** a team of interns to build Rove’s flight booking service. Spearheaded frontend architecture using **React**, designed booking flows and state management patterns, and coordinated sprint execution to deliver a scalable, production-ready user interface.",
  },
  {
    role: "Cofounder & Vice President (25–26) • Secretary (24–25)",
    company: "Applied Programming Club",
    period: "May 2024 – Present",
    description:
      "Led **full-stack web** projects for startups and local businesses while teaching **frontend** fundamentals; helped grow the club to **35+ active members**.",
  },
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
    title: "Tesla STEM Job Portal (STEMLink)",
    description:
      "Built an unofficial job portal for students/employers with admin controls for postings and applications using Next.js + Firebase, styled with Tailwind and Framer; integrated OpenAI tooling. Won 1st at FBLA Regionals and 4th at State, qualifying for Nationals.",
    link: "https://stemlink.vercel.app/",
    award: "FBLA Website Coding & Development: 1st Regionals, 4th State (Qualified for Nationals)",
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
