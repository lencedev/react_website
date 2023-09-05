import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";

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
                            <p>Line 5:11: 'responsive' is assigned a value but never used</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" draggable="false"/>
                                    <h5>Web Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" draggable="false"/>
                                    <h5>Web Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" draggable="false"/>
                                    <h5>Web Developement</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" draggable="false"/>
                                    <h5>Web Developement</h5>
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