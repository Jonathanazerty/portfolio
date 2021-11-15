import React from 'react';
import '../App.css';
import innerpeace from '../images/Inner Peace.gif';
import pokedex from '../images/pikachu.png';
import weather from '../images/weather-app.png';
import cuisine from '../images/culture food.png';
import Carousel from 'react-bootstrap/Carousel';

const Projects = () => {
    return (
        <>
        <div className="projects" id="projects">
            <h2 class="rounded float-center mb-5 mt-5 pt-5">
                My Projects
            </h2>
        </div>
        
        <Carousel class="carousel mb-5 mt-5">
            <Carousel.Item interval={4000}>
                <div className="images" class="img-responsive center-block">
                    <img className="image" src={innerpeace} alt="loading..." class="img-fluid mb-5 mt-5" style={{width: "300px", height: "auto", borderRadius:"50%"}}/><br></br>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Inner Peace </div>
                        <a href="https://inner-peace.netlify.app/" target="_blank" rel="noreferrer noopener"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/inner-peace"  target="_blank" rel="noreferrer noopener"><p className ="image__description">
                            Github
                        </p></a>
                        <p className ="image__description">An API was used here</p>
                        <div className="devicons">
                            <i class="devicon-react-original-wordmark fa-3x p-3 text-warning"></i>
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
                    <img className="image" src={pokedex} alt="loading..." class="img-fluid mb-5 mt-5" style={{width: "300px", height: "auto"}}/><br></br>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Pokedex 🎮 </div>
                        <a href="https://pokedex-dennis-jonathan.netlify.app/" target="_blank" rel="noreferrer noopener"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/pokedex"  target="_blank" rel="noreferrer noopener"><p className ="image__description">
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
                    <img className="image" src={weather} alt="loading..." class="img-fluid mb-5 mt-5" style={{width: "300px", height: "auto"}}/><br></br>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Weather App ☀️❄️⛈️🌡️</div>
                        <a href="https://jonathanazerty.github.io/weather-app/" target="_blank" rel="noreferrer noopener"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/weather-app" target="_blank" rel="noreferrer noopener"><p className ="image__description">
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
                    <img className="image" src={cuisine} alt="loading..." class="img-fluid mt-5 mb-5" style={{width: "300px", height: "auto"}}/>
                    <div className="image__overlay image__overlay--blur">
                        <div className="image__title"> Culture Cuisine</div>
                        <a href="https://syntaxv8.github.io/the-startup/" target="_blank" rel="noreferrer noopener"><p className ="image__description">
                            Click here to view live !
                        </p></a>
                        <a href="https://github.com/Jonathanazerty/the-startup" target="_blank" rel="noreferrer noopener"><p className ="image__description">
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