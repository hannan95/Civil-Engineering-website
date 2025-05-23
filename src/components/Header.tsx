import  { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, Star, Phone, FileText } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'projects', 'experience', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const navLinks = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'experience', label: 'Experience', icon: Star },
    { id: 'contact', label: 'Contact', icon: Phone },
    { id: 'resume', label: 'Resume', icon: FileText }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-blue-600 flex items-center">
            <Home className="mr-2" size={24} />
            <span>Alex Morgan</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`nav-link flex items-center ${activeSection === link.id ? 'nav-link-active' : 'nav-link-inactive'}`}
                onClick={() => {
                  if (link.id === 'resume') {
                    alert('Resume would download here in a real implementation');
                    return;
                  }
                }}
              >
                <link.icon size={16} className="mr-1" />
                {link.label}
              </a>
            ))}
          </nav>
          
          <button 
            className="md:hidden text-gray-700 hover:text-blue-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`fixed inset-0 bg-blue-800 bg-opacity-95 z-50 transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-4">
          <button className="text-white hover:text-gray-200" onClick={toggleMenu}>
            <X size={28} />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full">
          {navLinks.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-white text-xl py-4 flex items-center hover:text-blue-200 transition-colors"
              onClick={() => {
                setIsMenuOpen(false);
                if (link.id === 'resume') {
                  alert('Resume would download here in a real implementation');
                  return;
                }
              }}
            >
              <link.icon size={20} className="mr-2" />
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
  