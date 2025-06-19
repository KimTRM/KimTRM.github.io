import AboutSection from "./home/sections/AboutSection";
import ContactSection from "./home/sections/ContactSection";
import HeroSection from "./home/sections/HeroSection";
import ProjectsSection from "./home/sections/ProjectsSection";
import ServicesSection from "./home/sections/ServicesSection";

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
