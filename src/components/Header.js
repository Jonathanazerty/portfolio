import React from 'react';
import "./header.css"
import logo from '../images/logo.gif'
// import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
    <div class="pos-f-t">
      <div className={"header " + (menuOpen && "active")}>
        <div className="wrapper">

           <div className="left">
           <a href="/" title=""><img className="gif-navbar" src={logo} alt="loading..." /></a>

              <div className="itemContainer">
                 <span>" Hello world ! "</span>
              </div>
           </div>

           <div className="center">
              <div className="quote">
                 <span>'No one is you and that's your power'</span>
              </div>
           </div>

           <div className="right">
              <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                 <span className="line1"></span>
                 <span className="line2"></span>
                 <span className="line3"></span>
              </div>
           </div>
        </div>
      </div>
     </div>
  )
}

// const Header = () => {
//     return (
      

//     <div class="pos-f-t">
//         <div class="collapse" id="navbarToggleExternalContent">
//           <div class="bg-transparent p-4">
//             <a href="/" title=""><img className="gif-navbar" src={logo} alt="loading..." /></a>
//             <a class="nav-link" href="/">Home</a>
//             <a class="nav-link" href="/About">About Me</a>
//             <a class="nav-link" href="/Contact">Contact</a>
//             <div class="nav-item dropdown">
//                 <a class="nav-link dropdown-toggle" href="/Projects" data-bs-display="static" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
//                 Projects
//                 </a>
//                 <div class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdown">
//                     <a class="dropdown-item" href="https://pokedex-dennis-jonathan.netlify.app/">Pokedex</a>
//                     <a class="dropdown-item" href="https://jonathanazerty.github.io/weather-app/">Weather app</a>
//                     <a class="dropdown-item" href="https://syntaxv8.github.io/the-startup/">Culture Cuisine</a>
//                 </div>
//             </div>
//             <span class="text-muted text-dark">It's all about the journey !</span>
//           </div>
//         </div>
//         <nav class="navbar navbar-light bg-transparent">
//           <button class="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span class="navbar-toggler-icon"></span>
//           </button>
//         </nav>
//     </div>
//     )
// };

 export {Header};