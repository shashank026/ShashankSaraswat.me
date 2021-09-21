import React from 'react'
import emailjs from 'emailjs-com';
import contact from "../src/img/contact me.svg";
import Swal from 'sweetalert2';

export const Contact = () => {
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_e8k9xdt', 'template_odslwhv', e.target, 'user_FeEMN7kk8LhridH9lle0F')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        // alert("Your Message has been sucessfully Sent. I will contact you soon.")
        Swal.fire("Thank You For Contact", "Your Message has been sucessfully Sent. I will contact you soon!", "success");
        
    }
    return (
        <>
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row ">
                        <div className="col-10 mx-auto">

                            <div className="top pt-5" id={'contact'}>
                                <div className="App">
                                    <h3>
                                        Contact Me
                                    </h3>
                                </div>

                                <div className="row pt-4 contact">
                                    <div className="col-lg-6  order-1 order-lg-2 about-img">
                                        <img src={contact} className="aboutimg" alt="home img" />
                                    </div>

                                    {/* <div className="me"> */}

                                    <div className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-end flex-column">
                                        {/* <div class="container"> */}
                                        <form onSubmit={sendEmail} >
                                            <div className=" d-flex justify-content-center">
                                                <span className="required-star">*  <span>Required Field</span></span>
                                            </div>

                                            <ul>
                                                <li>
                                                    <label htmlFor="name"><span>Name <span className="required-star">*</span></span></label>
                                                    <input type="text" id="name" name="fullName"  required/>
                                                </li>
                                                <li>
                                                    <label htmlFor="mail"><span>Email <span className="required-star">*</span></span></label>
                                                    <input type="email" id="mail" name="email"  required/>
                                                </li>
                                                <li>
                                                    <label htmlFor="msg"><span>Message <span className="required-star">*</span></span></label>
                                                    <textarea rows="4" cols="50" name="message" required></textarea>
                                                </li>
                                                <li>
                                                    <input className="button" type="submit"/>
                                                </li>
                                                
                                            </ul>
                                        </form>
                                        {/* <div className="row1"   >{result ? <Result /> : null}</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Contact;