
import Sharpcut from '../assets/sharpcut.png';
import Carbon from '../assets/carbon.jpg';

function Projects() {

    const projectList = [
        {
            id: 1,
            title: 'SHARPCUT',
            image: Sharpcut,
            description:
                'A responsive website for SHARPCUT, created using HTML and CSS. The site features a clean, modern design with intuitive navigation and optimized performance across all devices.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://sharpcut.vercel.app/',
            github: 'https://github.com/username/project-one',
        },
        {
            id: 2,
            title: 'CARBON',
            image: Carbon,
            description:
                'A responsive corporate website for CARBON, developed with a clean, modern interface and intuitive navigation.',
            technologies: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://getcarbon-orcin.vercel.app/',
            github: 'https://github.com/username/project-two',
        },
    ];

    return (
        <section className="projects" id="projects">

            {/* SECTION HEADING */}
            <div className="projects-heading">
                <p>MY RECENT WORK</p>
                <h2>
                    Featured <span>Projects</span>
                </h2>
                <h3>Some things I've built</h3>
            </div>

            {/* PROJECT CARDS */}
            <div className="projects-container">

                {projectList.map((project) => (
                    <article className="project-card" key={project.id}>

                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-image"
                            aria-label={`Visit ${project.title} website`}
                        >
                            <img
                                src={project.image}
                                alt={`${project.title} website preview`}
                            />
                        </a>

                        <div className="project-info">

                            <h3>{project.title}</h3>

                            <p>{project.description}</p>

                            <div className="project-tech">
                                {project.technologies.map((tech) => (
                                    <span key={tech}>{tech}</span>
                                ))}
                            </div>

                            <div className="project-links">

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo <span>↗</span>
                                </a>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    View Code <span>↗</span>
                                </a>

                            </div>

                        </div>

                    </article>
                ))}

            </div>

            {/* PROJECT CTA */}
            <div className="projects-cta">

                <p>Have an idea for my next project?</p>

                <a href="#contact" className="upBtn">
                    Start a Project with Me <span>↗</span>
                </a>

            </div>

        </section>
    );
}

export default Projects;
