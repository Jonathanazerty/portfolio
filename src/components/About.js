import {React , useEffect, useRef} from 'react';
import '../App.css';
import { init } from 'ityped';
import { Container, Row, Col } from 'react-grid-system';

const About = () => {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { 
            showCursor: false,
            typeSpeed:  250, 
            strings: ['Patient', 'Dedicated', 'Attentive', 'Responsible', 'Diplomatic', 'Motivator', 'Empathetic', 'Loyal', 'Honest', 'Active Listener', 'Personal Growth'  ]
         });
    }, []);

    return (
        <>
            <div className="about">
                <div className="about-text">
                    <h1>Jonathan Kalonji<br></br></h1>
                    <h5>Full Stack Web Developer</h5>
                        <br></br>
                    <p><b>
                         "  <span ref={textRef}></span>  "
                    </b></p>
                        <br></br>
                        <p> A motivated web developer who is passionate about helping people.<br></br>
                            Will strive to create a beautiful user-friendly website for you, into detail with every single line of code.<br></br>
                            Always aiming to design experiences that will make people's life easier !<br></br><br></br>
                            Help me help you !
                        </p>
                            <br></br>
                        <Container fluid>
                            <Row align="center" justify="center" direction="column" style={{ height: '300px' }} >
                                <Col xs={3} >HTML
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"80%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >CSS
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"80%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >Javascript
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"70%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >React
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"70%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >Typescript
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"70%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >Bootstrap
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"70%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >PHP
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"50%"}}></div>
                                    </div>
                                </Col>
                                <Col xs={3} >Laravel
                                    <div className="progress-bar-container">
                                        <div className="progress-bar-indicator" style={{width:"50%"}}></div>
                                    </div>
                                </Col>
                            </Row>

                        </Container>
                </div>
            </div>
        </>
    )
}

export {About};