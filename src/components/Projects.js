import React from 'react';
import '../App.css';
import pokedex from '../images/pokedex.png';
import weather from '../images/WeatherApp.png';
import cuisine from '../images/CultureCuisine.png';
import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {
    return (
        <>
        <div className="projects">
            <h2 class="rounded float-center mb-5 mt-5 pt-5">
                My Projects
            </h2>
        </div>
        
        <Carousel class="carousel mb-5 mt-5">
            <Carousel.Item interval={4000}>
                <div className="images" class="img-responsive center-block">
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
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <div className="images" class="img-responsive center-block">
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
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <div className="images" class="img-responsive center-block">
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
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </>
    )
}

export {Projects};