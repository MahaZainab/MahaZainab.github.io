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
    skills: {
      frontend: [
        { name: "HTML", icon: "path/to/html-icon.svg" },
        { name: "CSS", icon: "path/to/css-icon.svg" },
        { name: "Bootstrap", icon: "path/to/bootstrap-icon.svg" },
        { name: "Tailwind CSS", icon: "path/to/tailwind-icon.svg" },
        { name: "JavaScript", icon: "path/to/javascript-icon.svg" },
        { name: "Material UI", icon: "path/to/material-ui-icon.svg" },
        { name: "Ant Design", icon: "path/to/ant-design-icon.svg" },
        { name: "React JS", icon: "path/to/react-icon.svg" }
      ],
      backend: [
        { name: "PHP", icon: "path/to/php-icon.svg" },
        { name: "MySQL", icon: "path/to/mysql-icon.svg" },
        { name: "Node JS", icon: "path/to/node-icon.svg" },
        { name: "Express JS", icon: "path/to/express-icon.svg" },
        { name: "MongoDB", icon: "path/to/mongodb-icon.svg" },
        { name: "Firebase", icon: "path/to/firebase-icon.svg" }
      ],
      languages: [
        { name: "Python", icon: "path/to/python-icon.svg" },
        { name: "Java", icon: "path/to/java-icon.svg" },
        { name: "C++", icon: "path/to/cpp-icon.svg" }
      ],
      others: [
        { name: "Git", icon: "path/to/git-icon.svg" },
        { name: "Docker", icon: "path/to/docker-icon.svg" },
        { name: "Kubernetes", icon: "path/to/kubernetes-icon.svg" }
      ]
    }  
  };
  