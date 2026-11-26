
import { useState } from 'react';
import AxionLogo from '../assets/axion-logo.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header>
            <nav>
                <div className="logo">
                    <a href="#home" >
                        <img
                        src={AxionLogo}
                        alt="Axion Logo"
                        className="logo-img"
                    /></a>
                    
                </div>

                <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
                        <li><a href="#about" onClick={closeMenu}>About</a></li>
                        <li><a href="#projects" onClick={closeMenu}>Project</a></li>
                        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                        <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
                    <button className="upBtn">
                    Download CV
                    </button>
                </ul>

                

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={menuOpen}
                >
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                    <span className={menuOpen ? 'bar open' : 'bar'}></span>
                </button>
            </nav>
        </header>
    );
}

export default Header;
