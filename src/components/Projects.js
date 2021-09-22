import React from 'react';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';

const Projects = () => {
    return (
        <div>
            <a href="https://pokedex-dennis-jonathan.netlify.app/"><img className="pokedex" src={pokedex} alt="loading..." /></a>
            <a href="https://jonathanazerty.github.io/weather-app/"><img className="weather" src={weather} alt="loading..." /></a>
            <a href="https://syntaxv8.github.io/the-startup/"><img className="cuisine" src={cuisine} alt="loading..." /></a>
        </div>
    )
}

export {Projects};