import React from 'react'
import "./menu.css"


export default function Menu({ menuOpen, setMenuOpen }) {
   return (
      <div className={"menu " + (menuOpen && "active")}>
         <ul onClick={() => setMenuOpen(false)}>
            <li>
                <a class="nav-link" href="/">Home</a>
            </li>
            <li>
                <a class="nav-link" href="/About">Jonathan</a>
            </li>
            <li>
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
            </li>
            <li>
                <a class="nav-link" href="/Contact">Connection</a>
            </li>
         </ul>
      </div>
   )
}

export {Menu};