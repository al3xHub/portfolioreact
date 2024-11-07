import React from 'react';
import { useState, useEffect } from 'react';
import { Github, Mail, Linkedin, ChevronDown, Terminal, Server, Database, Code2, Globe, Cpu } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import ParticleBackground from '../components/ParticleBackground';
import { projects, experiences } from '../data';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';



export default function Home() {

  const textToType = "Junior Developer";
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 100;

  useEffect(() => {
    const handleTyping = () => {
      // Update displayedText based on isDeleting state
      setDisplayedText((prev) =>
        isDeleting ? textToType.substring(0, prev.length - 1) : textToType.substring(0, prev.length + 1)
      );

      // If typing complete, switch to deleting after a delay
      if (!isDeleting && displayedText === textToType) {
        setTimeout(() => setIsDeleting(true), 10000); // Delay before deleting starts
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false); // Restart typing after deleting completes
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    // Cleanup function to clear timeout on unmount or when typing state changes
    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, textToType, typingSpeed]);

  // Setup observers for each section
  const [skillsRef, skillsInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [techRef, techInView] = useInView({ triggerOnce: true, threshold: 0.5 });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Animations
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16 overflow-hidden">
        <ParticleBackground />
        <div className="container mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Hello world!
          </h1>
          <h2 className="text-5xl text-gray-600 mb-8 max-w-2xl mx-auto">
            <i>I'm {displayedText}</i>
            <span className="blinking-cursor">|</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Specialise in modern web applications, data and AI solutions.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/al3xHub"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/alejandro-bueno-vi%C3%B1an-3b2930119/"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alejandrobueno92@hotmail.com"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
            >
              <Mail size={24} />
            </a>
          </div>
          <a
            href="#technologies"
            className="animate-bounce inline-block"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </a>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      {/* Skills Section */}
      <motion.section
        ref={skillsRef}
        initial="hidden"
        animate={skillsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-gray-50">

        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Terminal size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-gray-600">Building responsive and intuitive user interfaces with modern frameworks</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Server size={32} className="text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-gray-600">Creating scalable APIs and server-side applications</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database size={32} className="text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Data Solutions</h3>
              <p className="text-gray-600">Extract, transform and load data.</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technologies Section */}
      <motion.section
        id="technologies"
        ref={techRef}
        initial="hidden"
        animate={techInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Technologies I Work With</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-2">
                  <Code2 className="text-blue-500 opacity-20" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Frontend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    React.js
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    TypeScript
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Vanilla JavaScript
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Tailwind CSS
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Bootstraps
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-2">
                  <Server className="text-green-500 opacity-20" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Backend</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Python
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Django
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Flask
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    FastAPI
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Node.js
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    Java
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    PHP
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-2">
                  <Database className="text-purple-500 opacity-20" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Database</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    PostgreSQL
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    MongoDB
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    SQLite
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    MySQL
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                    MariaDB
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="relative p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <div className="absolute top-0 right-0 p-2">
                  <Globe className="text-orange-500 opacity-20" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Others</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Git
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Ubuntu Server
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Cloud Services
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                    Tomcat9
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        ref={projectsRef}
        initial="hidden"
        animate={projectsInView ? "visible" : "hidden"}
        variants={fadeInUp}
        className="py-20 bg-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Experience</h2>
          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-12 last:mb-0">
                <h3 className="text-xl font-semibold text-gray-900">{exp.position}</h3>
                <div className="text-gray-600 mb-2">{exp.company} | {exp.period}</div>
                <p className="text-gray-700">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <a
            href="mailto:contact@example.com"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}