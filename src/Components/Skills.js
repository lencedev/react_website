import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import python from "../assets/python.png";
import c from "../assets/c.png";
import react from "../assets/react.png";
import javascript from "../assets/javascript.png";
import cpp from "../assets/cpp.png";
import node from "../assets/node.png";
import java from "../assets/java.png";
import unity from "../assets/unity.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3
        }
    };
    return (
        <section className="skill" id="skills">
            <section className="hidden">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>Proficient in Web and Game Development.<br></br>Strong skills in Low-Level Development with foundational knowledge in Algorithmic approaches.</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                    <img src={c} alt="Image" draggable="false"/>
                                    <h5>C</h5>
                                </div>
                            <div className="item">
                                    <img src={javascript} alt="Image" draggable="false"/>
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={python} alt="Image" draggable="false"/>
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={react} alt="Image" draggable="false"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={cpp} alt="Image" draggable="false"/>
                                    <h5>C++</h5>
                                </div>
                                <div className="item">
                                    <img src={java} alt="Image" draggable="false"/>
                                    <h5>Java</h5>
                                </div>
                                <div className="item">
                                    <img src={node} alt="Image" draggable="false"/>
                                    <h5>Node & Express</h5>
                                </div>
                                <div className="item">
                                    <img src={unity} alt="Image" draggable="false"/>
                                    <h5>Unity 2 & 3D</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        </section>
    )
};