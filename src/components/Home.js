import React from 'react';
import '../App.css';
import logo from '../images/Jonathan.gif';
import { About } from './About';
import { Contact } from './Contact';
import { Projects } from './Projects';

const Home = () => {
    
    return (
        
        <body className="body">
            <div id='title'>
                <span>
                    No one is you and that's your power
                </span>
            </div>
            <div>
                <a href="/About" target="_blank" rel="noreferrer noopener" title="AboutMe"><img className="gif" src={logo} alt="loading..." /></a>
            </div>
            <About/>
            <Projects/>
            <Contact/>
      </body>
    )
}

export {Home};