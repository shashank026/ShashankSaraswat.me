import React from 'react'
import { NavLink } from 'react-router-dom';
import error from "../src/img/error colored.svg";

export const Error = () => {
    return (
        <>

            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row error">
                            <div className="col-md-6 pt-3 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center  flex-column">
                                    {/* <div className="content"> */}
                                    <div className="textBox">
                                        <h1>
                                            Sorry, The page you are looking for is does not exist.
                                        </h1>
                                        <div className="mt-3">
                                            <NavLink to="/" className="btn" role="button">
                                                Go Back
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 imgBox">
                                    {/* <div class="circle"></div> */}
                                    <img src={error} className="Bridge" alt="home img" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Error;