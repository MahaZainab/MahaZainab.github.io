// src/data.js

export const data = {
    about: {
      title: "About Me",
      description: "Hi, I'm Maha Zainab, a passionate developer with a knack for creating elegant and efficient solutions. Welcome to my portfolio!"
    },
    projects: [
      {
        title: "Project One",
        description: "Description for project one."
      },
      {
        title: "Project Two",
        description: "Description for project two."
      }
    ],
    navbar: {
      logo: require('../assets/img/Maha.svg').default,
      links: [
        { href: "#home", name: "Home" },
        { href: "#research", name: "Research" },
        { href: "#projects", name: "Projects" },
        { href: "#skills", name: "Skills" },
        { href: "#education", name: "Education" },
        { href: "#experience", name: "Experience" },
        { href: "#contact", name: "Contact" }
      ],
      socialIcons: [
        { href: "https://www.linkedin.com/in/mahazainab/", src: require('../assets/img/linkedin.svg').default },
        { href: "https://github.com/MahaZainab", src: require('../assets/img/github.svg').default },
        { href: "https://www.kaggle.com/mahazainab28", src: require('../assets/img/kaggle.svg').default },
        { href: "mznb03@gmail.com", src: require('../assets/img/gmail.svg').default }
      ]
    },
    banner: {
      tagline: "Welcome to my Portfolio",
      name: "Maha Zainab",
      roles: ["Machine Learning Enthusiast ", "MERN Stack Developer", "NLP, ASR, CV Researcher"],
      description: "2x Harvard Competitions winner. 3rd highest female coder nationwide and ranked 1798th globally in Google Code Jam 2023. 45th position on day 19 among 311,017 coders in the Advent of Code 2023",
      connectButtonText: "Let’s Connect",
      headerImg: require('../assets/img/Maha Pic.svg').default,
    },
    skills: [
      {
        title: "Frontend",
        skills: [
          { name: "HTML", image: require("../assets/img/skills/html.svg").default },
          { name: "CSS", image: require("../assets/img/skills/css3.svg").default },
          { name: "Bootstrap", image: require("../assets/img/skills/bootstrap.svg").default },
          { name: "JavaScript", image: require("../assets/img/skills/javascript.svg").default },
          { name: "Streamlit", image: require("../assets/img/skills/streamlit.svg").default },
          { name: " React", image: require("../assets/img/skills/react.svg").default }
        ]
      },
      {
        title: "Backend",
        skills: [
          { name: "PHP", image: "path/to/php-icon.svg" },
          { name: "MySQL", image: "path/to/mysql-icon.svg" },
          { name: "Node JS", image: "path/to/node-icon.svg" },
          { name: "Express JS", image: "path/to/express-icon.svg" },
          { name: "MongoDB", image: "path/to/mongodb-icon.svg" },
          { name: "Firebase", image: "path/to/firebase-icon.svg" }
        ]
      },
      {
        title: "Languages",
        skills: [
          { name: "Python", image: "path/to/python-icon.svg" },
          { name: "Java", image: "path/to/java-icon.svg" },
          { name: "C++", image: "path/to/cpp-icon.svg" }
        ]
      },
      {
        title: "Others",
        skills: [
          { name: "Git", image: "path/to/git-icon.svg" },
          { name: "Docker", image: "path/to/docker-icon.svg" },
          { name: "Kubernetes", image: "path/to/kubernetes-icon.svg" }
        ]
      }
    ]  
  };
  