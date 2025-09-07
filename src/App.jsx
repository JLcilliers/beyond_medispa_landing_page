import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import BeforeAfter from './components/sections/BeforeAfter';
import Statistics from './components/sections/Statistics';
import PersonalizedPath from './components/sections/PersonalizedPath';
import Testimonials from './components/sections/Testimonials';
import Experts from './components/sections/Experts';
import Locations from './components/sections/Locations';
import FAQ from './components/sections/FAQ';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <BeforeAfter />
        <Statistics />
        <PersonalizedPath />
        <Testimonials />
        <Experts />
        <Locations />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;