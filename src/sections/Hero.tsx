import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { trustBullets } from '@/lib/constants';
import ApplicationForm from '@/components/ApplicationForm';

export default function Hero() {
  const [showSuccess, setShowSuccess] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
    },
  };

  return (
    <section
      id="apply"
      className="relative min-h-screen pt-20 lg:pt-24 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy to-navy-dark" />
      
      {/* Cyan Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 w-full section-padding py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Headline */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-cyan text-sm font-semibold tracking-wider uppercase">
                From ATL. For ATL. Funded IRL.
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-outfit font-bold leading-tight">
                Atlanta Business Funding.{' '}
                <span className="gold-text">IRL</span>.
              </h1>
              <p className="text-lg lg:text-xl text-text-muted max-w-xl">
                We help Atlanta business owners secure $50K-$150K+ in funding —
                without the bank runaround. Real capital. Real fast.
              </p>
            </motion.div>

            {/* Trust Bullets */}
            <motion.div variants={itemVariants} className="space-y-3">
              {trustBullets.map((bullet, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-cyan/20 flex items-center justify-center">
                    <Check size={12} className="text-cyan" />
                  </div>
                  <span className="text-white/90 text-sm lg:text-base">{bullet}</span>
                </div>
              ))}
            </motion.div>

            {/* Testimonial */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-5 max-w-md"
            >
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-white/80 text-sm italic mb-3">
                "IRL Capital got me $85K in funding when every bank said no. 
                Professional, fast, and actually local — they get Atlanta businesses."
              </p>
              <p className="text-cyan text-xs font-medium">
                — Marcus T., Contractor, Decatur GA
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:sticky lg:top-24"
          >
            {showSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card border-cyan/30 p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-cyan/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-cyan" />
                </div>
                <h3 className="text-2xl font-outfit font-bold text-white mb-2">
                  Application Received!
                </h3>
                <p className="text-text-muted">
                  We'll be in touch within 24 hours.
                </p>
              </motion.div>
            ) : (
              <ApplicationForm onSuccess={() => setShowSuccess(true)} />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
