import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Building2, TrendingUp, ArrowRight } from 'lucide-react';
import { services } from '@/lib/constants';

const iconMap: { [key: string]: React.ElementType } = {
  ShieldCheck,
  Building2,
  TrendingUp,
};

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="services"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="absolute inset-0 bg-hex-pattern opacity-30" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
              What We Do <span className="gold-text">IRL</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Three core services designed to get your business the funding it deserves.
            </p>
          </motion.div>

          {/* Services Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-3 gap-6 lg:gap-8"
          >
            {services.map((service, index) => {
              const Icon = iconMap[service.icon];
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="glass-card-hover p-6 lg:p-8 group"
                >
                  {/* Hexagon Icon Container */}
                  <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-cyan/10 hexagon" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon
                        size={28}
                        className="text-cyan group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    {/* Hexagon border */}
                    <svg
                      className="absolute inset-0 w-full h-full"
                      viewBox="0 0 100 100"
                    >
                      <polygon
                        points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                        fill="none"
                        stroke="rgba(0, 212, 170, 0.3)"
                        strokeWidth="2"
                        className="group-hover:stroke-cyan transition-colors duration-300"
                      />
                    </svg>
                  </div>

                  <h3 className="text-xl font-outfit font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-2 text-cyan text-sm font-medium group/link">
                    <span className="group-hover/link:underline">Learn more</span>
                    <ArrowRight
                      size={14}
                      className="group-hover/link:translate-x-1 transition-transform"
                    />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
