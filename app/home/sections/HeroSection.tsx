import "../css/style.css"
import "../css/HeroSection.css"

export default function HeroSection() {
    return (
        <>
            <section className="hero">
                <div className="container">
                    <h1>Kim Louise Labrador</h1>
                    <p className="tagline">Code. Create. Connect. Developer · Designer · Musician</p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn">View Portfolio</a>
                        <a href="#contact" className="btn-outline">Contact Me</a>
                    </div>
                </div>
            </section>
        </>
    );
}
