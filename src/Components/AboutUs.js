import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import design from '../Images/ui-ux.png'
import webdevelopment from '../Images/web-development.png'
import product from '../Images/product-design.png'
import mobileapps from '../Images/mobile-app.png'
import seo from '../Images/seo.png'
import customer from '../Images/customer.jpg'

const AboutUs = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 0.2 });

    return (
        <>
            {/* <div className="container my-5"> */}
            <motion.div ref={ref}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }} className='top_margin'>
                <div className="text-center" >
                    <h1  >About Us</h1>
                </div>
                <br />

                <div>
                    <div className="row justify-content-center g-4">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="card h-100 text-center border_none">
                                <div className="card-body">
                                    <img src={design} className="img-fluid mb-3" alt="UI/UX Design" />
                                    <h5  >UI/UX Design</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="card h-100 text-center border_none">
                                <div className="card-body">
                                    <img src={webdevelopment} className="img-fluid mb-3" alt="Web Development" />
                                    <h5  >Web Development</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="card h-100 text-center border_none">
                                <div className="card-body">
                                    <img src={product} className="img-fluid mb-3" alt="Product Design" />
                                    <h5  >Product Design</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="card h-100 text-center border_none">
                                <div className="card-body">
                                    <img src={mobileapps} className="img-fluid mb-3" alt="Mobile Apps" />
                                    <h5  >Mobile Apps</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-2">
                            <div className="card h-100 text-center border_none">
                                <div className="card-body">
                                    <img src={seo} className="img-fluid mb-3" alt="SEO" />
                                    <h5>SEO</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
            <br />

            <section>
                <div className="container" style={{ marginTop: "50px" }}>
                    <div className="row">
                        <motion.div ref={ref1}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card aboutUs_cards" style={{ textAlign: "right" }}>
                                <div className="card-body">
                                    <h3 className="card-title">Welcome to AVO A <br /> Personal Porfolio <br /> Web Agency</h3><br />
                                    <p className="card-text" style={{ color: "grey" }}>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={ref2}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card border_none">
                                <div className="card-body">
                                    <img src={customer} className="img-fluid" alt="UI/UX Design" style={{ height: "350px", width: "400px" }} />
                                </div>
                            </div>
                        </motion.div>

                        <motion.div ref={ref3}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card border_none">
                                <div className="card-body">
                                    <p className="card-text" style={{ color: "grey", lineHeight: "30px" }}>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts. <br />
                                        Separated they live in Bookmarksgrove <br /> right at the coast of the Semantics, a large <br /> language ocean. A small river named <br /> Duden flows by their place and supplies it <br />
                                        with the necessary regelialia. It is a <br /> paradisematic country, in which roasted <br /> parts of sentences fly into your mouth.</p>
                                    <a href="#" className="btn btn-danger" style={{ fontWeight: "bold" }}>View All Projects</a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            <section>
                <div className="container" style={{ marginTop: "100px" }}>
                    <div className="row">
                        <motion.div ref={ref1}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card border_none">
                                <div className="card-body d-flex">
                                    <div className='numbers'>
                                        <h1 className=''>01</h1>
                                    </div>
                                    <div className='SEO'>
                                        <h4> Search Engine Optimization</h4>
                                        <p className="card-text" style={{ color: "grey" }}>Far far away, behind the word mountains</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            ref={ref2}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card border_none">
                                <div className="card-body d-flex">
                                    <div className='numbers'>
                                        <h1 className=''>02</h1>
                                    </div>
                                    <div className='SEO'>
                                        <h4> Search Engine Optimization</h4>
                                        <p className="card-text" style={{ color: "grey" }}>Far far away, behind the word mountains</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div ref={ref3}
                            initial={{ y: 100, opacity: 0 }}
                            animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="col-sm-4">
                            <div className="card border_none">
                                <div className="card-body d-flex">
                                    <div className='numbers'>
                                        <h1 className=''>03</h1>
                                    </div>
                                    <div className='SEO'>
                                        <h4> Search Engine Optimization</h4>
                                        <p className="card-text" style={{ color: "grey" }}>Far far away, behind the word mountains</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>

    )
}

export default AboutUs