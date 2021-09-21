import React from 'react'
import { Link } from 'react-router-dom';
import datum from "../src/img/pic2.png";
import garden from "../src/img/pic3.png";
import blog from "../src/img/pic4.png";

export const Projects = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row ">
                        <div className="col-10 mx-auto">

                        <div className="top pt-5" id={'projects'}>
                                    <div className="App">
                                        <h3>
                                            Projects
                                        </h3>
                                    </div>
                                    <div className="row pt-5 me">


                                        <div className="card" >
                                            <img src={datum} className="card-img-top" alt="event img" />
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Datum Website</b></h3>
                                                <p className="card-text">Website for Datum Club GLA University. Datum is a Data Science club of GLA University Mathura. I
                                                    created
                                                    a website so the club members easily host there events online and if any one wants to join Datum so
                                                    registration form is appear for them.</p>
                                                <div className="my-1">
                                                    <Link to={{ pathname: "https://datum-club-f96e7.firebaseapp.com" }} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
                                                        Live Website
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={garden} className="card-img-top" alt="event img" />
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Garden Buddies</b></h3>
                                                <p className="card-text">This is my first MLH Hackathon project. This is basically a website which help people how to plant
                                                    and
                                                    grow tree in your own farm and garden. Website have specific Timeline in which you're can easy watch
                                                    their plant growth.</p>
                                                <div className="my-1">
                                                    <Link to={{ pathname: "https://github.com/Lakshay-G/GradenBuddies" }} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
                                                        Github Repo
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card" >
                                            <img src={blog} className="card-img-top" alt="event img" />
                                            <div className="card-body">
                                                <h3 className="card-title"><b>Blog Website</b></h3>
                                                <p className="card-text">This webs develpement project and its have special space in my heart. This blog website i create when
                                                    i
                                                    start learing web development. i using HTML and CSS only for now.</p>
                                                <div className="my-1">
                                                    <Link to={{ pathname: "https://github.com/shashank026/Blog_website" }} target="_blank" rel="noopener noreferrer" className="btn btn-primary" role="button">
                                                        Github Repo
                                                    </Link>
                                                </div>
                                            </div>
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
export default Projects;