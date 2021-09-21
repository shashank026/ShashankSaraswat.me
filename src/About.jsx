import React from 'react'
import { Link } from 'react-router-dom';
import img from "../src/img/support.svg";
import codechef from "../src/img/Codechef.png";
import codeforces from "../src/img/Codeforces.png";
import hackerrank from "../src/img/HackerRank.png";
import leetcode from "../src/img/LeetCode.png";

export const About = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row ">
                        <div className="col-10 mx-auto">

                        <div className="top pt-5" id={'about'}>
                                <div className="App">
                                    <h3>
                                        About Us
                                    </h3>
                                </div>
                                <div className="row pt-4">
                                    <div className="col-lg-6 order-1 order-lg-2 about-img">
                                        <img src={img} className="aboutimg" alt="home img" />
                                    </div>
                                    <div className="col-md-6 pt-3 pt-lg-0 order-1 order-lg-2 d-flex justify-content-center flex-column">
                                        <p className="my-0 pt-5">
                                            I'm A Computer Science student in GLA University Mathura. Over the past couple of  months I worked on several projects.  Projects that are based on web development. I participated in various hackathons of MLH. 4 Star at CodeChef. I always learn how
                                            to make a code efficient so i can improve my skills.
                                        </p>
                                        <div className="App">
                                            <div className="tech-links pt-4">
                                                <h3>Tech. Links</h3>
                                            </div>
                                        </div>
                                        <ul className="tech pt-4">

                                            <li><Link to={{ pathname: "https://www.codechef.com/users/shashank026" }} target="_blank" rel="noopener noreferrer"><img src={codechef} className="img1" alt="home img" /></Link></li>
                                            <li><Link to={{ pathname: "https://codeforces.com/profile/shashank.saraswat26" }} target="_blank"
                                                rel="noopener noreferrer"><img src={codeforces} className="img1" alt="home img" /></Link></li>
                                            <li><Link to={{ pathname: "https://www.hackerrank.com/C49_shashank?hr_r=1" }} target="_blank"
                                                rel="noopener noreferrer"><img src={hackerrank} className="img1" alt="home img" /></Link></li>
                                            <li><Link to={{ pathname: "https://leetcode.com/shashank026/" }} target="_blank" rel="noopener noreferrer"><img src={leetcode} className="img1" alt="home img" /></Link></li>
                                        </ul>
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
export default About;