import React from 'react';
import "./header.css";
import logo from '../images/logo.gif';

export default function Header({ menuOpen, setMenuOpen }) {
  return (
         <div className="pos-f-t">
            <div className={"header " + (menuOpen && "active")}>
               <div className="wrapper">

                  <div className="left">
                  <a href="/" title=""><img className="gif-navbar" src={logo} alt="logo" /></a>

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

 export {Header};