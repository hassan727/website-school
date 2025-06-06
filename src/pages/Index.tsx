
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import NewsSection from '@/components/NewsSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <WhyChooseUsSection />
      <ProgramsSection />
      <TestimonialsSection />
      <NewsSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
