import { Experience, Project } from './types';

export const projects: Project[] = [
  {
    id: 'Pizzeria AI Chat Assistance',
    title: 'Pizzeria with AI Chat Assistance',
    description: 'Landing page simulating a Pizzeria Restaurant with a customer chat AI assistance.',
    image: '/images/napoli3.png',
    images: [
      '/images/napoli1.png',
      '/images/napoli2.png',
      '/images/napoli3.png',
      '/images/napoli4.png',
    ],
    tags: ['React', 'OpenAI', 'AI Chat Assistance', 'TypeScript', 'Tailwind', 'HTML & CSS'],
    longDescription: 'Connected to the OpenAI API, this website contain a Chat AI assistance trained to give related answers about the website services and products. The front-end has been created with React TypeScript and Tailwind for the design.',
    features: [
      'Artificial Inteligence',
      'Web Application',
      'OpenAI API',
      'AI Chat Assistance',
      'Automation'
    ],
    technologies: ['React', 'OpenAI', 'AI Chat Assistance', 'TypeScript', 'Tailwind', 'HTML & CSS'],
    demoUrl: 'https://napoli-pizzeria.vercel.app/',
    githubUrl: 'https://github.com/al3xHub/napoli-pizzeria'
  },
  {
    id: 'hashtag-generator',
    title: 'Hashtag Generator AI',
    description: 'Choose an image and as a result you will provided related hashtags from the image.',
    image: '/images/hash3.png',
    images: [
      '/images/hash1.png',
      '/images/hash2.png',
      '/images/hash3.png',
    ],
    tags: ['Flask', 'OpenAI', 'HTML & CSS', 'Python', 'JavaScript'],
    longDescription: 'Connected to the OpenAI API, which analyzes the image, describes it, and generates relevant and creative hashtags.As a result, accurate hashtags to boost the visibility of your social media posts.',
    features: [
      'Artificial Inteligence',
      'Web Application',
      'OpenAI API'
    ],
    technologies: ['Flask', 'OpenAI', 'HTML & CSS', 'Python', 'JavaScript'],
  },
  {
    id: 'nova-project',
    title: 'Marketing website with Blog',
    description: 'This project is a Django REST API designed to manage and serve posts for a modern landing page built with React and TypeScript.',
    image: '/images/nova1.png',
    images: [
      '/images/nova1.png',
      '/images/nova2.png',
      '/images/nova3.png',
      '/images/nova4.png',
      '/images/nova5.png',
      '/images/nova6.png',
    ],
    tags: ['Django REST', 'React', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS', 'POSTGRESQL'],
    longDescription: 'This project is a Django REST API designed to manage and serve posts for a modern landing page built with React and TypeScript. From the Django admin panel, administrators can easily create and edit posts using a user-friendly WYSIWYG (What You See Is What You Get) editor, making content creation intuitive and efficient. The frontend, deployed on Railway, interacts with this backend to fetch and display the latest posts dynamically, offering users a responsive and engaging experience. Key features include secure data handling, user authentication, and robust endpoint management for efficient communication between the backend and the landing page.',
    features: [
      'API access',
      'WYWYG Editor',
      'Cloud service deployment',
      'Admin Panel'
    ],
    technologies: ['Python','Django REST', 'POSTGRESQL', 'React', 'TypeScript', 'Tailwind CSS', 'HTML', 'CSS', 'Railway cloud'],
    demoUrl: 'https://nova-project-production-e6e4.up.railway.app/',
    githubUrl: 'https://github.com/al3xHub/nova-project'
  },
  {
    id: 'password-manager',
    title: 'Password Manager',
    description: 'Web service where you can store safety data about personal passwords',
    image: '/images/pm1.png',
    images: [
      '/images/pm1.png',
      '/images/pm5.png',
      '/images/pm6.png',
      '/images/pm8.png',
      '/images/pm11.png',
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
    image: '/images/ci1.png',
    images: [
      '/images/ci1.png',
      '/images/ci2.png',
      '/images/ci3.png'
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
    image: '/images/dca1.png',
    images: [
      '/images/dca1.png',
      '/images/dca2.png'
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
    image: '/images/task1.png',
    images: [
      '/images/task1.png',
      '/images/task2.png',
      '/images/task3.png',
      '/images/task4.png',
      '/images/task5.png'
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
    image: '/images/harry1.png',
    images: [
      '/images/harry1.png',
      '/images/harry2.png',
      '/images/harry3.png',
      '/images/harry4.png'
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
    image: '/images/king1.png',
    images: [
      '/images/king1.png',
      '/images/king2.png',
      '/images/king3.png',
      '/images/king4.png',
      '/images/king5.png'
    ],
    tags: ['PHP', 'MySQL', 'HTML & CSS', 'Bootstraps'],
    longDescription: 'CRUD where you can manage data from different tables. Some of them have relationship between them (1:1, 1:N, N:M). Simulate a children gift list for the typical characters Christmasy "The Three kings".',
    features: [
      'Relational Database',
      'Web Application',
    ],
    technologies: ['PHP', 'MySQL', 'HTML & CSS', 'Bootstraps'],
    githubUrl: 'https://github.com/al3xHub/CRUD-PHP'
  },
  {
    id: 'shop-java',
    title: 'Shopping List Java',
    description: 'In this website you can storage data from your shopping purchases.',
    image: '/images/shop2.png',
    images: [
      '/images/shop1.png',
      '/images/shop2.png',
      '/images/shop3.png',
      '/images/shop4.png',
      '/images/shop5.png'
    ],
    tags: ['Java EE', 'MySQL', 'HTML & CSS', 'Bootstraps', 'Ubuntu Server', 'Tomcat9'],
    longDescription: 'This website storage data such amount of money spended in a shop in specific. Also you can review the total spending indicating a month in specific to review it.',
    features: [
      'Relational Database',
      'Web Application',
      'Server Deployment with Ubuntu',
    ],
    technologies: ['Java EE', 'MySQL', 'HTML & CSS', 'Bootstraps', 'Ubuntu Server', 'Tomcat9'],
    githubUrl: 'https://github.com/al3xHub/PracticaDAWTema4'
  }
];

export const experiences: Experience[] = [
  {
    company: 'Grupo IHP',
    position: 'Internship Junior Developer',
    period: 'April 2024 - June 2024',
    description: 'We developed two projects for the company itself. The first project was a WYSIWYG editor for administrative staff giving them facilities to manage posts on the official landing page. The second project was a CRUD to manage databases for the administrative staff.'
  }
];