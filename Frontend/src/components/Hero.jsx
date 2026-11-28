
import axionHero from '../assets/axion-hero.jpg';


function Hero() {
    return (
        <section className="hero" id="home">

            {/* HERO CONTENT */}
            <div className="hero-content">

                <p className="Available">
                    <span className="status-dot"></span>
                    AVAILABLE FOR OPPORTUNITIES
                </p>

                <h1>
                    Olaleye Eniola
                    <span> J.</span>
                </h1>

                <h4>
                    I'm a Full-Stack Developer passionate about
                    building modern, responsive and interactive
                    web applications that solve real-world problems.
                </h4>

                {/* HERO BUTTONS */}
                <div className="hero-buttons">

                    <a href="#projects" className="hero-btn primary-btn">
                        View My Work <span>↗</span>
                    </a>

                    <a href="#contact" className="hero-btn secondary-btn">
                        Get In Touch
                    </a>

                </div>

                {/* SOCIAL LINKS */}
                <div className="hero-socials">
                    <p>Find me on</p>

                    <a href="https://github.com/axiondev00-prog" target="_blank" rel="noreferrer">
                        GitHub ↗
                    </a>

                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        LinkedIn ↗
                    </a>
                </div>

            </div>

            {/* HERO IMAGE */}
            <div className="hero-image">
                <div className="image-glow"></div>

                <img
                    src={axionHero}
                    alt="AXION Developer"
                    className="AxionDev"
                />
            </div>

        </section>
    );
}

export default Hero;
