import { useState } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Fire from './fire.js';

function NavbarComponent() {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);

    // const GetPageName = () => {
    //     const path = location.pathname;
    //     if (path === '/home') return 'Home';
    //     if (path === '/projects') return 'Projects';
    //     if (path === '/project_queue') return 'Project_queue';
    //     if (path === '/work') return 'Work';
    //     return '';
    // }

    const isCurrentPage = (path) => location.pathname === path;

    return (
        <Navbar className="custom-navbar" expand="lg" sticky="top" expanded={expanded} onToggle={(e) => setExpanded(e)}>
            <Container>
                <Fire />
                <div className="navbar-brand-section">
                    <Navbar.Brand as={Link} to="/home" className="navbar-brand-custom fw-bold">
                        Nicholas Houghton
                    </Navbar.Brand>
                    <div className="navbar-contact-info">
                        <span className="contact-item">📧 nicoh7242@gmail.com</span>
                        <span className="contact-item">📱 (956) 322-2210</span>
                    </div>
                    <div className="navbar-social-links">
                        <a href="https://github.com/snickeristhebest" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                            <span>🐙 GitHub</span>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                            <span>💼 LinkedIn</span>
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord">
                            <span>💬 Discord</span>
                        </a>
                    </div>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggle-custom" />
                <Fire />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link
                            as={Link}
                            to="/home"
                            onClick={() => setExpanded(false)}
                            className={isCurrentPage('/home') ? 'nav-link-current' : 'nav-link-custom'}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/projects"
                            onClick={() => setExpanded(false)}
                            className={isCurrentPage('/projects') ? 'nav-link-current' : 'nav-link-custom'}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/work"
                            onClick={() => setExpanded(false)}
                            className={isCurrentPage('/work') ? 'nav-link-current' : 'nav-link-custom'}
                        >
                            Work
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/project_queue"
                            onClick={() => setExpanded(false)}
                            className={isCurrentPage('/project_queue') ? 'nav-link-current' : 'nav-link-custom'}
                        >
                            Project Queue
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;