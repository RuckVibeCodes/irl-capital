import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesTicker from '@/components/ServicesTicker';
import DTICalculator from '@/components/DTICalculator';
import CreditQuiz from '@/components/CreditQuiz';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import HowItWorks from '@/sections/HowItWorks';
import Stats from '@/sections/Stats';
import MidPageCTA from '@/sections/MidPageCTA';
import About from '@/sections/About';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <main>
        <Hero />
        <ServicesTicker />
        <Services />
        <DTICalculator />
        <section className="py-16 px-4 bg-navy">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What's Your <span className="text-gold">Funding Readiness</span>?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Answer 5 quick questions to see what funding programs you qualify for. 
                Get your instant score and personalized recommendations.
              </p>
            </div>
            <CreditQuiz />
          </div>
        </section>
        <HowItWorks />
        <Stats />
        <MidPageCTA />
        <About />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
