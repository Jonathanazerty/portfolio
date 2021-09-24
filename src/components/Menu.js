import React from 'react'
import "./menu.css"


export default function Menu({ menuOpen, setMenuOpen }) {
   return (
      <div className={"menu " + (menuOpen && "active")}>
         <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/About">Jonathan</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
               <a class="nav-link" href="/Projects">Projects</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a class="nav-link" href="/Contact">Connection</a>
            </li>
         </ul>
      </div>
   )
}

export {Menu};