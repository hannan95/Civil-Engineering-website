import  { useInView } from 'react-intersection-observer';
import { skills } from '../data';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6" ref={ref}>
            <p className="text-gray-700 leading-relaxed">
              I'm a <strong>Professional Civil Engineer</strong> with a focus on structural design and sustainable construction practices. 
              With over 8 years of industry experience, I've led diverse projects from high-rise commercial buildings to historical structure renovations.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              My engineering approach combines technical precision with creative problem-solving, 
              allowing me to deliver resilient structures that balance innovation, sustainability, and cost-effectiveness.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-semibold text-gray-800">Education</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>MSc, Structural Engineering<br />Stanford University</li>
                  <li>BSc, Civil Engineering<br />MIT</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">Certifications</h3>
                <ul className="mt-2 space-y-2 text-gray-600">
                  <li>Professional Engineer (PE)</li>
                  <li>LEED Accredited Professional</li>
                  <li>PMP Certified</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-5">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
            
            {skills.map(skill => (
              <div key={skill.id} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-gray-500">{skill.percentage}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ 
                      width: inView ? `${skill.percentage}%` : '0%'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
  