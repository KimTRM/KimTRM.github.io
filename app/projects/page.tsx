import ProjectsSection from "../home/sections/ProjectsSection";

const projects = [
    {
        title: "KnowledgeSweeper",
        description: "Minesweeper but it has a twist, a quiz to keep your life",
        image: "/res/KnowledgeSweeper_Icon.svg",
        link: "projects/KnowledgeSweeper",
    },
    {
        title: "Project 100",
        description: "An educational RPG that teaches programming through block-based puzzles.",
        image: "/res/Project100_Icon.svg",
        link: "projects/Project100",
    },
    {
        title: "Design Showcase",
        description: "From UI/UX to visual branding, see how I bring ideas to life through design.",
        image: "/res/icon/KLTL_Studios.svg",
        link: "projects/design",
    },
];

export default function Projects() {
    return (
        <>
            <ProjectsSection projects={projects} />
        </>
    );
}

