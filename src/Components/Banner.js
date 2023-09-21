import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pp.jpg";
import Typed from "typed.js";

export const Banner = () => {

    useEffect(() => {
        // Options pour Typed.js
        const options = {
            strings: ["Web Developer", "Game Developer", "Video Editor"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        };

        // Initialisation de Typed.js
        const typed = new Typed(".typing", options);

        // Cleanup à la destruction du composant
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className="hidden">
            <section className="banner" id="home">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <h1 className="hello">Hello, I'm</h1> {/* Changement de div en h2 et ajout de className */}
                            <h1 className="lence">Lence</h1> {/* Changement de div en h1 et ajout de className */}
                            <h2 className="im">I'm a<span className="mini_space"></span> <span className="typing"></span></h2> {/* Maintien de div et ajout de className */}
                            <p className="about">Completed 2 years at Epitech, now in my 3rd year at EPSI.<br></br> Actively seeking a one-year apprenticeship or longer.</p>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <img src={headerImg} alt="Header Img" className="img-fluid" />
                        </Col>
                    </Row>
                    {/* <div className="about-me">
                        <h2 className="h2">About me</h2>
                    </div> */}
                </Container>
            </section>
        </section>

    )
}
