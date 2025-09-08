// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import plasmidLogo from './assets/company_logo/plasmid-logo.jpeg';
import timeLogo from './assets/company_logo/timeLogo.png';
 

// Education Section Logo's
import gbuLogo from './assets/education_logo/gbu-logo.png';
import bpsLogo from  './assets/education_logo/brilliant-logo.png';
import educationLogo from './assets/education_logo/education-logo.png';

// Project Section Logo's
import voiceGrid from './assets/work_logo/voicegrid-img.png';
import greenCart from './assets/work_logo/greencart-img.png';
import skillStack from './assets/work_logo/skillstack-img.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'VS Code', logo: vscodeLogo },  
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: plasmidLogo,
      role: "Fullstack Intern",
      company: "Plasmid",
      date: "August 2024 - January 2025",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",   
        "Express JS",  
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: gbuLogo,
      school: "Gautam Buddha University, Greater Noida",
      date: "August 2021 - July 2025",
      gradingSystem: "CGPA",
      grade: "9.26 / 10",
      desc: "",
      degree: "Bachelor of Technology in Computer Science & Engineering",
    },
    {
      id: 1,
      img: bpsLogo,
      school: "Brilliant Public School, Aligarh",
      date: "Apr 2020 - March 2021",
      gradingSystem: "percentage",
      grade: "95.6%",
      desc: "",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 2,
      img: bpsLogo,
      school: "Brilliant Public School, Aligarh",
      date: "Apr 2018 - March 2019",
      gradingSystem: "percentage",
      grade: "92.2%",
      desc: "",
      degree: "CBSE(X)",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "VoiceGrid - AI Blog Website",
      description:
        "An AI-powered blogging platform designed to streamline content creation and publishing. Features include intelligent content generation, secure authentication, role-based access, and a responsive UI. Built with the MERN stack and Gemini API integration, it demonstrates strong problem-solving and full-stack development skills.",
      image: voiceGrid,
      tags: ["React.js", "Node.js" ,"Express.js", "MongoDB","Tailwind CSS" ,"Gemini API"],
      github: "https://github.com/YoJu310/voicegrid-ai-blogapp",
      webapp: "https://voicegrid-ai-blogapp-frontend.vercel.app",
    },
    {
      id: 1,
      title: "GreenCart - Grocery Website",
      description:
        "A full-stack e-commerce platform built with the MERN stack, designed to provide a smooth and responsive online grocery shopping experience. It features secure user authentication, product browsing, shopping cart functionality, and an efficient checkout flow, along with an admin management system for handling products and orders. The project highlights my ability to develop scalable, real-world applications with clean UI and robust backend integration.",
      image: greenCart,
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/YoJu310/greencart-grocery-mern-website",
      webapp: "https://greencart-grocery-mern-website.vercel.app",
    },
    {
      id: 2,
      title: "SkillStack - EdTech Website",
      description:
        "A full-featured Learning Management System built with the MERN stack, designed to facilitate seamless online learning. With a focus on course delivery, user authentication, and administrative control, it provides instructors and students with streamlined access and management capabilities. Engineered for real-world application, this project highlights my proficiency in developing modular, secure, and scalable web solutions." ,
      image: skillStack,
      tags: ["React.js", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      github: "https://github.com/YoJu310/LMS-SkillStack",
      webapp: "https://skillstack-frontend.vercel.app",
       
    },  
  ];  

  export const images = [ educationLogo , timeLogo];