const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Tarun Bhartiya',
  role: 'Back-End Heavy Fullstack in NodeJS/React',
  description:
    'Tarun is a Senior Backend Engineer. He has straightforward communication and advanced English; moreover, and is a sympathetic down-to-earth person. Furthermore, he is familiar with working with best developing practices to enhance product development (testing, code review, clean code) and has good exposure to cloud environments.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/tarun-bhartiya-38959999/',
    github: 'https://github.com/tarunbhartiya7',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Node',
  'AWS',
  'React',
  'Redux',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'tarunbhartiya7@mail.com',
}

export { about, projects, skills, contact }
