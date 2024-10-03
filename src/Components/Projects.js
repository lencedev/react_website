import { Col, Row } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Container from 'react-bootstrap/Container';
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/2sus1mate.jpg";
import projImg2 from "../assets/img/42sh.jpg";
import projImg3 from "../assets/img/defender.jpg";
import projImg4 from "../assets/img/groundhog.jpg";
import projImg5 from "../assets/img/tradebot.jpg";
import projImg6 from "../assets/img/abstractVM.jpg";
import projImg7 from "../assets/img/weatherapp.jpg";
import projImg8 from "../assets/img/portfolio.jpg";
import projImg9 from "../assets/img/todo-list.jpg";
import projImg10 from "../assets/img/myrunner.jpg";


export const Projects = () => {
    const projects = [
        {
            title: ('C# & Unity 3D'),
            description: ('2 Sus 1 Mate" is an 3D FPS horror game, inspired by Among Us, Slender, and Fnaf. Game reviewed by "freeappsforme" Link : https://freeappsforme.com/2-sus-1-mate-game-review/'),
            imgUrl: projImg1,
            link: "https://lencetek.itch.io/2-sus-1-mate",
            tab: "game",
        },
        {
            title: ('C & CSFML'),
            description: ("tcsh-like program made in C taking shell's functionalities."),
            imgUrl: projImg2,
            link: "https://github.com/owentek/42sh",
            tab: "object",
        },
        {
            title: ('C & CSFML'),
            description: ('Defender is a 2D tower defense game developed in CSFML and C, set in the Among Us universe. It combines strategic gameplay with engaging graphics, showcasing proficiency in game logic and C programming.'),
            imgUrl: projImg3,
            link: "https://github.com/owentek/my_defender",
            tab: "game",
        },
        {
            title: ('Python'),
            description: ('A predictive modeling tool for trend forecasting.'),
            imgUrl: projImg4,
            link: "https://github.com/lencedev/groundhog",
            tab: "object",
        },
        {
            title: ('Python'),
            description: ('An automated Python-based trading system for financial markets.'),
            imgUrl: projImg5,
            link: "https://github.com/lencedev/tradebot",
            tab: "object",
        },
        {
            title: ('C++'),
            description: ('A C++ virtual machine simulating assembly instructions.'),
            imgUrl: projImg6,
            link: "https://github.com/lencedev/groundhog",
            tab: "object",
        },
        {
            title: ('ReactJS & HTML & CSS'),
            description: ('Weather Web Application using API'),
            imgUrl: projImg7,
            link: "https://main--beautiful-sunburst-8c42a8.netlify.app/",
            tab: "web",
        },
        {
            title: ('ReactJS & HTML & CSS'),
            description: ('Many Portfolios made in ReactJS'),
            imgUrl: projImg8,
            link: "https://magenta-vacherin-bd46aa.netlify.app/",
            tab: "web",
        },
        {
            title: ('ReactJS & JSX'),
            description: ('To-do list made in ReactJS'),
            imgUrl: projImg9,
            link: "https://unrivaled-pithivier-b6dfc7.netlify.app/",
            tab: "web",
        },
        {
            title: ('C & CSFML'),
            description: ('Runner is a fast-paced 2D game developed using C and CSFML. In this game, players control a running character who must jump to avoid enemies, combining quick reflexes with strategic timing.'),
            imgUrl: projImg10,
            link: "https://github.com/lencedev/my_runner",
            tab: "game",
        },
    ];
    return (
        <section className="hidden">
            <section className="project" id="projects">
                <Container>
                    <Row>
                        <Col><h2>Projects</h2>
                        <p>Below is a selection of my projects, showcasing the breadth of my coding skills and versatility as a developer.</p>
                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Web</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Object Oriented</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="third">Game</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {projects.filter(project => project.tab === "web").map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {projects.filter(project => project.tab === "object").map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="third">
                                        <Row>
                                            {projects.filter(project => project.tab === "game").map((project, index) => (
                                                <ProjectCard key={index} {...project} />
                                            ))}
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