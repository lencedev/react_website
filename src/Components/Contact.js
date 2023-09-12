import { useEffect } from 'react';

export const Contact = () => {

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

                        <form action="index.html" method="post" className="contact-form">

                            <div className="input-wrap">
                                <input type="text" className="contact-input"
                                    autoComplete="off" name="First Name" required />
                                <label>First Name</label>
                                <i className="icon fa-regular fa-id-card"></i>
                            </div>

                            <div className="input-wrap">
                                <input type="text" className="contact-input"
                                    autoComplete="off" name="Last Name" required />
                                <label>Last Name</label>
                                <i className="icon fa-regular fa-id-card"></i>
                            </div>

                            <div className="input-wrap w-100">
                                <input type="email" className="contact-input"
                                    autoComplete="off" name="Email" required />
                                <label>Email</label>
                                <i className="icon fa-regular fa-envelope"></i>
                            </div>

                            <div className="input-wrap textarea w-100">
                                <textarea name="Message" className="contact-input"
                                autoComplete="off" >
                                </textarea>
                                <label>Message</label>
                                <i className="icon fa-regular fa-message"></i>
                            </div>
                            <div className="contact-buttons">
                                <button className="btn upload">
                                    <span>
                                    <i class="fa-solid fa-paperclip"></i> Add attachment
                                    </span>
                                    <input type='file' className='attachement'/>
                                </button>
                                <input type='submit' value="Send message" className="btn"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
