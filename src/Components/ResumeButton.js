import { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ResumeIMG from "../assets/img/cv2.jpg";

export const ResumeButton = ({ className }) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <button className={className} onClick={handleShow}>
                View Resume
            </button>

            <Modal size="lg" show={show} onHide={handleClose} centered className="modern-modal">
                <Modal.Header closeButton className='close-button'>
                    <Modal.Title>Resume Preview</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img src={ResumeIMG} alt="Resume" style={{ width: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }} />
                </Modal.Body>
            </Modal>

        </>
    );
};
