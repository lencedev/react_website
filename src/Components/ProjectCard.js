import { Col } from "react-bootstrap"
export const ProjectCard = ({title, description, imgUrl}) => {
    const randomDelay = Math.random() * 2;
    return (
        <Col sm={6} md={4}>
             <div className="proj-imgbx" style={{ animationDelay: `${randomDelay}s` }}>
                <img src={imgUrl}/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}