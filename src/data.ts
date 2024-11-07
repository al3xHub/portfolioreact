import { Experience, Project } from './types';

export const projects: Project[] = [
  {
    id: 'password-manager',
    title: 'Password Manager',
    description: 'Web service where you can store safety data about personal passwords',
    image: 'src/public/images/pm1.png',
    images: [
      'src/public/images/pm1.png',
      '/src/public/images/pm5.png',
      '/src/public/images/pm6.png',
      '/src/public/images/pm8.png',
      '/src/public/images/pm11.png',
    ],
    tags: ['Django', 'HTML', 'CSS', 'Bootstraps'],
    longDescription: 'This project is a secure, efficient password manager web application built using the Django framework and deployed on PythonAnywhere.com. The primary objective of this application is to offer users a robust, reliable, and user-friendly platform to store and manage their passwords securely. The project emphasizes data protection, user privacy, and seamless user experience to ensure that passwords and other sensitive information are stored safely and can be easily accessed when needed.',
    features: [
      'Secure Login System',
      'Password Hashing',
      'Session Management',
      'SMTP Service'
    ],
    technologies: ['Django', 'SQLite3', 'Python', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    demoUrl: 'https://alejandrobueno.pythonanywhere.com/',
    githubUrl: 'https://github.com/al3xHub/Password_Manager'
  },
  {
    id: 'compound-interest',
    title: 'Compound Interest Calculator',
    description: 'Calculate the total value of a stock depending on multiple factors',
    image: '/src/public/images/ci1.png',
    images: [
      '/src/public/images/ci1.png',
      '/src/public/images/ci2.png',
      '/src/public/images/ci3.png'
    ],
    tags: ['Python', 'Data Analysis', 'Flask'],
    longDescription: 'This web service provide data about growth investing money with interest, initial deposit, num of years and contributions over the year. It has been made with Python + Flask framework and also using libraries for data analisis and visualization like Pandas and Matplotlib.',
    features: [
      'API Collecting Data',
      'Visualizing Data',
      'Web Application',
    ],
    technologies: ['Python', 'Flask', 'Matplotlib', 'HTML', 'CSS', 'Bootstraps', 'Render'],
    demoUrl: 'https://flaskcompoundcalc.onrender.com/',
    githubUrl: 'https://github.com/al3xHub/FlaskCompoundCalc'
  },
  {
    id: 'dollar-average',
    title: 'Dollar Cost Average Calculator',
    description: 'Implement dollar cost average strategy to invest a sum of money despite the stock price',
    image: '/src/public/images/dca1.png',
    images: [
      '/src/public/images/dca1.png',
      '/src/public/images/dca2.png'
    ],
    tags: ['Python', 'Data Analysis', 'Flask'],
    longDescription: 'This project allows the value of a portfolio based on periodic investments with shares. It is connected with the Yahoo finance API and the data it is visualised using Matplotlib library.',
    features: [
      'API Collecting Data',
      'Visualizing Data',
      'Web Application',
    ],
    technologies: ['Python', 'Flask', 'Matplotlib', 'HTML', 'CSS', 'Bootstraps', 'Render'],
    demoUrl: 'https://dollar-cost-average-flask.onrender.com/',
    githubUrl: 'https://github.com/al3xHub/Dollar-Cost-Average-Flask'
  },
  {
    id: 'task-react',
    title: 'Task App',
    description: 'Basic task web application with back-end API',
    image: '/src/public/images/task1.png',
    images: [
      '/src/public/images/task1.png',
      '/src/public/images/task2.png',
      '/src/public/images/task3.png',
      '/src/public/images/task4.png',
      '/src/public/images/task5.png'
    ],
    tags: ['React', 'REST API', 'Django'],
    longDescription: 'Storage personal notes and manage them using a modern interface connected with a API. The back-end bring you a documented API to read and see how to use it.',
    features: [
      'Create, read, update and delete',
      'Web Application',
      'API Documentation'
    ],
    technologies: ['React', 'Django REST', 'Tailwind CSS'],
    githubUrl: 'https://github.com/al3xHub/Django-React-1'
  },
  {
    id: 'harry-mongodb',
    title: 'Harry Poter Database noSQL',
    description: 'Returns Harry Potter characters data with functional filters',
    image: '/src/public/images/harry1.png',
    images: [
      '/src/public/images/harry1.png',
      '/src/public/images/harry2.png',
      '/src/public/images/harry3.png',
      '/src/public/images/harry4.png'
    ],
    tags: ['MongoDB', 'noSQL', 'Node.js'],
    longDescription: 'This is a typical CRUD example project, where you can manage data from Mongo Database, visualise and filter according to some characteristics.',
    features: [
      'noSQL Database',
      'Create, read, update and delete',
      'Web Application',
    ],
    technologies: ['Node.js', 'MongoDB', 'HTML', 'CSS', 'Bootstraps'],
    githubUrl: 'https://github.com/al3xHub/Harry-Potter-Node.js-v2.0'
  },
  {
    id: 'king-list',
    title: 'Three king list',
    description: 'This is the website that the three king uses to organise what children ask to them every year.',
    image: '/src/public/images/king1.png',
    images: [
      '/src/public/images/king1.png',
      '/src/public/images/king2.png',
      '/src/public/images/king3.png',
      '/src/public/images/king4.png',
      '/src/public/images/king5.png'
    ],
    tags: ['PHP', 'MySQL', 'HTML & CSS', 'Bootstraps'],
    longDescription: 'CRUD where you can manage data from different tables. Some of them have relationship between them (1:1, 1:N, N:M). Simulate a children gift list for the typical characters Christmasy "The Three kings".',
    features: [
      'Relational Database',
      'Web Application',
    ],
    technologies: ['PHP', 'MySQL', 'HTML & CSS', 'Bootstraps'],
    githubUrl: 'https://github.com/al3xHub/CRUD-PHP'
  }
];

export const experiences: Experience[] = [
  {
    company: 'Grupo IHP',
    position: 'Intership Junior Developer',
    period: 'April 2024 - June 2024',
    description: 'We developed two projects for the company itself. The first project was a WYSIWYG editor for administrative staff giving them facilities to manage posts on the official landing page. The second project was a CRUD to manage databases for the administrative staff.'
  }
];