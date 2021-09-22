import React from 'react';
import logo from '../images/logo.gif'
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const Header = () => {
    return (

    <div class="pos-f-t">
        <div class="collapse" id="navbarToggleExternalContent">
          <div class="bg-transparent p-4">
            <a href="/" title=""><img className="gif-navbar" src={logo} alt="loading..." /></a>
            {/* <a class="nav-link" href="/">Home</a> */}
            <a class="nav-link" href="/About">About Me</a>
            <a class="nav-link" href="/Contact">Contact</a>
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/Projects" data-bs-display="static" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                Projects
                </a>
                <div class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="https://pokedex-dennis-jonathan.netlify.app/">Pokedex</a>
                    <a class="dropdown-item" href="https://jonathanazerty.github.io/weather-app/">Weather app</a>
                    <a class="dropdown-item" href="https://syntaxv8.github.io/the-startup/">Culture Cuisine</a>
                </div>
            </div>
            <span class="text-muted text-dark">It's all about the journey !</span>
          </div>
        </div>
        <nav class="navbar navbar-dark bg-transparent">
          <button class="navbar-toggler navbar-dark" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
        </nav>
    </div>

        // <div className="Navbar">
        //     <Navbar fixed="top">
        //         <Navbar.Brand>
        //             <img className="gif-navbar" src={logo} alt="loading..." />
        //         </Navbar.Brand>
        //         <Navbar.Toggle />
        //         <Navbar.Collapse>
        //             <Nav.Link as={Link} to={"/About"}>Jonathan</Nav.Link>
        //             <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
        //             <NavDropdown title="Projects">
        //                 <NavDropdown.Item  as={Link} to={"/Projects"}></NavDropdown.Item>
        //             </NavDropdown>
        //             <Nav.Link as={Link} to={"/Cv"}>Curriculum Vitae</Nav.Link>
        //             <Nav.Link as={Link} to={"/Contact"}>Contact</Nav.Link>
        //             <div class="navIcon-container">
        //                 <a href="https://linkedin.com/in/jonathan-kalonji-0819a492/"
        //                     class="nav-icon"
        //                     target="_blank" rel="noreferrer"><i class="fab fa-linkedin-in"></i>
        //                 </a>
        //                 <a href="https://github.com/Jonathanazerty/"
        //                     class="nav-icon" target="_blank" rel="noreferrer"
        //                     ><i class="fab fa-github"></i>
        //                 </a>
        //                 <a class="nav-icon"
        //                     href="mailto:j.kalonji@hotmail.com"
        //                     target="_blank" rel="noreferrer"><i class="far fa-envelope"></i>
        //                 </a>
        //             </div>
        //         </Navbar.Collapse>
        //     </Navbar>
        // </div>
    )
};

export {Header};