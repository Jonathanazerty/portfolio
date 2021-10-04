import React from 'react';
import '../App.css';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';

const Projects = () => {
    return (
        <div className="projects">
            <h2 class="rounded float-center mb-5 mt-5">
                My Projects
            </h2>
            <div className="images">
                <img className="image" src={pokedex} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "590px", height: "100%"  }}/><br></br>
                <div className="image__overlay image__overlay--blur">
                    <div className="image__title"> Pokedex 🎮 </div>
                    <a href="https://pokedex-dennis-jonathan.netlify.app/"><p className ="image__description">
                        Click here to view live !
                    </p></a><br></br>
                    <div className="devicons">
                        <i class="devicon-react-original-wordmark fa-3x p-3 text-warning"></i>
                        <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                        <i class="devicon-typescript-plain fa-3x p-3 text-warning"></i>
                        <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                        <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                    </div>
                </div>
            </div>
            <div className="images">
                <img className="image" src={weather} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "590px", height: "100%"  }}/><br></br>
                <div className="image__overlay image__overlay--blur">
                    <div className="image__title"> Weather App ☀️❄️⛈️🌡️</div>
                    <a href="https://jonathanazerty.github.io/weather-app/"><p className ="image__description">
                        Click here to view live !
                    </p></a><br></br>
                    <div className="devicons">
                        <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                        <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                        <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                    </div>
                </div>
            </div>
            <div className="images">
                <img className="image" src={cuisine} alt="loading..." class="rounded float-center mt-5 mb-5" style={{width: "590px", height: "100%"  }}/>
                <div className="image__overlay image__overlay--blur">
                    <div className="image__title"> Culture Cuisine 🌮🧆🍣🍝</div>
                    <a href="https://syntaxv8.github.io/the-startup/"><p className ="image__description">
                        Click here to view live !
                    </p></a><br></br>
                    <div className="devicons">
                        <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                        <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                        <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Projects};