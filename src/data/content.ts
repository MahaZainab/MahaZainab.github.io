// Local Imports
import type {
  About,
  Project,
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
  degree: "Graduate Research Assistant(PhD) in Computer Science and Software Engineering",
  instituteName: "Auburn University",
  email: "maz0032@auburn.edu",
  p1: "PhD researcher focusing on multi-agent reasoning, mutual theory of mind, and secure code understanding, and LLM evaluation. I have experience building end-to-end data pipelines, RAG systems, and multi-agent reasoning frameworks. I enjoy designing practical, interpretable ML solutions by combining rigorous evaluation methods with scalable engineering practices.",
  p2: "To sharpen my own problem solving skills, I solve leetcode problems regularly. I enjoy participating in hackathons and coding constests.",
  p3: "Currently, I am also working as Software/AI Developer at Auburn University Subject Matter Expert (AUSME). Please visit https://ausme.auburn.edu/ for more information.",
  p4: "I am also a Gavin Fellow, a prestigious fellowship program that supports and recognizes outstanding PhD students ",
  // For footer
  location: "United States Of America",
  researchAreas: [
    "Generative AI",
    "Small Language Models",
    "Large Language Models",
    "NLP",
    "Secure Code Understanding",
    "RAG Systems",
    "Multi-Agent Reasoning",
    "Theory of Mind",
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
      "Teaching AI Evaluators to Think: Diagnosing and Improving Large Language Models for Code Reasoning Tasks",
    authors: ["Maha Zainab", "Kangyou Park", "Qiaosi Wang", "Effat Farhana"],
    pdfLink: "",
    talkLink: "",
    year: "2026",
    doi: "FSE 2026 (Under Review)",
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
    title: "MMAD: Multi-Agent Mutual Awareness Debate – A Theory of Mind Framework for Stabilising Small Language Model Debate,",
    authors: ["Maha Zainab", "Kangyou Park", "Hao Zhu", "Qiaosi Wang", "Effat Farhana"],
    pdfLink: "",
    talkLink: "",
    year: "2026",
    doi: "ACL Rolling Review(Under Review)",
  },
  {
    id: 5,
    title: "Small-Language Multi-Agent Debate to Identify Safety Attacks",
    authors: ["Maha Zainab", "Jiaqi Wang"],
    pdfLink: "",
    talkLink: "",
    year: "2025",
    doi: "",
  },
  {
    id: 6,
    title: "Theory of Mind and Application in Educational Context, Tutorial",
    authors: ["Effat Farhana", "Maha Zainab", "Qiaosi Wang", "Niloofar Mireshghallah", "Ramira van der Meulen", "Max van Duijn"],
    pdfLink: "",
    talkLink: "",
    year: "2026",
    doi: "BEA 2026 Co-located ACL",
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
  {
    id: 6,
    title: "Participated in Business Idea Bash and developed smart business solution(voice chatbot) to speed up orders in resutrants. ",
    year: "2026",
    category: "March",
  },
  {
    id: 7,
    title: "Secured 4.0/4.0 GPA in Fall 2025 semester",
    year: "2025",
    category: "December",
  },
  {
    id: 7,
    title: "Secured 4.0/4.0 GPA in Spring 2026 semester",
    year: "2026",
    category: "May",
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
    title: "Latest Trends in Technology and AI Research",
    organization: "University of Engineering and Technology",
    slidesLink: "",
    category: "Keynote Speaker",
    year: "2025",
  },
  {
    id: 2,
    title: "Emerging Coding Trends",
    organization: "DHA Suffa University",
    slidesLink: "",
    category: "Panel Discussion",
    year: "2024",
  },
  {
    id: 3,
    title: "Context-Aware Chatbots using Retrieval Augmented Generation Techniques",
    organization: "Pak Angles",
    slidesLink: "",
    category: "Keynote Speaker",
    year: "2024",
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

/*
 * ┌───────────────────────────────┐
 * │        🌟 Projects 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */
export const projects: Project[] = [
  {
    id: 1,
    title: "Advent of Code 2023",
    technology: "Python",
    description:
      "Participated in a 25-day coding competition and secured 45th position on day 19 among 311,017 coders.",
    year: "2023",
  },
  {
    id: 2,
    title: "Cohere Interview Chatbot",
    technology: "Cohere, NumPy, PDFReader, Streamlit",
    description:
      "Developed an AI chatbot to help job seekers prepare for interviews by analyzing resumes and job descriptions, using Cohere's language model with a Streamlit front end.",
    year: "2023",
  },
  {
    id: 3,
    title: "CS50x Puzzle Day 2023",
    technology: "Problem Solving",
    description:
      "Participated in Harvard University's international puzzle-solving competition, solved all 9 puzzles, and was recognized as a highest scorer.",
    year: "2023",
  },
  {
    id: 4,
    title: "Google Code Jam 2023",
    technology: "Python 3.7",
    description:
      "Participated in Google Code Jam 2023 and solved 4 out of 5 assigned competitive programming problems.",
    year: "2023",
  },
  {
    id: 5,
    title: "100 Minutes of Coding",
    technology: "C++",
    description:
      "Participated in a national-level coding competition organized by IEEE and qualified.",
    year: "2023",
  },
  {
    id: 6,
    title: "E-Learning Chatbot (RAG)",
    technology:
      "Python, LangChain, Google PaLM, InstructorEmbedding, FAISS, Streamlit",
    description:
      "Built a RAG-based chatbot for retrieving precise answers from an educational FAQ dataset using semantic embeddings, FAISS retrieval, and Google PaLM response generation.",
    year: "2024",
  },
  {
    id: 7,
    title: "Brain Tumour Classification and Detection",
    technology: "Python, TensorFlow, Keras, NumPy, Matplotlib, Jupyter",
    description:
      "Developed a deep learning model for brain tumour classification using MRI and CT-scan images, CNN architecture, preprocessing, and image normalization, achieving 95% accuracy.",
    year: "2024",
  },
  {
    id: 8,
    title: "Sentiment Analysis of Political Tweets",
    technology: "Tweepy, Scikit-learn, NLTK, NumPy, Pandas, Matplotlib",
    description:
      "Built an NLP pipeline to classify political tweet sentiment using TF-IDF features with Naive Bayes and SVM, achieving more than 97% accuracy.",
    year: "2024",
  },
  {
    id: 9,
    title: "Multi-Agent Debate",
    technology: "Python, Jupyter Notebook, LLMs, Multi-Agent Systems",
    description:
      "Developed experiments around multi-agent debate and reasoning workflows for large language model evaluation.",
    year: "2025",
  },
  {
    id: 11,
    title: "Federated and Collaborative Machine Learning",
    technology: "Python, Machine Learning, Federated Learning",
    description:
      "Explored federated and collaborative machine learning concepts through practical implementations and experiments.",
    year: "2025",
  },
  {
    id: 12,
    title: "Machine Learning Beginner to Advanced",
    technology: "Jupyter Notebook, Python, Machine Learning",
    description:
      "Created machine learning notebooks and educational material covering beginner-to-advanced ML concepts.",
    year: "2025",
  },
  {
    id: 13,
    title: "Eating Sound",
    technology: "Jupyter Notebook, ASR, Audio Processing",
    description:
      "Worked on ASR-related projects involving eating sound and audio processing experiments.",
    year: "2025",
  },
];