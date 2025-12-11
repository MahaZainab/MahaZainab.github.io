// Local Imports
import type {
  About,
  Award,
  Book,
  News,
  Publication,
  Service,
  Talk,
} from "@/types/content";
import profileImage from "../assets/images/profile.jpg";

/*
 * ┌───────────────────────────────┐
 * │        🌟 About 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const about: About = {
  imageUrl: profileImage,
  name: "Maha Zainab",
  degree: "PhD in Computer Science and Software Engineering",
  instituteName: "Auburn University",
  email: "maz0032@auburn.edu",
  p1: "PhD researcher focusing on multi-agent reasoning, mutual theory of mind, and secure code understanding, and LLM evaluation. I have experience building end-to-end data pipelines, RAG systems, and multi-agent reasoning frameworks. I enjoy designing practical, interpretable ML solutions by combining rigorous evaluation methods with scalable engineering practices.",
  p2: "To sharpen my own problem solving skills, I solve leetcode problems regularly. I enjoy participating in hackathons and coding constests.",
  p3: "",
  // For footer
  location: "United States Of America",
  researchAreas: [
    "Generative AI",
    "NLP",
    "Secure Code Understanding",
    "RAG Systems",
    "Multi-Agent Reasoning",
    "Mutual Theory of Mind",
    "LLM Evaluation",
  ],
  shortBio:
    "PhD researcher working on Generative AI, NLP, secure code understanding, and LLM evaluation, with experience in data pipelines, RAG systems, and multi-agent reasoning.",
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Publication 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const publications: Publication[] = [
  {
    id: 1,
    title:
      "Teaching evaluators to think: Diagnosing and improving large language models for code reasoning tasks",
    authors: ["Maha Zainab", "Kangyou Park", "Hao Zhu", "Qiaosi Wang", "Anh Totti Nguyen", "Effat Farhana"],
    pdfLink: "",
    talkLink: "",
    year: "2025",
    doi: "",
  },
  {
    id: 2,
    title: "Credibility Identification on Facebook",
    authors: [
      "Maha Zainab", "Asad Ali Shah", "Sharifullah Khan", "Seemab Latif", "Safdar Abbas Khan"
      , "A. Ali Almazroi",
    ],
    pdfLink: "",
    talkLink: "",
    year: "2025",
    doi: "2025 International Conference on Innovation in Artificial Intelligence and Internet of Things (AIIT)/IEEE",
  },
  {
    id: 3,
    title: "Framework for Evaluating Credibility of News Shared on Facebook",
    authors: ["Maha Zainab", "Asad Ali Shah", "Sharifullah Khan", "Seemab Latif"],
    pdfLink: "",
    talkLink: "",
    year: "2019",
    doi: "",
  },
  {
    id: 4,
    title: "Scaling Reasoning with Multi-Agent Mutual Awareness Debate(MMAD)",
    authors: ["Maha Zainab", "Kangyou Park", "Hao Zhu", "Qiaosi Wang", "Anh Totti Nguyen", "Effat Farhana"],
    pdfLink: "",
    talkLink: "",
    year: "2026",
    doi: "",
  },
  {
    id: 5,
    title: "Small-Language Multi-Agent Debate to Identify Safety Attacks",
    authors: ["Maha Zainab", "Jiaqi Wang"],
    pdfLink: "",
    talkLink: "",
    year: "2026",
    doi: "",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 News 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const news: News[] = [
  {
    id: 2,
    title: "Participated in Ausome  Science in 60 seconds",
    year: "2025",
    category: "October",
  },
  {
    id: 3,
    title: "Participated in three Minute Thesis (3MT) Competition",
    year: "2025",
    category: "October",
  },
  {
    id: 1,
    title: "Accepted tutorial in 20th Workshop on Innovative Use of NLP for Building Educational Applications/ACL",
    year: "2025",
    category: "August",
  },
  {
    id: 4,
    title: "Received Gavin Fellowship",
    year: "2025",
    category: "March",
  },
  {
    id: 5,
    title: "Ministry of Economy, Trade & Industry, Japan Internship Awardee (1/90 from 20,000+ applicants)",
    year: "2024",
    category: "November",
  },
  {
    id: 5,
    title: "Advent of Code – Ranked 17/198,321 (2024, Day 20)",
    year: "2024",
    category: "November",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Talk 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const talks: Talk[] = [
  {
    id: 1,
    title: "Keynote Speaker at International AI Conference 2024",
    organization: "International AI Conference",
    slidesLink: "/slides/ai-conference-2024",
    category: "Keynote",
    year: "2024",
  },
  {
    id: 2,
    title: "Panel Discussion on Ethical AI Development",
    organization: "Global Tech Summit",
    slidesLink: "/slides/ethical-ai-panel",
    category: "Panel Discussion",
    year: "2024",
  },
  {
    id: 3,
    title: "Research Presentation on Neural Network Optimization",
    organization: "Machine Learning Symposium",
    slidesLink: "/slides/neural-network-optimization",
    category: "Research Talk",
    year: "2023",
  },
  {
    id: 4,
    title: "Workshop on Large Language Model Applications",
    organization: "AI Developers Conference",
    slidesLink: "/slides/llm-workshop",
    category: "Workshop",
    year: "2023",
  },
  {
    id: 5,
    title: "Invited Talk on Future of Generative AI",
    organization: "Tech Innovation Forum",
    slidesLink: "/slides/generative-ai-future",
    category: "Invited Talk",
    year: "2022",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Award 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const awards: Award[] = [
  {
    id: 1,
    title: "Research Excellence Award",
    organization: "International Research Foundation",
    year: "2024",
  },
  {
    id: 2,
    title: "Innovation in Science Award",
    organization: "Global Science Association",
    year: "2024",
  },
  {
    id: 3,
    title: "Outstanding Researcher Award",
    organization: "National Science Council",
    year: "2023",
  },
  {
    id: 4,
    title: "Academic Achievement Award",
    organization: "University Research Board",
    year: "2023",
  },
  {
    id: 5,
    title: "Young Scientist Award",
    organization: "Science Innovation Foundation",
    year: "2022",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Service 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const services: Service[] = [
  {
    id: 1,
    title: "Journal Peer Review - Nature Communications",
    category: "Reviewer",
    year: "2024",
    organization: "Nature Communications",
  },
  {
    id: 2,
    title: "Conference Program Committee Member",
    category: "Committee Member",
    year: "2024",
    organization: "ICML 2024",
  },
  {
    id: 3,
    title: "Grant Proposal Reviewer",
    category: "Grant Reviewer",
    year: "2023",
    organization: "National Science Foundation",
  },
  {
    id: 4,
    title: "Thesis Committee Member",
    category: "Thesis Committee",
    year: "2023",
    organization: "Stanford University",
  },
  {
    id: 5,
    title: "Journal Editorial Board",
    category: "Editorial Board",
    year: "2022",
    organization: "JAIR Journal",
  },
];

/*
 * ┌───────────────────────────────┐
 * │        🌟 Book 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export const books: Book[] = [
  {
    id: 1,
    title:
      "The Innovators: How a Group of Hackers, Geniuses, and Geeks Created the Digital Revolution",
    author: "Walter Isaacson",
    status: "completed",
    year: "2024",
  },
  {
    id: 2,
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    status: "currently reading",
    year: "2024",
  },
  {
    id: 3,
    title: "The Structure of Scientific Revolutions",
    author: "Thomas S. Kuhn",
    status: "completed",
    year: "2023",
  },
  {
    id: 4,
    title: "Deep Learning",
    author: "Ian Goodfellow, Yoshua Bengio, Aaron Courville",
    status: "completed",
    year: "2023",
  },
  {
    id: 5,
    title: "The Emperor of All Maladies: A Biography of Cancer",
    author: "Siddhartha Mukherjee",
    status: "currently reading",
    year: "2023",
  },
];
