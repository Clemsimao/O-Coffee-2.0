import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(open => !open);

    return (
        <header>
        <a className="header-logo" href="/">
            <img src="/images/logo.svg" alt="logo d'O'Coffee"/>
        </a>
        <a className="name-logo" href="/">O'Coffee</a>
        <div className="menu-burger" onClick={toggleMenu} aria-label="Ouvrir le menu" tabIndex={0}>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
        </div>
        <nav className={`main-menu${menuOpen ? " open" : ""}`}>
            <ul>
                <li><Link to="/" onClick={() => setMenuOpen(false)}>Accueil</Link></li>
                <li><Link to="/catalogue" onClick={() => setMenuOpen(false)}>Catalogue</Link></li>
                <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;