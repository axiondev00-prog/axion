
import AxionDev from '../assets/AXIONDEV.png';

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                {/* ABOUT IMAGE */}
                <div className="about-image">
                    <div className="about-image-frame">
                        <img src={AxionDev} alt="AXION Developer" />
                    </div>
                    <div className="about-image-decoration"></div>
                </div>

                {/* ABOUT CONTENT */}
                <div className="about-content">

                    <p className="about-subtitle">
                        GET TO KNOW ME
                    </p>

                    <h2>
                        About <span>Me</span>
                    </h2>

                    <h3>
                        Passionate Developer Creating Digital Solutions.
                    </h3>

                    <p className="about-description">
                        I'm a Full-Stack Developer passionate about
                        creating modern, responsive and user-friendly
                        web applications. I enjoy turning ideas into
                        functional digital experiences through clean
                        code, creative thinking and continuous learning.
                    </p>

                    <p className="about-description">
                        I have received web development training at
                        SQI College of ICT, where I continue to build
                        my technical skills and develop practical projects.
                    </p>

                    {/* DEVELOPER DETAILS */}
                    <div className="about-details">

                        <div className="detail-item">
                            <span>Name</span>
                            <p>Axion</p>
                        </div>

                        <div className="detail-item">
                            <span>Role</span>
                            <p>Full-Stack Developer</p>
                        </div>

                        <div className="detail-item">
                            <span>Focus</span>
                            <p>Web Development</p>
                        </div>

                        <div className="detail-item">
                            <span>Training</span>
                            <p>SQI College of ICT</p>
                        </div>

                    </div>

                    <a href="#contact" className="about-btn">
                        Let's Work Together <span>↗</span>
                    </a>

                </div>

            </div>

        </section>
    );
}

export default About;
