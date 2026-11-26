
import { useEffect } from "react";

function ScrollAnimations() {
    useEffect(() => {
        const elements = document.querySelectorAll(
            ".about-container, .skills-heading, .skill-category, .projects-heading, .project-card, .projects-cta, .contact-heading, .contact-info, .contact-form-wrapper, .footer-container"
        );

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px",
            }
        );

        elements.forEach((element) => {
            element.classList.add("reveal");
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    return null;
}

export default ScrollAnimations;
