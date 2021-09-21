import React from 'react';
 import { MDBContainer, MDBFooter, MDBCol, MDBRow} from "mdbreact";

const Footer = () => {
    return (
        <div className="footer">
            <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span>Connect with me on</span>
                </div>
                <div>
                    <a href="https://linkedin.com/in/jonathan-kalonji-0819a492/" class="me-4 text-reset">
                        <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Jonathanazerty/" class="me-4 text-reset">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="mailto:j.kalonji@hotmail.com" class="me-4 text-reset">
                        <i class="far fa-envelope"></i>
                    </a>
                    <a href="+32 4 " class="me-4 text-reset">
                        <i class="fas fa-phone me-3"></i>
                    </a>
                </div>
                
            </section>
        <MDBFooter color="blue" className="font-small pt-4 mt-4">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Portfolio of Jonathan Kalonji</h5>
                <p>
                  Junior Web Developer
                </p>
              </MDBCol>
              <MDBCol md="6">
                <h5 className="title">Contact</h5>
                <ul>
                    <i class="fas fa-home me-3"></i>
                        Berchem - Belgium<br></br>
                    <a href="mailto:j.kalonji@hotmail.com" class="me-4 text-reset">
                        <i class="far fa-envelope"></i>
                    </a>
                        j.kalonji@hotmail.com<br></br>
                    <i class="fas fa-phone me-3"></i>
                        + 32 4 
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="Jonathan"> Jonathan </a>
            </MDBContainer>
          </div>
        </MDBFooter>
        </div>
      );
    }

export {Footer};