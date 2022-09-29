const about = {
  name: 'Tarun Bhartiya',
  role: 'Back-End Heavy Fullstack in NodeJS/React',
  description:
    'Tarun is a Senior Backend Engineer. He has straightforward communication and advanced English; moreover, and is a sympathetic down-to-earth person. Furthermore, he is familiar with working with best developing practices to enhance product development (testing, code review, clean code) and has good exposure to cloud environments.',
  social: {
    linkedin: 'https://www.linkedin.com/in/tarun-bhartiya-38959999/',
    github: 'https://github.com/tarunbhartiya7',
  },
}

const projects = [
  {
    name: 'Assessment Backend',
    description:
      'This project provides GraphQL apis for an assessment project built using NodeJS with authentication and RBAC(Role Based Access).',
    stack: ['Node', 'GraphQL', 'MongoDB'],
    sourceCode: 'https://github.com/tarunbhartiya7/code-assessment-poc',
  },
  {
    name: 'Node-Postgres',
    description:
      'This project provides REST apis for CRUD operations built using NodeJS with PostgreSQL database and jsonwebtoken for authentication.',
    stack: ['Node', 'Postgres'],
    sourceCode: 'https://github.com/tarunbhartiya7/node-postgres',
  },
  {
    name: 'Portfolio',
    description:
      'This is a portfolio built using React and Material UI. This uses a CI/CD pipeline using Github actions to deploy latest changes to AWS S3.',
    stack: ['React', 'Material UI'],
    sourceCode: 'https://github.com/tarunbhartiya7/portfolio',
  },
  {
    name: 'NextJS with Headless CMS',
    description: 'A POC for NextJS with headless CMS(Contentful)',
    stack: ['NextJS', 'Contentful'],
    sourceCode: 'https://github.com/tarunbhartiya7/nextjs-contentful-cms',
  },
]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'Express',
  'AWS',
  'PostgreSQL',
  'MongoDB',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'CMS',
]

const contact = {
  email: 'tarunbhartiya7@mail.com',
}

export { about, projects, skills, contact }
