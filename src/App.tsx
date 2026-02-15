import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServicesTicker from '@/components/ServicesTicker';
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
