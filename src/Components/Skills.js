import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/python.png";
import meter2 from "../assets/c.png";
import meter3 from "../assets/react.png";
import meter4 from "../assets/javascript.png";
import meter5 from "../assets/cpp.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
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
                                    <img src={meter3} alt="Image" draggable="false"/>
                                    <h5>Web Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" draggable="false"/>
                                    <h5>Game Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" draggable="false"/>
                                    <h5>Algorithmic</h5>
                                </div>
                                <div className="item">
                                    <img src={meter4} alt="Image" draggable="false"/>
                                    <h5>Low-Level Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter5} alt="Image" draggable="false"/>
                                    <h5>Low-Level Development</h5>
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