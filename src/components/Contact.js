import React from 'react';
// import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';

const Contact = () => {
    return (
        <div className="contact">
            <section class="d-flex flex-lg-column justify-content-center align-items-center p-4 border-bottom">
                <div class="me-5 d-none d-lg-block">
                    <span><h1>Feel free to connect</h1></span>
                </div>
                <div className="socials">
                    {/* <MDBContainer>
                        <MDBBtn size="lg" tag="a" floating social="https://linkedin.com/in/jonathan-kalonji-0819a492/">
                            <MDBIcon fab icon="linkedin-in" />
                        </MDBBtn>
                        <MDBBtn size="lg" tag="a" floating social="https://github.com/Jonathanazerty">
                            <MDBIcon fab icon="github" />
                        </MDBBtn>
                        <MDBBtn size="lg" tag="a" floating social="mailto:j.kalonji@hotmail.com">
                            <MDBIcon fab icon="envelope" />
                        </MDBBtn>
                    </MDBContainer> */}
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
        </div>
    )
}

export {Contact};