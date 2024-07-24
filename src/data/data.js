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
      logo: require('../assets/img/logo.svg').default,
      links: [
        { href: "#home", name: "Home" },
        { href: "#skills", name: "Skills" },
        { href: "#projects", name: "Projects" }
      ],
      socialIcons: [
        { href: "#", src: require('../assets/img/nav-icon1.svg').default },
        { href: "#", src: require('../assets/img/github-mark-white.svg').default },
        { href: "#", src: require('../assets/img/nav-icon3.svg').default }
      ]
    }  
  };
  