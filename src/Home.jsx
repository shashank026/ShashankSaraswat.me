import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import web from "../src/img/blogging.svg";
import Projects from './Projects';
import Contact from './Contact';
import About from './About';

export const Home = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column" id="home">
                                    <div className="textBox">
                                        <h1>
                                            Hello! My Name is <strong className="brand-name">Shashank!</strong> A Full Stack Web Developer
                                        </h1>
                                        <h2 className="my-3">
                                            Competitive Programmer || Student || Blogger
                                        </h2>
                                        <div className="mt-3">
                                            <NavLink to="/" className="btn" role="button">
                                                Learn More
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 imgBox">
                                    <img src={web} className="Bridge" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* /////////////////// About Us ///////////////////////////////// */}

            <div className="about">
                <About />
            </div>

            




            {/* ////////////////////  Projects /////////////////////////////// */}

            <div className="about">
                <Projects />
            </div>


            


            {/* ///////////////////////////// Contact Us /////////////////////////// */}

            <div className="contact">
                <Contact />
            </div>





            {/* /////////////////////////////// Footer ////////////////////////// */}

            <div className="credit d-flex justify-content-center">
                <p>Copyright &copy; 2021 by <Link className="footer-cerdit" onClick={() => window.location.replace("/#home")}>Shashank Saraswat</Link></p>
            </div>


            <div className="sticky-social">
                <ul className="social">
                    <li className="fb"><Link to="/"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                    <li className="linkdin"><Link to={{ pathname: "https://www.linkedin.com/in/shashank026/" }} target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                    <li className="insta"><Link to={{ pathname: "https://www.instagram.com/shashank__saraswat/" }} target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram" aria-hidden="true"></i></Link></li>
                    <li className="mail"><Link to={{ pathname: "mailto:shashank.saraswat26@gmail.com?subject = Feedback&body = Message" }} target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" aria-hidden="true"></i></Link></li>
                    <li className="github"><Link to={{ pathname: "https://github.com/shashank026/" }} target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true"></i></Link></li>
                </ul>
            </div>
        </>);
};
export default Home;