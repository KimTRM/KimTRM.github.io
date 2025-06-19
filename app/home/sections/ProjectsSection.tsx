import "../css/ProjectSection.css";
import ProjectCardComponent from "../components/ProjectCardComponent";

export default function ProjectsSection() {
    return (
        <>
            <section id="portfolio" className="projects">
                <div className="container">
                    <h2>Featured Projects</h2>

                    <div className="project-grid">

                        <ProjectCardComponent
                            title="Project 100"
                            description="An educational RPG that teaches programming through block-based puzzles."
                            image="/res/icon/KLTL_Studios.svg"
                            link="projects/Project100"
                        />

                        <ProjectCardComponent
                            title="KnowledgeSweeper"
                            description="A quiz-style game that makes learning Java engaging and fun."
                            image="/res/coverimage.png"
                            link="projects/KnowledgeSweeper"
                        />

                        <ProjectCardComponent
                            title="Design Showcase"
                            description="From UI/UX to visual branding, see how I bring ideas to life through design."
                            image="/res/icon/KLTL_Studios.svg"
                            link="projects/design"
                        />

                    </div>
                </div>
            </section>
        </>
    );
}