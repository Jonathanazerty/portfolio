import React from 'react';
import { SocialIcon } from 'react-social-icons';
 import { MDBContainer, MDBFooter, MDBCol, MDBRow} from "mdbreact";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import { faHome } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 m-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Eager to meet new people 🤝🏼 !</span>
                </div>
                <div className="icons-footer">
                  <SocialIcon className="icon-footer" url="https://linkedin.com/in/jonathan-kalonji-0819a492/" bgColor="#0054ff" />
                  <SocialIcon className="icon-footer" url="https://github.com/Jonathanazerty/" bgColor="#0054ff" />
                  <SocialIcon className="icon-footer" url="mailto:j.kalonji@hotmail.com" bgColor="#0054ff"/>
                  <SocialIcon className="icon-footer" url="tel:+32 473981602" bgColor="#0054ff"/>
                </div>
                
            </section>
        <MDBFooter color="blue" className="font-small pt-4 m-4">
          <MDBContainer fluid className="text-center text-md-center">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Portfolio of Jonathan Kalonji</h5>
                <p>
                  Junior Full Stack Web Developer
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Based</h5>
                <ul>
                  <FontAwesomeIcon icon={faHome} />
                        Antwerp - Belgium<br></br>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="/"> Jonathan Kalonji </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
      );
    }

export {Footer};