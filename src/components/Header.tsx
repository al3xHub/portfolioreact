import React from 'react';
import { useState } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

export default function Header() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href='/' className="text-xl font-bold text-gray-800">
            Al3x.dev
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors">
              Projects
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
              Experience
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/al3xHub" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-bueno-vi%C3%B1an-3b2930119/" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:alejandrobueno92@hotmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Menú móvil */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col items-start space-y-1">
              <a href="#projects" className="text-gray-600 hover:text-gray-900 transition-colors py-1">
                Projects
              </a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors py-1">
                Experience
              </a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors py-1">
                Contact
              </a>
            </div>
          )}
          <button className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>

        </div>
      </nav>
    </header>
  );
}