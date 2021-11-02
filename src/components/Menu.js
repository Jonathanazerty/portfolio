import React from 'react';
import "./menu.css";


export default function Menu({ menuOpen, setMenuOpen }) {
   return (
      <div className={"menu " + (menuOpen && "active")}>
         <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/" target="_blank" rel="noreferrer noopener">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/About" target="_blank" rel="noreferrer noopener">Jonathan</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a class="nav-link" href="/Projects" target="_blank" rel="noreferrer noopener">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/Contact" target="_blank" rel="noreferrer noopener">Connection</a>
            </li>
         </ul>
      </div>
   )
}

export {Menu};