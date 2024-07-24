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
    }  
  };
  