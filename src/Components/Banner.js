import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/pp.jpg";
import Typed from "typed.js";

export const Banner = () => {

    useEffect(() => {
        const options = {
            strings: ["Web Developer", "Game Developer", "Video Editor"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        };
        const typed = new Typed(".typing", options);
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
                            <h1 className="hello">Hello, I'm</h1>
                            <h1 className="lence">Lence</h1>
                            <h2 className="im">I'm a<span className="mini_space"></span> <span className="typing"></span></h2>
                            <p className="about">Completed 2 years at Epitech, looking for a job before beginning my 3rd year at Epitech.<br></br> Actively seeking a one-year apprenticeship or longer.</p>
                        </Col>
                        <Col xs={12} md={6} xl={4}>
                            <img src={headerImg} alt="Header Img" className="img-fluid" draggable="false"/>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    )
}
