import React from 'react';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';

const Projects = () => {
    return (
        <div>
            <h2>
                My Projects
            </h2>
            <a href="https://pokedex-dennis-jonathan.netlify.app/"><img className="pokedex" src={pokedex} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "30%" }}/></a><br></br>
            <a href="https://jonathanazerty.github.io/weather-app/"><img className="weather" src={weather} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "30%" }}/></a><br></br>
            <a href="https://syntaxv8.github.io/the-startup/"><img className="cuisine" src={cuisine} alt="loading..." class="rounded float-center mt-5 mb-5" style={{width: "30%" }}/></a>
        </div>
    )
}

export {Projects};