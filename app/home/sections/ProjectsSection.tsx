import Image from "next/image";
import "../css/style.css"

export default function ProjectsSection() {
    return (
        <>
            <section id="portfolio" className="projects">
                <div className="container">
                    <h2>Featured Projects</h2>

                    <div className="project-grid">

                        <div className="project-card">
                            <Image width={460} height={160} src="/icon/KLTL_Studios.svg" alt="Project 100 Screenshot" />
                            <h3>Project 100</h3>
                            <p>An educational RPG that teaches programming through block-based puzzles.</p>
                            <a href="projects/project100.html" className="btn-small">View Project</a>
                        </div>

                        <div className="project-card">
                            <Image width={460} height={160} src="/coverimage.png" alt="KnowledgeSweeper Screenshot" style={{ objectFit: "cover", alignItems: "center" }} />
                            <h3>KnowledgeSweeper</h3>
                            <p>A quiz-style game that makes learning Java engaging and fun.</p>
                            <a href="projects/KnowledgeSweeper" className="btn-small">View Project</a>
                        </div>

                        <div className="project-card">
                            <Image width={460} height={160} src="/icon/KLTL_Studios.svg" alt="Design Showcase" />
                            <h3>Design Showcase</h3>
                            <p>From UI/UX to visual branding, see how I bring ideas to life through design.</p>
                            <a href="projects/design.html" className="btn-small">View Project</a>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}