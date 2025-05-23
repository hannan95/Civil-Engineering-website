import  { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Alex Morgan</h3>
            <p className="text-gray-400 mb-4">
              Providing expert civil engineering services with a focus on structural design, 
              project management, and sustainable construction practices.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Phone size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <MapPin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#experience" className="text-gray-400 hover:text-white transition-colors">Experience</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-blue-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-blue-400" />
                <span className="text-gray-400">alex.morgan@example.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 text-blue-400 mt-1" />
                <span className="text-gray-400">123 Engineering Blvd, San Francisco, CA 94103</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500">
              &copy; {currentYear} Alex Morgan. All rights reserved.
            </p>
            <p className="text-gray-500 flex items-center mt-4 md:mt-0">
              Made with <Heart size={16} className="mx-1 text-red-500" /> by Alex Morgan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  