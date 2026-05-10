/*
 * ┌───────────────────────────────┐
 * │        🌟 About Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type About = {
  imageUrl: string;
  name: string;
  degree: string;
  instituteName: string;
  email: string;
  p1: string;
  p2?: string;
  p3?: string;
  p4?: string;
  shortBio: string;
  location: string;
  researchAreas: string[];
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Publication Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Publication = {
  id: number;
  title: string;
  authors: string[];
  pdfLink: string;
  talkLink: string;
  year: string;
  doi: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 News Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type News = {
  id: number;
  title: string;
  year: string;
  category: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Talk Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Talk = {
  id: number;
  title: string;
  organization: string;
  slidesLink: string;
  category: string;
  year: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Award Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Award = {
  id: number;
  title: string;
  year: string;
  organization: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Service Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Service = {
  id: number;
  title: string;
  category: string;
  year: string;
  organization: string;
};

/*
 * ┌───────────────────────────────┐
 * │        🌟 Book Types 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */

export type Book = {
  id: number;
  title: string;
  year: string;
  author: string;
  status: string;
};
/*
 * ┌───────────────────────────────┐
 * │        🌟 Projects 🌟       │
 * └───────────────────────────────┘
 *
 * ────────────────────────────────
 * Keep calm and code on! 👩‍💻👨‍💻
 */
export type Project = {
  id: number;
  title: string;
  technology: string;
  description: string;
  year: string;
};