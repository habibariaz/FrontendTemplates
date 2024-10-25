import React from 'react'
import '../Style/style.css'

const Footer = () => {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted">
                <div className='footer_style'>
                    <section>
                        <div className="container" style={{ textAlign: "left" }}>
                            {/* <!-- Grid row --> */}
                            <div className="row mt-3">
                                {/* First Column */}
                                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                                    <h4 className="text-uppercase fw-bold mb-4 footer_heading">
                                        avo
                                    </h4>
                                    <p style={{ lineHeight: "35px" }}>
                                        Far far away, behind <br /> the word mountains, <br /> far from the countries.
                                    </p>
                                </div>
                                {/* First Column End */}

                                {/* Second Column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* <!-- Links --> */}
                                    <h4 className="text-uppercase fw-bold mb-4 footer_heading">
                                        Community
                                    </h4>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i> <a href="/Contact" className="text-reset">&nbsp;Project</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i> <a href="/Contact" className="text-reset">&nbsp;Team</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Reviews</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;FAQs</a>
                                    </p>
                                </div>
                                {/* Second Column End*/}


                                {/* Third Column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h4 className="text-uppercase fw-bold mb-4 footer_heading">
                                        About Us
                                    </h4>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Our Story</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Meet The Team</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Careers</a>
                                    </p>
                                </div>
                                {/* Third Column End*/}



                                {/* Forth Column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    <h4 className="text-uppercase fw-bold mb-4 footer_heading">
                                        Company
                                    </h4>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;About Us</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Press</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Contact</a>
                                    </p>
                                    <p>
                                        <i className="fa fa-chevron-right" aria-hidden="true"></i><a href="/Contact" className="text-reset">&nbsp;Careers</a>
                                    </p>
                                </div>
                                {/* Forth Colomn End */}

                                {/* Fifth Column */}
                                <div className="col-md-3 col-lg-2 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* <!-- Links --> */}
                                    <h4 className="text-uppercase fw-bold mb-4 footer_heading">Questions?</h4>
                                    <p>
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        &nbsp;&nbsp;&nbsp;203 Fake St. Mountain View, San Francisco, California, USA</p>
                                    <p>
                                        <i className="fa fa-phone" aria-hidden="true"></i>
                                        &nbsp;&nbsp;&nbsp;+2 392 3929 210
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        &nbsp;info@yourdomain.com
                                    </p>
                                </div>
                                {/* Fifth Column End */}
                            </div>
                        </div>
                    </section>

                    {/* Social Media Icons */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >
                        <div style={{ paddingLeft: "160px", marginBottom: "100px" }}>
                            <a href="" className="me-4 text-reset social_media_icon" style={{ textDecoration: "none" }}>
                                <i className="fa fa-facebook" style={{ color: "white" }} aria-hidden="true"></i>
                            </a>
                            <a href="" className="me-4 text-reset social_media_icon" style={{ textDecoration: "none" }}>
                                <i className="fa fa-twitter" aria-hidden="true" style={{ color: "white" }} ></i>
                            </a>
                            <a href="" className="me-4 text-reset social_media_icon" style={{ textDecoration: "none" }}>
                                <i className="fa fa-instagram" aria-hidden="true" style={{ color: "white" }}></i>
                            </a>
                        </div>
                    </section>

                    {/* <!-- Copyright --> */}
                    <section>
                        <div className="text-center p-4" style={{ height: "150px" }}>
                            Copyright ©2024 All rights reserved | This template is made with &nbsp;
                            <span><i className="fa fa-heart" aria-hidden="true"></i></span>&nbsp; by <span style={{ color: "red" }}>&nbsp;Colorlib.</span>
                        </div>
                    </section>
                </div>
            </footer >
        </>
    )
}

export default Footer