import AboutSection from "./home/sections/AboutSection";
import ContactSection from "./home/sections/ContactSection";
import HeroSection from "./home/sections/HeroSection";
import ProjectsSection from "./home/sections/ProjectsSection";
import ServicesSection from "./home/sections/ServicesSection";

const projects = [
  {
    title: "Project 100",
    description: "An educational RPG that teaches programming through block-based puzzles.",
    image: "/res/Project100_Icon.svg",
    link: "projects/Project100",
  },
  {
    title: "KnowledgeSweeper",
    description: "A quiz-style game that makes learning Java engaging and fun.",
    image: "/res/coverimage.png",
    link: "projects/KnowledgeSweeper",
  },
  {
    title: "Design Showcase",
    description: "From UI/UX to visual branding, see how I bring ideas to life through design.",
    image: "/res/icon/KLTL_Studios.svg",
    link: "projects/design",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
