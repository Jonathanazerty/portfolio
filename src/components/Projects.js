import React from 'react';
import '../App.css';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';

const Projects = () => {
    return (
        <div className="projects">
            <h2>
                My Projects
            </h2>
            
                <a href="https://pokedex-dennis-jonathan.netlify.app/"><img className="image1" src={pokedex} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "700px", height: "100%"  }}/></a><br></br>
           
                <a href="https://jonathanazerty.github.io/weather-app/"><img className="image2" src={weather} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "700px", height: "100%"  }}/></a><br></br>
            
                <a href="https://syntaxv8.github.io/the-startup/"><img className="image3" src={cuisine} alt="loading..." class="rounded float-center mt-5 mb-5" style={{width: "700px", height: "100%"  }}/></a>
        </div>
    )
}

export {Projects};