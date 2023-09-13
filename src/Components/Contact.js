
import { useState, useEffect } from "react";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [status, setStatus] = useState({});
    const [buttonText, setButtonText] = useState('Send message');

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });
        let result = await response.json();
        setButtonText("Send message");
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            setStatus({ success: true, message: "Message sent successfully" });
        } else {
            setStatus({ success: false, message: "Something went wrong, please try again later" });
        }
    }

    useEffect(() => {
        const inputs = document.querySelectorAll('.contact-input');
        const handleFocus = (e) => {
            e.target.parentNode.classList.add("focus");
            e.target.parentNode.classList.add("not-empty");
        };
        const handleBlur = (e) => {
            if (e.target.value === "") {
                e.target.parentNode.classList.remove("not-empty");
            }
            e.target.parentNode.classList.remove("focus");
        };
        inputs.forEach((ipt) => {
            ipt.addEventListener('focus', handleFocus);
            ipt.addEventListener('blur', handleBlur);
        });
        return () => {
            inputs.forEach((ipt) => {
                ipt.removeEventListener('focus', handleFocus);
                ipt.removeEventListener('blur', handleBlur);
            });
        };
    }, []);

    return (
        <section className="contact">
            <div className="container">
                <div className="left">
                    <div className="form-wrapper">
                        <div className="contact-heading">
                            <h1>Let's work together<span>.</span></h1>
                            <p className="text">Or reach us via : <a href="mailto:owenbolling2@gmail.com">
                                owenbolling2@gmail.com</a></p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="input-wrap">
                                <input 
                                    type="text" 
                                    className="contact-input"
                                    autoComplete="off"
                                    name="First Name"
                                    required 
                                    value={formDetails.firstName}
                                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                                />
                                <label>First Name</label>
                                <i className="icon fa-regular fa-id-card"></i>
                            </div>

                            <div className="input-wrap">
                                <input 
                                    type="text" 
                                    className="contact-input"
                                    autoComplete="off" 
                                    name="Last Name" 
                                    required 
                                    value={formDetails.lastName}
                                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                                />
                                <label>Last Name</label>
                                <i className="icon fa-regular fa-id-card"></i>
                            </div>

                            <div className="input-wrap w-100">
                                <input 
                                    type="email" 
                                    className="contact-input"
                                    autoComplete="off" 
                                    name="Email" 
                                    required 
                                    value={formDetails.email}
                                    onChange={(e) => onFormUpdate('email', e.target.value)}
                                />
                                <label>Email</label>
                                <i className="icon fa-regular fa-envelope"></i>
                            </div>

                            <div className="input-wrap textarea w-100">
                                <textarea 
                                    name="Message" 
                                    className="contact-input"
                                    autoComplete="off"
                                    value={formDetails.message}
                                    onChange={(e) => onFormUpdate('message', e.target.value)}
                                >
                                </textarea>
                                <label>Message</label>
                                <i className="icon fa-regular fa-message"></i>
                            </div>
                            <div className="contact-buttons">
                                <input type='submit' value={buttonText} className="btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
