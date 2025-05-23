import  { useInView } from 'react-intersection-observer';
import { experiences, testimonials } from '../data';
import { Calendar, Star } from 'lucide-react';

const Experience = () => {
  const { ref: timelineRef, inView: timelineInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });
  
  const { ref: testimonialsRef, inView: testimonialsInView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Professional Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div ref={timelineRef}>
            <h3 className="text-xl font-semibold text-gray-800 mb-8">Work History</h3>
            
            <div className="pl-6">
              {experiences.map((exp, index) => (
                <div 
                  key={exp.id} 
                  className={`timeline-item transform transition-all duration-700 ${
                    timelineInView ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="timeline-dot" />
                  <div className="mb-1 flex items-center">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.role}</h4>
                  </div>
                  <div className="mb-2 text-blue-600 font-medium">{exp.company}</div>
                  <div className="mb-3 flex items-center text-gray-500 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {exp.period}
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div ref={testimonialsRef}>
            <h3 className="text-xl font-semibold text-gray-800 mb-8">Testimonials</h3>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id} 
                  className={`bg-white p-6 rounded-lg shadow-md transform transition-all duration-700 ${
                    testimonialsInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
  