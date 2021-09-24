import {React , useEffect, useRef} from 'react';
import '../App.css';
import { init } from 'ityped';

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
                        <p>
                            FRONT-END = HTML CSS Javascript React Typescript Bootstrap<br></br>
                            BACK-END = PHP Laravel
                        </p>
                </div>
            </div>
        </>
    )
}

export {About};