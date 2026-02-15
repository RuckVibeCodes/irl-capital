import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { howItWorksSteps } from '@/lib/constants';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-4">
              Funding Made Simple. <span className="gold-text">IRL</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto">
              Four steps to get your business funded. No runaround. No waiting forever.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            {/* Vertical Line (Mobile) */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/30 to-transparent md:hidden" />

            {/* Horizontal Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

            <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
              {howItWorksSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={stepVariants}
                  className="relative flex md:flex-col items-start md:items-center gap-4 md:gap-6"
                >
                  {/* Step Number / Hexagon */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 relative">
                      {/* Hexagon background */}
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 100 100"
                      >
                        <polygon
                          points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
                          fill="rgba(0, 212, 170, 0.1)"
                          stroke="#00D4AA"
                          strokeWidth="2"
                        />
                      </svg>
                      {/* Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-cyan font-space-grotesk font-bold text-sm">
                          {step.number}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:text-center pt-1 md:pt-0">
                    <h3 className="text-lg font-outfit font-bold text-white mb-2">
                      {step.title === 'Get Funded IRL' ? (
                        <>
                          Get Funded <span className="gold-text">IRL</span>
                        </>
                      ) : (
                        step.title
                      )}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
