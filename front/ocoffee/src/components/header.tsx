import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
        <a className="header-logo" href="/">
            <img src="/images/logo.svg" alt="logo d'O'Coffee"/>
        </a>
        <a className="name-logo" href="/">O'Coffee</a>
        <div className="menu-burger">
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
        </div>
        <nav className="main-menu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/catalogue">Catalogue</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;