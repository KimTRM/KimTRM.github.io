import ProjectsSection from "../home/components/ProjectsSection";

export default function Projects() {
    return (
        <>
            <div className="items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
                <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                    <h1 className="text-4xl font-bold">Projects</h1>
                    <p className="text-lg">Here are some of my projects.</p>
                </main>
            </div>
            <ProjectsSection />
        </>
    );
}

