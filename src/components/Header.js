import React from 'react';
import logo from '../images/logo.gif'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Navbar">
            <Navbar fixed="top">
                <Navbar.Brand>
                    <img className="gif-navbar" src={logo} alt="loading..." />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav.Link as={Link} to={"./About"}>Jonathan</Nav.Link>
                    <Nav.Link as={Link} to={"./Home"}>Home</Nav.Link>
                    <NavDropdown title="Projects">
                        <NavDropdown.Item  as={Link} to={"./Projects"}></NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to={"./Cv"}>Curriculum Vitae</Nav.Link>
                    <Nav.Link as={Link} to={"./Contact"}>Contact</Nav.Link>
                    <div class="navIcon-container">
                        <a href="https://linkedin.com/in/jonathan-kalonji-0819a492/"
                            class="nav-icon"
                            target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Jonathanazerty/"
                            class="nav-icon" target="_blank" rel="noreferrer"
                            ><i class="fab fa-github"></i>
                        </a>
                        <a class="nav-icon"
                            href="mailto:j.kalonji@hotmail.com"
                            target="_blank" rel="noreferrer"><i class="far fa-envelope"></i>
                        </a>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
};

export {Header};