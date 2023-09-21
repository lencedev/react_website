import { Col } from "react-bootstrap"
export const ProjectCard = ({ title, description, imgUrl, link }) => {
    const randomDelay = Math.random() * 2;
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" style={{ animationDelay: `${randomDelay}s` }}>
                <a href={link} target="_blank" rel="noopener noreferrer" className="white-link">
                    <img src={imgUrl} alt={title} draggable="false"/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </a>
            </div>
        </Col>
    )
}
