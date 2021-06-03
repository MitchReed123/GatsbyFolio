import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'Logo.PNG',
  paragraphOne:
    'Full Stack Developer with 2 years of experience in software engineering and developing new features and apps for different products and companies by using programming tools like ReactJs, HTML, CSS, Node.js, and Gatsby. Capable of analyzing customer feedback in order to find the best way to create new and enhance the existing product features.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/1BRRvN65bvNIP5AHkgfEEjlzA0pEOV377/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'InvestTracker.PNG',
    title: 'TESTING',
    info: 'A MVC app that lets the user track all of their investments across Crypto/Precious Metals/Stocks and see Semi-Live market data compared to it on their profile page',
    info2: '',
    url: 'https://investtracker.azurewebsites.net',
    repo: 'https://github.com/MitchReed123/InvestTrackerMVC', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'RedBadgeProj.PNG',
    title: 'Lottery Tracking App',
    info: 'Gives the user the ability to track all the lottery numbers that they have bought and where they have bought them at.',
    info2: '',
    url: '',
    repo: 'https://github.com/MitchReed123/Red-Badge-Project-Client', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Natours.PNG',
    title: 'Natours',
    info: 'Tutorial Website using fully responsive SASS/SCSS',
    info2: '',
    url: 'https://mitchreed123.github.io/Natours/',
    repo: 'https://github.com/MitchReed123/Natours', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'reed.mitch@live.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/mitchell-reed-7923a9aa/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/MitchReed123',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
