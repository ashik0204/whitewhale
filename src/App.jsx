import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import FeaturesSection from './components/FeaturesSection';
import PricingSection from './components/PricingSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import BeliefsSection from './components/BeliefsSection';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutSection />
      <BeliefsSection />
      <FeaturesSection />
      <BlogSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
