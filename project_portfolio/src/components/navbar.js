import { captureOwnerStack } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
    const location  = useLocation();

    const GetPageName = () => {
        const path = location.pathname;
        if (path === '/home') return 'Home';
        if (path === '/projects') return 'Projects';
        if (path === '/work') return 'Work';
        return '';
    }
    return (
        <nav className="navbar">
            <h1 className="page-title">{GetPageName()}</h1>
            <ul className="nav-links">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/work">Work</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;