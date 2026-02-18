import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-navy-dark" />
      <div className="absolute inset-0 bg-hex-pattern opacity-20" />

      <div className="relative z-10 w-full section-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-outfit font-bold text-white mb-8">
            Atlanta's Business Funding Partner
          </h2>

          <div className="space-y-6 text-text-muted text-lg leading-relaxed">
            <p>
              IRL Capital was founded with one mission — to give Atlanta business owners
              real access to the capital they need, without the runaround.
            </p>
            <p>
              We've been where you are. We know the frustration of getting turned
              down, dealing with bad credit, and watching your business potential
              go unfunded. That's why we built a system that actually works.
            </p>
            <p>
              Whether you need funding now or need to fix your credit first — we've got you covered.
              No dead ends. Every conversation leads somewhere.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 pt-8 border-t border-cyan/10"
          >
            <p className="text-white font-outfit font-semibold">
              — The IRL Capital Team
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
