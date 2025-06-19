import styles from "../css/ProjectPage.module.css";
import Head from "next/head";
import Image from "next/image";

export default function ProjectPage() {
    const project = {
        title: "KnowledgeSweeper",
        subtitle: "Minesweeper but it has a twist, a quiz to keep your life",
        description:
            `This game is just like a normal Minesweeper but it has a twist where if you pick a square with a bomb in it a question will pop up when you answer it correctly you don’t lose a life and you can continue but if answered wrong you lose a life as a consequence.`,
        tags: [
            "Java",
            "Minesweeper",
            "Educational Game",
            "Quiz",
        ],
        image: "/res/KnowledgeSweeper_Icon.svg",
        github: "https://github.com/KimTRM/KnowledgeSweeper",
        playLink: "https://kltl-studios.itch.io/knowledgesweeper", // if hosted locally
    };

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
                        <a
                            href={project.playLink}
                            target="_blank"
                            className={styles.btnOutline}>
                            Download
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
