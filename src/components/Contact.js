import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../App.css';

const Contact = () => {
    return (
        <div className="contact">
            <section class="d-flex flex-lg-column justify-content-center align-items-center">
                <div class="me-5 d-none d-lg-block mb-5">
                    <span><h1>Feel free to connect 🤝🏼</h1></span>
                </div>
                <div className="d-flex justify-content-between">
                    <SocialIcon url="https://linkedin.com/in/jonathan-kalonji-0819a492/" bgColor="#000000" fgColor="#fbff12" style={{ height: 100, width: 100 }} />
                    <SocialIcon url="https://github.com/Jonathanazerty/" bgColor="#fbff12" fgColor="#fa0000" style={{ height: 100, width: 100 }} />
                    <SocialIcon url="mailto:j.kalonji@hotmail.com" bgColor="#fa0000" fgColor="#000000" style={{ height: 100, width: 100 }} />
                </div>
                
            </section>
        </div>
    )
}

export {Contact};