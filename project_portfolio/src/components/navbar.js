import { useState } from 'react';
import { Alert } from "react-bootstrap";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';
import Fire from './fire.js';


function NavbarComponent() {
    const location = useLocation();
    const [expanded, setExpanded] = useState(false);
    const [copied, setCopied] = useState(false);


    const discordUsername = "snickerishere";

    const copyDiscord = async (e) => {
        e.preventDefault(); // prevent navigating away
        await navigator.clipboard.writeText(discordUsername);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        // window.open("https://discord.com", "_blank", "noopener,noreferrer");
    };

    const isCurrentPage = (path) => location.pathname === path;

    return (
        <Navbar className="custom-navbar" expand="lg" sticky="top" expanded={expanded} onToggle={(e) => setExpanded(e)}>
            <Container>
                
                <Fire />
                <div className="navbar-brand-section">
                    <Navbar.Brand as={Link} to="/home" className="navbar-brand-custom fw-bold text-center">
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
                        <a href="https://linkedin.com/in/nico-h-6289312b6" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                            <span>💼 LinkedIn</span>
                        </a>
                        <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="social-link" title="Discord" onClick={copyDiscord}>
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
                {copied && (
                                    <Alert
                                        variant="success"
                                        className="position-fixed top-0 end-0 m-3"
                                    >
                                        Username copied to clipboard!
                                    </Alert>
                                    )}
            </Container>
        </Navbar>
    );
}

export default NavbarComponent;