import { Col, Row } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/2sus.jpg";
import projImg2 from "../assets/img/42sh.jpg";
import projImg3 from "../assets/img/defender.jpg";


export const Projects = () => {
    const projects = [
        {
            title: ('C# & Unity 3D'),
            description: ('3D FPS Horror Game'),
            imgUrl: projImg1,
            link : "https://lencetek.itch.io/2-sus-1-mate",
        },
        {
            title: ('C & CSFML'),
            description: ("tcsh-like program made in C taking shell's functionalities."),
            imgUrl: projImg2,
            link : "https://github.com/owentek/42sh",
        },
        {
            title: ('C & CSFML'),
            description: ('2D tower defense video game using CSFML'),
            imgUrl: projImg3,
            link : "https://github.com/owentek/my_defender",
        },
        {
            title: ('Business Startup'),
            description: ('Design & Development'),
            imgUrl: projImg1,
            link : "https://github.com/owentek/my_defender",
        },
        {
            title: ('Business Startup'),
            description: ('Design & Development'),
            imgUrl: projImg2,
            link : "https://github.com/owentek/my_defender",
        },
    ];
    return (
        <section className="hidden">
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col><h2>Projects</h2>
                            <p>webpack compiled with 1 warning</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row> {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row> {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row> {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        };
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </Col>
                    </Row>
                </Container>
            </section>
        </section>
    );
}