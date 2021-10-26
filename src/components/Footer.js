import React from 'react';
import { SocialIcon } from 'react-social-icons';
 import { MDBContainer, MDBFooter, MDBCol, MDBRow} from "mdbreact";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer pl-5 pr-5">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 m-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Eager to meet new people <span class="handshake">👋🏽</span>!</span>
                </div>
                <div className="icons-footer">
                  <SocialIcon className="icon-footer" url="https://www.linkedin.com/in/jonathan-kalonji/" bgColor="#0361a8" fgColor="#ffffff" />
                  <SocialIcon className="icon-footer" url="https://github.com/Jonathanazerty/" bgColor="#0361a8" fgColor="#ffffff"/>
                  <SocialIcon className="icon-footer" url="mailto:j.kalonji@hotmail.com" bgColor="#0361a8" fgColor="#ffffff"/>
                  <SocialIcon className="icon-footer" url="tel:+32 473981602" bgColor="#0361a8" fgColor="#ffffff"/>
                </div>
                
            </section>
        <MDBFooter color="blue" className="font-small pl-5 pr-5 pb-4">
          <MDBContainer fluid className="text-center text-md-center">
            <MDBRow>
              <MDBCol md="12" className="text-center p-2">
                <h5 className="title">Portfolio of Jonathan Kalonji</h5>
                <p>
                  Junior Full Stack Web Developer
                </p>
              </MDBCol>
              <MDBCol md="12" className="text-center p-2">
                <h5 className="title">Based</h5>
                <ul>
                  <FontAwesomeIcon icon={faHome} />
                        Antwerp - Belgium<br></br>
                </ul>
              </MDBCol>
              <MDBCol md="12" className="text-center">
                <div className="footer-copyright text-center py-3">
                  &copy; {new Date().getFullYear()} Copyright: <a href="/"> Jonathan Kalonji </a>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBFooter>
        </div>
      );
    }

export {Footer};