import React, { useRef } from 'react'
import team1 from '../Images/team1.jpg'
import team2 from '../Images/team2.jpg'
import team3 from '../Images/team3.jpg'
import { motion, useInView } from 'framer-motion'


const Clients = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

    return (
        <>

            <div className="container">
                <motion.div ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} style={{ height: "40px" }}>
                    <h1 className="text-center">
                        Clients Says About Us?
                    </h1>
                </motion.div>

                {/* Slider */}
                <motion.div ref={ref2}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} style={{ marginTop: "100px" }}>
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"></li>
                            <li className="slider-list" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
                            <li className="slider-list" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
                        </ol>

                        <div class="carousel-inner">
                            {/* <!-- First Slide --> */}
                            <div class="carousel-item active">
                                <div class="row home_clients">
                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Second Slide --> */}
                            <div class="carousel-item">
                                <div class="row home_clients">
                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Third Slide */}
                            <div class="carousel-item">
                                <div class="row home_clients" >
                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text" >
                                            <div class="card-body" >
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team1} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team2} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="card card_clr border_none clients_card_text">
                                            <div class="card-body">
                                                <p>Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live <br /> the blind texts.</p>
                                                <div className="row">
                                                    <div className="col-sm-12">
                                                        <div className="icon d-flex align-items-center mb-4">
                                                            <div>
                                                                <img src={team3} className="img-fluid round_img_Work" alt=" " />
                                                            </div>
                                                            <div className="client-text">
                                                                <h4 className="mb-0" style={{ color: "black" }}>Roger Scott</h4>
                                                                <span style={{ color: "grey" }}>Marketing Manager</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>

                    </div>
                </motion.div><br /><br /><br />
            </div>


        </>
    )
}

export default Clients