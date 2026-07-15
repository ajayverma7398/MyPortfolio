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
    logo: '/images/logos/logo-monk-nx.png',
    logoAlt: 'Monk NX Technology logo',
    position: 'Frontend Developer',
    startDate: new Date(2024, 6),
    endDate: new Date(2026, 0),
    summary: [
      'Led frontend development of the MIS Portal Dashboard and Proquro at Monk NX Technology, reporting directly to the Project Manager and owning UI enhancements, bug fixes, and management-requested features on a live production system.',
      'Designed and delivered multiple UI screens for dynamic report generation, improving reporting efficiency and reducing average search time through optimized data flow.',
      'Revamped the platform landing page to improve performance and scalability, streamlining data flow and navigation for end users.',
      'Strengthened application security by preventing contact-form abuse, restricting unauthorized uploads, and resolving access-control vulnerabilities.',
      'Developed modular, reusable components in React.js and Next.js using TypeScript and Context API, reused across multiple report views.',
      'Integrated Auth0 authentication for secure login and role-based access control.',
      'Improved frontend performance through lazy loading, API caching, and code-splitting techniques, reducing initial load time.',
      'Ensured WCAG accessibility compliance, responsive layouts, and cross-browser consistency using Material UI and Tailwind CSS.',
    ],
  },
  {
    logo: '/images/webspiders.svg',
    logoAlt: 'Web Spiders logo',
    position: 'Frontend Developer',
    currentlyWorkHere: true,
    startDate: new Date(2026, 0),
    summary: [
      'Architected and developed enterprise procurement modules for Proquro & Trafasas at Web Spiders India Pvt. Ltd. — product listings, RFQ management, quotation comparison, and purchase order creation — using React.js, Next.js, JavaScript, HTML5, and Tailwind CSS, powering an end-to-end B2B workflow for buyers and sellers.',
      'Integrated 10+ RESTful APIs across product management, RFQ, quotation, and purchase order workflows, ensuring seamless frontend-backend data exchange.',
      'Implemented real-time notifications and live status sync using Socket.io, keeping RFQ, quotation, and order updates synchronized across buyer and seller dashboards without manual refresh.',
      'Integrated a Tiptap-based rich text editor for capturing formatted RFQ descriptions and product specifications directly within the platform.',
      'Built client-side PDF export functionality using jsPDF and html2canvas, enabling users to download purchase orders, quotations, and reports directly from the browser.',
      'Developed a drag-and-drop, customizable dashboard builder using react-grid-layout, allowing users to configure and rearrange analytics widgets/panels to fit their workflow.',
      'Implemented Auth0 authentication and role-based access control (RBAC) to manage buyer/seller identities and secure system access; applied Base64 encoding for safe transmission of binary data (product images) across HTTP/JSON APIs without corruption.',
      'Built 20+ reusable, responsive UI components with React.js and Next.js, reducing duplicate UI code and improving long-term maintainability.',
      'Developed responsive, cross-browser compatible interfaces using Tailwind CSS and optimized application performance for enterprise users.',
      'Collaborated with backend developers, QA, and cross-functional teams in an Agile/Scrum environment (Git, GitHub, ClickUp, Claude AI); participated in client discussions and requirement gathering, translating procurement workflows into intuitive UI features.',
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'RSDB (Retail Site Database)',
    description:
      'RSDB is an enterprise-scale retail data platform focused on modernizing legacy systems into a scalable, cloud-ready web application. The project involved UI modernization, performance improvements, and seamless integration with backend services to support dynamic retail operations.',
    url: '', // internal enterprise project
    previewImage: '/images/BP01.jpg',
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
      'The MIS Portal is a centralized dashboard application for generating and managing dynamic business reports. I led its frontend development, reporting directly to the Project Manager and owning UI enhancements, bug fixes, and management-requested features on a live production system. I designed and delivered multiple UI screens for dynamic report generation, improving reporting efficiency and reducing average search time through optimized data flow, and revamped the platform landing page to improve performance and scalability. I strengthened application security by preventing contact-form abuse, restricting unauthorized uploads, and resolving access-control vulnerabilities, and built modular, reusable components in React.js and Next.js using TypeScript and Context API, reused across multiple report views. I integrated Auth0 authentication for secure login and role-based access control, and improved frontend performance through lazy loading, API caching, and code-splitting techniques, all while ensuring WCAG accessibility compliance, responsive layouts, and cross-browser consistency using Material UI and Tailwind CSS.',
    url: '', // internal enterprise application
    previewImage: '/images/monknxtech.png',
    technologies: [
      'React',
      'Next.js',
      'JavaScript',
      'TypeScript',
      'Context API',
      'Auth0',
      'Material UI',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Git',
      'REST APIs',
    ],
  }, {
    name: 'Prquro & Trafasas (Proquroment Management System)',
    description:
      'Proquro and Trafasas are two enterprise procurement modules serving complementary B2B needs — Proquro is the internal procurement platform for buyers and sellers, while Trafasas is the B2B marketplace built on top of it. Together they cover product listings, RFQ management, quotation comparison, and purchase order creation, powering an end-to-end B2B workflow. I architected and developed both modules using React.js, Next.js, JavaScript, HTML5, and Tailwind CSS, integrating 10+ REST APIs across product, RFQ, quotation, and purchase order workflows. I implemented real-time notifications and live status sync with Socket.io, added a Tiptap-based rich text editor for RFQ descriptions and product specifications, and built client-side PDF export using jsPDF and html2canvas for purchase orders and reports. I also developed a drag-and-drop dashboard builder with react-grid-layout for customizable analytics widgets. Authentication and security were handled via Auth0 with role-based access control, along with Base64 encoding for safe transmission of binary data like product images. I built 20+ reusable, responsive UI components to reduce duplicate code and improve maintainability, and collaborated with backend developers, QA, and clients in an Agile/Scrum environment using Git, GitHub, ClickUp, and Claude AI.',
    url: '', // internal project for a client',
    previewImage: '/images/proquro.png',
    secondaryPreviewImage: '/images/trafsasa.png',
    technologies: [
      'ReactJS', 'Next.js', 'JavaScript',
      'HTML', 'Tailwind CSS', 'Auth0',
      'REST APIs', 'Base64 Encoding',
      'Socket.io', 'Tiptap', 'jsPDF',
      'html2canvas', 'react-grid-layout',
      'Git', 'GitHub', 'ClickUp', 'Claude',
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
  // {
  //   name: 'Test Automation with Playwright',
  //   description:
  //     'An automated testing suite built to validate critical user journeys of a sample e-commerce application. The project focuses on ensuring UI reliability, performance, and cross-browser consistency through robust end-to-end testing.',
  //   url: '',
  //   previewImage: '',
  //   technologies: [
  //     'Playwright',
  //     'JavaScript',
  //     'React',
  //     'HTML',
  //     'CSS',
  //   ],
  //   // highlights: [
  //   //   'Designed and implemented end-to-end automated test scenarios using Playwright for a sample e-commerce application.',
  //   //   'Automated key user workflows including authentication, product discovery, cart management, and checkout flows.',
  //   //   'Added assertions to validate UI behavior, responsiveness, and performance across multiple browsers.',
  //   //   'Improved test stability and maintainability by using robust selectors, reusable utilities, fixtures, and optimized wait strategies.',
  //   //   'Focused on reducing test flakiness and improving execution reliability through best practices in test automation.',
  //   // ],
  // },
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
