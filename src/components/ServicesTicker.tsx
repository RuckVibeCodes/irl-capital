import { marqueeServices } from '@/lib/constants';

export default function ServicesTicker() {
  // Duplicate the services array for seamless looping
  const allServices = [...marqueeServices, ...marqueeServices];

  return (
    <div className="relative py-4 bg-navy-dark/50 border-y border-cyan/10 overflow-hidden">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-navy-dark to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-navy-dark to-transparent z-10" />
      
      {/* Scrolling content */}
      <div className="flex animate-marquee whitespace-nowrap">
        {allServices.map((service, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-white/70 text-sm font-medium tracking-wide">
              {service}
            </span>
            <span className="ml-4 text-cyan">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
