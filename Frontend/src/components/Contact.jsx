


import { useState } from 'react';

import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaArrowUp,
    FaGlobe
} from 'react-icons/fa';


function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailAddress = 'YOUR_EMAIL@example.com';

        const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
            formData.subject
        )}&body=${encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;

        window.location.href = mailtoLink;
    };

    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* =========================
                CONTACT SECTION
            ========================= */}

            <section className="contact" id="contact">

                <div className="contact-container">

                    {/* SECTION HEADING */}
                    <div className="contact-heading">

                        <p className="contact-subtitle">
                            LET'S CONNECT
                        </p>

                        <h2>
                            Have a Project in <span>Mind?</span>
                        </h2>

                        <p>
                            Have an idea, a project, or an opportunity?
                            I'd love to hear about it. Let's discuss how
                            we can create something meaningful together.
                        </p>

                    </div>

                    {/* CONTACT CONTENT */}
                    <div className="contact-content">

                        {/* LEFT SIDE */}
                        <div className="contact-info">

                            <div className="contact-info-top">
                                <span className="contact-label">
                                    GET IN TOUCH
                                </span>

                                <h3>
                                    Let's build something
                                    <span> great together.</span>
                                </h3>

                                <p>
                                    I'm always interested in discussing
                                    new ideas, creative projects and
                                    opportunities to grow.
                                </p>
                            </div>

                            {/* CONTACT METHODS */}
                            <div className="contact-methods">

                                <a
                                    href="mailto:axiondev00@gmail.com"
                                    className="contact-method"
                                >
                                    <div className="contact-method-icon">
                                        <FaEnvelope />
                                    </div>

                                    <div>
                                        <span>Email Me</span>
                                        <p>axiondev00@gmail.com</p>
                                    </div>
                                </a>

                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <span>Location</span>
                                        <p>Nigeria</p>
                                    </div>
                                </div>

                                <div className="contact-method">
                                    <div className="contact-method-icon">
                                        <FaGlobe />
                                    </div>

                                    <div>
                                        <span>Availability</span>
                                        <p>Open to opportunities</p>
                                    </div>
                                </div>

                            </div>

                            {/* SOCIAL LINKS */}
                            <div className="contact-socials">

                                <p>FOLLOW MY WORK</p>

                                <div className="contact-social-links">

                                    <a
                                        href="https://github.com/axiondev00-prog"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="GitHub"
                                    >
                                        <FaGithub />
                                    </a>

                                    <a
                                        href="https://linkedin.com/in/YOUR_USERNAME"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label="LinkedIn"
                                    >
                                        <FaLinkedinIn />
                                    </a>

                                </div>

                            </div>

                        </div>

                    
                    </div>

                </div>

            </section>

            {/* =========================
                FOOTER
            ========================= */}

            <footer className="footer">

                <div className="footer-container">

                    {/* BRAND */}
                    <div className="footer-brand">

                        <a href="#home" className="footer-logo">
                            AXION<span>.</span>
                        </a>

                        <p>
                            Building digital experiences through
                            creativity, technology and innovation.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="https://github.com/axiondev00-prog"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://linkedin.com/in/YOUR_USERNAME"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>

                            <a
                                href="mailto:axiondev00@gmail.com"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>

                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-links">

                        <h3>Quick Links</h3>
                        <a href="#about">About Me</a>
                        <a href="#skills">My Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#contact">Contact</a>

                    </div>

                    {/* CONTACT DETAILS */}
                    <div className="footer-contact">

                        <h3>Get In Touch</h3>

                        <a href="mailto:axiondev00@gmail.com">
                            <FaEnvelope />
                            axiondev00@gmail.com
                        </a>

                        <p>
                            <FaMapMarkerAlt />
                            Nigeria
                        </p>

                        <a href="#contact" className="footer-contact-btn">
                            Let's Talk <span>↗</span>
                        </a>

                    </div>

                </div>

                {/* FOOTER BOTTOM */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} AXION. All rights reserved.
                    </p>

                    <p>
                        Designed & Developed by
                        <span> <a href="#home">AXION</a></span>
                    </p>

                    <a href="#home" className="back-to-top">
                        Back to Top <FaArrowUp />
                    </a>

                </div>

            </footer>

        </>
    );
}

export default Contact;