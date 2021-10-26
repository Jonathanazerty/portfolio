import React from 'react';
import "./header.css";

export default function Header({ menuOpen, setMenuOpen }) {
  return (
         <div className="pos-f-t">
            <div className={"header " + (menuOpen && "active")}>
               <div className="wrapper p-4">
                  <div className="left"></div>
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