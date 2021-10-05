import React from 'react';
import '../App.css';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';
import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {
    return (
        <>
        
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=First slide&bg=373940"
                alt="First slide"
                />
                <Carousel.Caption>
                <div className="images">
                    <img className="image" src={pokedex} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "590px", height: "100%"  }}/><br></br>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Pokedex 🎮 </div>
                        <a href="https://pokedex-dennis-jonathan.netlify.app/"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/pokedex"><p className ="image__description">
                            Github
                        </p></a>
                        <p className ="image__description">An API was used here</p>
                        <div className="devicons">
                            <i class="devicon-react-original-wordmark fa-3x p-3 text-warning"></i>
                            <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                            <i class="devicon-typescript-plain fa-3x p-3 text-warning"></i>
                            <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                            <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                        </div>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Second slide&bg=282c34"
                alt="Second slide"
                />
                <Carousel.Caption>
                <div className="images">
                    <img className="image" src={weather} alt="loading..." class="rounded float-center mb-5 mt-5" style={{width: "590px", height: "100%"  }}/><br></br>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Weather App ☀️❄️⛈️🌡️</div>
                        <a href="https://jonathanazerty.github.io/weather-app/"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/weather-app"><p className ="image__description">
                            Github
                        </p></a>
                        <p className ="image__description">An API was used here</p>
                        <div className="devicons">
                            <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                            <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                            <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                        </div>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="holder.js/800x400?text=Third slide&bg=20232a"
                alt="Third slide"
                />
                <Carousel.Caption>
                <div className="images">
                    <img className="image" src={cuisine} alt="loading..." class="rounded float-center mt-5 mb-5" style={{width: "590px", height: "100%"  }}/>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Culture Cuisine 🌮🧆🍣🍝</div>
                        <a href="https://syntaxv8.github.io/the-startup/"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/the-startup"><p className ="image__description">
                            Github
                        </p></a>
                        <div className="devicons">
                            <i class="devicon-javascript-plain fa-3x p-3 text-warning"></i>
                            <i class="devicon-css3-plain-wordmark fa-3x p-3 text-warning"></i>
                            <i class="devicon-bootstrap-plain-wordmark fa-3x p-3 text-warning"></i>
                        </div>
                    </div>
                </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
            
        <div className="projects">
            <h2 class="rounded float-center mb-5 mt-5">
                My Projects
            </h2>
        </div>

        </>
    )
}

export {Projects};