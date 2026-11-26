
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiPostman
} from 'react-icons/si';



function Skills() {

    const skillGroups = [
        {
            title: 'Frontend Development',
            description: 'Building responsive and interactive user interfaces.',
            skills: [
                { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
                { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
                { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
                { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
                { name: 'Next.js', icon: <SiNextdotjs />, color: '#FFFFFF' },
                { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' }
            ]
        },
        {
            title: 'Backend Development',
            description: 'Developing server-side applications and application logic.',
            skills: [
                { name: 'Node.js', icon: <FaNodeJs />, color: '#5FA04E' },
                { name: 'REST APIs', icon: <SiPostman />, color: '#FF6C37' }
            ]
        },
        {
            title: 'Database Management',
            description: 'Working with databases and managing application data.',
            skills: [
                { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' }
            ]
        },
        {
            title: 'Development Tools',
            description: 'Tools for version control and development workflows.',
            skills: [
                { name: 'Git', icon: <FaGitAlt />, color: '#F05032' }
            ]
        }
    ];

    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                {/* SECTION HEADING */}
                <div className="skills-heading">
                    <p className="skills-subtitle">MY TECHNICAL EXPERTISE</p>

                    <h2>
                        Skills & <span>Technologies</span>
                    </h2>

                    <p className="skills-intro">
                        The technologies and tools I use to transform ideas
                        into modern, functional and scalable digital solutions.
                    </p>
                </div>

                {/* SKILL CATEGORIES */}
                <div className="skills-grid">

                    {skillGroups.map((group, index) => (
                        <div className="skill-category" key={group.title}>

                            <div className="skill-category-header">
                                <span className="skill-number">
                                    0{index + 1}
                                </span>

                                <div>
                                    <h3>{group.title}</h3>
                                    <p>{group.description}</p>
                                </div>
                            </div>

                            <div className="skill-items">

                                {group.skills.map((skill) => (
                                    <div className="skill-item" key={skill.name}>

                                        <span
                                            className="skill-icon"
                                            style={{ color: skill.color }}
                                        >
                                            {skill.icon}
                                        </span>

                                        <span className="skill-name">
                                            {skill.name}
                                        </span>

                                    </div>
                                ))}

                            </div>

                        </div>
                    ))}

                </div>

                {/* BOTTOM TEXT */}
                <div className="skills-footer">
                    <span></span>
                    <p>ALWAYS BUILDING.</p>
                    <span></span>
                </div>

            </div>

        </section>
    );
}

export default Skills;
