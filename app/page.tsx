import AboutSection from "./home/components/AboutSection";
import ContactSection from "./home/components/ContactSection";
import HeroSection from "./home/components/HeroSection";
import ProjectsSection from "./home/components/ProjectsSection";
import ServicesSection from "./home/components/ServicesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
