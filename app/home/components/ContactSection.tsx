import "../css/style.css"

export default function ContactSection() {
    return (
        <>
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Let&apos;s Work Together</h2>
                    <p>Have a project in mind or just want to say hi? Let’s talk!</p>
                    <a href="mailto:kimlabrador@example.com" className="btn">Email Me</a>
                    <div className="socials">
                        <a href="https://github.com/kimtrm" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/in/kimtrm" target="_blank">LinkedIn</a>
                        <a href="https://youtube.com/@kltlstudios" target="_blank">YouTube</a>
                    </div>
                </div>
            </section>
        </>
    );
}