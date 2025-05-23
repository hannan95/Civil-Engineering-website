import  { ArrowDown } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?ixid=M3w3MjUzNDh8MHwxfHNlYXJjaHwxfHxjaXZpbCUyMGVuZ2luZWVyaW5nJTIwY29uc3RydWN0aW9uJTIwYnJpZGdlJTIwYnVpbGRpbmd8ZW58MHx8fHwxNzQ3ODI2NzE4fDA&ixlib=rb-4.1.0&fit=fillmax&h=600&w=800" 
          alt="Civil engineering project" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            <span className="block">Alex Morgan</span>
            <span className="block mt-2 text-blue-300">Civil Engineer</span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Specialized in structural design and sustainable construction
            with over 8 years of experience in high-profile projects
          </p>
          
          <div className="flex justify-center gap-4 pt-6">
            <a href="#projects" className="button-primary">
              View Projects
            </a>
            <a href="#contact" className="button-secondary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
  