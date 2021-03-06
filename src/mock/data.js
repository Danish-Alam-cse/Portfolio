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
  name: 'Md Danish Alam',
  subtitle: 'Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://novoresume.com/editor/resume/6fc18540-71cd-11eb-99b9-5d37fb8b187f', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
 
  {
    id: nanoid(),
    img: 'ecom.png',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'biz.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'danishalam002@gmail.com',
};

// FOOTER DATA
export const footerData = {

  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Muhamma55387613',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/devDanish',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/md-danish-alam-7a432a1b4/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Danish-Alam-cse',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
