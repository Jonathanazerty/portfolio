import React from 'react';
import logo from '../images/Jonathan.gif';

const Home = () => {
    return (
        <body className="body">
            <div>
            <a href="/About" title="AboutMe"><img className="gif" src={logo} alt="loading..." /></a>
            </div>
      </body>
    )
}

export {Home};