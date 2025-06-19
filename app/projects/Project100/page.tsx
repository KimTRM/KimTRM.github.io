import styles from "../css/ProjectPage.module.css";
import Head from "next/head";
import Image from "next/image";

const project = {
    title: "Project 100",
    subtitle: "An RPG to Learn Programming with Block Code",
    description: `
    Project 100 is a story-driven learning game that teaches programming fundamentals
    using a fun RPG format. It's developed using Godot and designed for high school
    students to learn variables, loops, conditions, and logic using visual blocks.
`,
    tags: [
        "Godot",
        "Block-Based Coding",
        "Educational Game",
        "RPG",
    ],
    image: "/res/Project100_Icon.svg",
    github: "https://github.com/KimTRM/PROJECT-100",
    playLink: "/games/project-100/index.html", // if hosted locally
};

export default function ProjectPage() {
    return (
        <>
            <Head>
                <title>{project.title} | KLTL Studios</title>
            </Head>
            <main className={styles.wrapper}>
                <div className={styles.container}>
                    <h1 className={styles.title}>{project.title}</h1>
                    <p className={styles.subtitle}>{project.subtitle}</p>
                    <p className={styles.description}>{project.description}</p>
                    <Image
                        width={100}
                        height={100}
                        src={project.image}
                        alt={project.title}
                        className={styles.banner}
                    />

                    <div className={styles.tagList}>
                        {project.tags.map((tag, index) => (
                            <span key={index} className={styles.tag}>
                                #{tag}
                            </span>
                        ))}
                    </div>

                    <div className={styles.links}>
                        <a
                            href={project.github}
                            target="_blank"
                            className={styles.btn}>
                            View on GitHub
                        </a>
                        {/* <a
                            href={project.playLink}
                            target="_blank"
                            className={styles.btnOutline}>
                            Play Demo
                        </a> */}
                    </div>
                </div>
            </main>
        </>
    );
}
