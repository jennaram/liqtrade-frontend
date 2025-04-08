import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturesGrid from './components/FeaturesGrid';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <FeaturesGrid />
      <Footer />
    </main>
  );
}