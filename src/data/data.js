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
          { name: "PHP", image: require("../assets/img/skills/php.svg").default },
          { name: "MySQL", image: require("../assets/img/skills/mysql.svg").default },
          { name: "Node JS", image: require("../assets/img/skills/node.svg").default  },
          { name: "Express JS", image: require("../assets/img/skills/express.svg").default  },
          { name: "MongoDB", image: require("../assets/img/skills/mongodb.svg").default }
        ]
      },
      {
        title: "Languages",
        skills: [
          { name: "Python", image: "path/to/python-icon.svg" },
          { name: "JavaScript", image: "path/to/java-icon.svg" },
          { name: "Java", image: "path/to/cpp-icon.svg" }
        ]
      },
      {
        title: "Others",
        skills: [
          { name: "Git", image: "path/to/git-icon.svg" },
          { name: "Github", image: "path/to/docker-icon.svg" },
          { name: "VS Code", image: "path/to/kubernetes-icon.svg" }
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Information Technology",
        period: "2016-2019",
        institute: "National University of Sciences and Technology, Islamabad, Pakistan",
        thesisTitle: "Information Credibility Identification in Facebook Stories",
        thesisDomain: "Information Retrieval and Machine Learning",
        technologiesUsed: ["Scikit-Learn", "Numpy", "NLTK", "NLU", "TextStat", "TextBlob"],
        thesisDetail: "The research proposed a system that uses multiple machine learning classification models to predict the credibility of news articles correctly. The research used seven credibility categories for evaluating news and each category had multiple features. The system's accuracy was evaluated on two different datasets where decision tree and gradient boosting classification models achieved accuracy scores of 93% and 95% respectively."
      },
      {
        degree: "Bachelor of Science in Information Technology",
        period: "2011-2015",
        institute: "University of Gujrat, Pakistan",
        finalYearProject: "Collaborative Editor on Web-Based Overlay Network",
        projectDomain: "Web Development",
        technologiesUsed: ["Socket.io", "node.js", "AngularJs"],
        projectDetail: "I implemented a plugin-free web-based overlay network (WOvNet) with the integration of editors in a collaborative environment. It also features audio chat and video chat. Further, to facilitate users I provided a Chrome extension to join the network that encompasses all mentioned features."
      }
    ],
    projects: [
      {
        category: "Web Development",
        projects: [
          {
            title: "Travel The World",
            description: "Landing Page Design",
            imgUrl: "../assets/img/projects/project-img1.png",
            gitUrl: "https://github.com/username/project1"
          },
          {
            title: "Collaborative Editor",
            description: "Web-Based Overlay Network",
            imgUrl: "path/to/project-img2.png",
            gitUrl: "https://github.com/username/project2"
          },
          {
            title: "E-commerce Platform",
            description: "Online Store",
            imgUrl: "path/to/project-img3.png",
            gitUrl: "https://github.com/username/project3"
          }
        ]
      },
      {
        category: "Machine Learning",
        projects: [
          {
            title: "Spam Detection",
            description: "Email Spam Detection System",
            imgUrl: "path/to/project-img4.png",
            gitUrl: "https://github.com/username/project4"
          },
          {
            title: "Sentiment Analysis",
            description: "Twitter Sentiment Analysis",
            imgUrl: "path/to/project-img5.png",
            gitUrl: "https://github.com/username/project5"
          }
        ]
      },
      {
        category: "Gen AI",
        projects: [
          {
            title: "Weather App",
            description: "Weather Forecast App",
            imgUrl: "path/to/project-img6.png",
            gitUrl: "https://github.com/username/project6"
          },
          {
            title: "Fitness Tracker",
            description: "Health & Fitness App",
            imgUrl: "path/to/project-img7.png",
            gitUrl: "https://github.com/username/project7"
          }
        ]
      },
      {
        category: "Hackathons",
        projects: [
          {
            title: "Stock Prediction",
            description: "Predicting Stock Prices",
            imgUrl: "path/to/project-img8.png",
            gitUrl: "https://github.com/username/project8"
          },
          {
            title: "Customer Segmentation",
            description: "Segmenting Customer Data",
            imgUrl: "path/to/project-img9.png",
            gitUrl: "https://github.com/username/project9"
          }
        ]
      }
    ]    
  };
  