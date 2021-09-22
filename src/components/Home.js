import React from 'react';
import logo from '../images/Jonathan.gif';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

const Home = () => {
    return (
        <body className="body">
            <div>
            <a href="/About" title="AboutMe"><img className="gif" src={logo} alt="loading..." /></a>
            </div>
            <About/>
            <Projects/>
            <Contact/>
      </body>
    )
}

export {Home};