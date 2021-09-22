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
            <a class="nav-link" href="/">Home</a>
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
    )
};

export {Header};