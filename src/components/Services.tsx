import  { useInView } from 'react-intersection-observer';
import { services, serviceIconMap } from '../data';

const Services = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="py-20 bg-blue-700 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center border-b-2 border-blue-300 pb-2 inline-block">Services Offered</h2>
        
        <div 
          ref={ref} 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = serviceIconMap[service.icon as keyof typeof serviceIconMap];
            
            return (
              <div 
                key={service.id} 
                className={`bg-blue-800 rounded-lg p-6 transform transition-all duration-500 hover:bg-blue-900 hover:-translate-y-1 ${
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-blue-200">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
  