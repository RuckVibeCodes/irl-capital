import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const checklistItems = [
  'No hard credit pull',
  'Funding from $10K to $5M+',
  'Approvals in 24-48 hours',
  '0% interest options available',
];

export default function MidPageCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const scrollToForm = () => {
    const element = document.querySelector('#apply');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={ref} className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      <div className="relative z-10 w-full section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-5xl font-outfit font-bold text-white mb-6">
            Real Funding Starts Here.
          </h2>
          <p className="text-text-muted text-lg mb-8 max-w-xl mx-auto">
            Find out how much funding your business qualifies for. It takes 2
            minutes and won't affect your credit score.
          </p>

          {/* Checklist */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 lg:gap-6 mb-10"
          >
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-white/80 text-sm"
              >
                <div className="w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center">
                  <Check size={12} className="text-cyan" />
                </div>
                {item}
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={scrollToForm}
            className="btn-cyan text-lg px-8 py-4 inline-flex items-center gap-2"
          >
            Apply Now — It's Free
            <ArrowRight size={20} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
