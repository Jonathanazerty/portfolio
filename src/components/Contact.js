import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { Container, Row, Col } from 'react-grid-system';
import '../App.css';

const Contact = () => {
    return (
            <section class="d-flex flex-lg-column justify-content-center align-items-center mt-5 mb-5 pt-5 pb-5" id="contact">
                <Container fluid>
                    <Row align="center" justify="center" direction="row" style={{ height: '300px' }} >
                        <Col xs={12} >
                            <div class="me-5 mb-5">
                                <h1>Feel free to connect <span class="handshake">🤝🏼</span></h1>
                            </div>
                        </Col>
                        <Col xs={12}>
                            <div className="social-icon">
                                <SocialIcon className="icons" url="https://linkedin.com/in/jonathan-kalonji-0819a492/" target="_blank" rel="noreferrer noopener" bgColor="#82c9ff" fgColor="#ffffff" style={{ height: 100, width: 100 }} />
                                <SocialIcon className="icons" url="https://github.com/Jonathanazerty/" target="_blank" rel="noreferrer noopener" bgColor="#82c9ff" fgColor="#ffffff" style={{ height: 100, width: 100 }} />
                                <SocialIcon className="icons" url="mailto:j.kalonji@hotmail.com" target="_blank" rel="noreferrer noopener" bgColor="#82c9ff" fgColor="#ffffff" style={{ height: 100, width: 100 }} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
    )
}

export {Contact};