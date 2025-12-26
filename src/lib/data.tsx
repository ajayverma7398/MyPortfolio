import { Github, Twitter, Figma } from 'lucide-react';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/ajayverma7398',
  GITHUB_REPO: 'https://github.com/ajayverma7398?tab=repositories.dev',
  LINKEDIN: 'https://www.linkedin.com/in/ajayverma7398/',
  TWITTER: 'https://x.com/ajayverma7398',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: 'https://github.com/ajayverma7398',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: '/images/logos/icon-javascript.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: '/images/logos/icon-typescript.svg',
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: '/images/logos/icon-react.svg',
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: '/images/logos/icon-nextjs.svg',
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: '/images/logos/icon-nodejs.svg',
    url: 'https://nodejs.org/en',
  },
  {
    label: 'PostgreSQL',
    logo: '/images/logos/icon-postgresql.svg',
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'Scss',
    logo: '/images/logos/icon-sass.svg',
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: '/images/logos/icon-tailwindcss.svg',
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'Material-UI',
    logo: '/images/logos/icon-material-ui.svg',
    url: 'https://mui.com/',
  },
  {
    label: 'Figma',
    logo: '/images/logos/icon-figma.svg',
    url: 'https://www.figma.com/',
  },
  {
    label: 'Git',
    logo: '/images/logos/icon-git.svg',
    url: 'https://git-scm.com/',
  },
  {
    label: 'GitHub',
    logo: '/images/logos/icon-github.svg',
    url: 'https://github.com/',
  },
  {
    label: 'Html',
    logo: '/images/logos/icon-html.svg',
    url: 'https://html.com/',
  },
  {
    label: 'Css',
    logo: '/images/logos/icon-css.svg',
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },

];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: '/images/logos/logo-wipro.svg',
    logoAlt: 'Wipro logo',
    position: 'Project Engineer',
    startDate: new Date(2022, 3),
    endDate: new Date(2024, 6),
    summary: [
      'Worked as a Frontend Developer at Wipro on the RSDB project, contributing to large-scale enterprise UI modernization.',
      'Designed and developed reusable UI modules using React.js and Next.js with TypeScript, Redux, and modern component-driven architecture.',
      'Played a key role in migrating legacy class-based components to functional components using React Hooks, improving maintainability and code clarity.',
      'Integrated frontend applications with REST APIs to enable real-time data flow and seamless backend communication.',
      'Contributed to a migration initiative transitioning from a classic UI to a modern React-based architecture in an AWS cloud environment.',
      'Developed responsive and consistent user interfaces using Material UI, Tailwind CSS, HTML, and Styled Components.',
      'Collaborated closely with design, backend, QA, and client stakeholders through Agile ceremonies to align on requirements, delivery milestones, and quality standards.',
      'Wrote unit and integration tests using Jest and React Testing Library, achieving high test coverage and ensuring reliable, production-ready releases.',
    ],
  },
  {
    logo: '/images/logos/tcl-logo.jpg',
    logoAlt: 'Troop Comforts Limited logo',
    position: 'Frontend Developer',
    startDate: new Date(2024, 6),
    summary: [
      'Working as a Frontend Developer at Troop Comforts Limited, leading frontend development for the MIS (Management Information System) Portal Dashboard and reporting directly to the Project Manager.',
      'Responsible for live production applications, handling UI enhancements, bug fixes, and management-driven feature requests to support business operations.',
      'Designed and developed modular, reusable UI components using React.js, Next.js, TypeScript, and Context API for scalable and maintainable frontend architecture.',
      'Integrated Auth0-based authentication to enable secure login flows and role-based access control across the application.',
      'Consumed RESTful APIs and Context API endpoints to efficiently render dynamic data and real-time reports.',
      'Ensured WCAG-compliant accessibility, responsive layouts, and cross-browser compatibility using Material UI and Tailwind CSS.',
      'Improved frontend performance through lazy loading, API caching, and code-splitting techniques.',
      'Collaborated closely with backend, QA, and business stakeholders to refine UI workflows, validate data accuracy, and meet usability and delivery standards.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'RSDB (Retail Site Database)',
    description:
      'RSDB is an enterprise-scale retail data platform focused on modernizing legacy systems into a scalable, cloud-ready web application. The project involved UI modernization, performance improvements, and seamless integration with backend services to support dynamic retail operations.',
    url: '', // internal enterprise project
    previewImage: '/images/project-rsdb.png',
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Material UI',
      'Tailwind CSS',
      'HTML',
      'Styled Components',
      'Redux',
      'Context API',
      'REST APIs',
      'AWS',
    ],
  }, {
    name: 'MIS (Management Information System) Portal',
    description:
      'A centralized dashboard application designed to generate and manage dynamic business reports. The MIS Portal focuses on performance, security, and usability to support data-driven decision-making for internal stakeholders.',
    url: '', // internal enterprise application
    previewImage: '/images/project-tcl.png',
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Git',
      'REST APIs',
    ],
  },
  {
    name: 'Compression App',
    description:
      'A privacy-focused file compression application designed to efficiently compress PDFs, images, and short videos directly in the browser. The app emphasizes performance, security, and a smooth user experience without relying on server-side processing.',
    url: 'https://img-pdf-vid-compress.vercel.app/',
    previewImage: '/images/project-compression.png',
    technologies: [
      'Next.js',
      'ReactJS',
      'JavaScript',
      'TypeScript',
      'Redux Toolkit',
      'Material UI',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    name: 'Test Automation with Playwright',
    description:
      'An automated testing suite built to validate critical user journeys of a sample e-commerce application. The project focuses on ensuring UI reliability, performance, and cross-browser consistency through robust end-to-end testing.',
    url: '',
    previewImage: '',
    technologies: [
      'Playwright',
      'JavaScript',
      'React',
      'HTML',
      'CSS',
    ],
    // highlights: [
    //   'Designed and implemented end-to-end automated test scenarios using Playwright for a sample e-commerce application.',
    //   'Automated key user workflows including authentication, product discovery, cart management, and checkout flows.',
    //   'Added assertions to validate UI behavior, responsiveness, and performance across multiple browsers.',
    //   'Improved test stability and maintainability by using robust selectors, reusable utilities, fixtures, and optimized wait strategies.',
    //   'Focused on reducing test flakiness and improving execution reliability through best practices in test automation.',
    // ],
  },
];

// dummy testimonials for now
export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Krisztian Gyuris',
    personAvatar: '/images/avatar-krisztian.png',
    title: 'Founder - inboxgenie.io',
    testimonial:
      'Job well done! I am really impressed. He is very very good at what he does:) I would recommend Ajay and will rehire in the future for Frontend development.',
  },
  {
    personName: 'Eugen Esanu',
    personAvatar: '/images/avatar-eugen.png',
    title: 'Founder - shosho.design',
    testimonial:
      'Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.',
  },
  {
    personName: 'Joe Matkin',
    personAvatar: '/images/avatar-dummy.svg',
    title: 'Freelancer',
    testimonial:
      'Ajay was extremely easy and pleasant to work with and he truly cares about the project being a success. Ajay has a high level of knowledge and was able to work on my MERN stack application without any issues.',
  },
];
