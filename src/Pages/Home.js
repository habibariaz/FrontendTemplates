import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../Components/Navbar'
import { motion, useInView } from 'framer-motion'
import { useSpring, animated } from "react-spring";
import AboutUs from '../Components/AboutUs';
import OurWork from '../Components/OurWork';
import Clients from '../Components/Clients'
import Image from '../Components/Image';
import OurBlogs from '../Components/OurBlogs';
import Footer from '../Components/Footer';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const [props, setProps] = useSpring(() => ({
        number: 50,
        config: { mass: 1, tension: 20, friction: 10 },
    }));

    const [props2, setProps2] = useSpring(() => ({
        number: 1,
        config: { mass: 1, tension: 20, friction: 10 },
    }));

    const sectionFade = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 1500 }, // Fade duration for 1.5 seconds
    });

    const fadePropsNext = useSpring({
        opacity: currentSlide === 1 ? 1 : 0,
        config: { duration: 1000 }, // Fading in for the second slide
    });

    useEffect(() => {
        if (currentSlide === 0) {
            setProps({ number: 400 });
        } else if (currentSlide === 1) {
            setProps2({ number: 21 });
        }
    }, [currentSlide, setProps, setProps2]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    return (
        <>
            <section>
                <animated.div style={sectionFade} >
                    <div>
                        <div className="nav_home">
                            <Navbar />
                        </div>

                        <div className='nav_home_text'>
                            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" >
                                <ol class="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active" className={currentSlide === 0 ? 'active' : ''}></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className={currentSlide === 1 ? 'active' : ''}></li>
                                </ol>

                                <div class="carousel-inner home_carousel angled-section4" id="home_img">
                                    <div className={`carousel-item ${currentSlide === 0 ? 'active' : ''} main-image-carousel`}>
                                        <div className="row">
                                            <div class="col-sm-6 mb-3 mb-sm-0 card-container order-2 order-md-1">
                                                <div class="card cards-background home_mainImgText" >
                                                    <div class="card-body text_left" >
                                                        <motion.div initial={{ y: 50 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ duration: "1", delay: "0" }}>
                                                            <h3
                                                            >We Create Modern <br /> & Minimal Website</h3>
                                                            <br />
                                                            <p>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia.</p>
                                                            <p class="mb-0"><a href="#" class="btn btn-primary py-md-3 py-2 px-2 px-md-4">Explore Projects</a></p>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 card-container2 order-1 order-md-2">
                                                <div class="card cards-background home_mainImgText">
                                                    <div class="card-body text_right">
                                                        <motion.div initial={{ y: 50 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ duration: "1", delay: "0" }}>
                                                            <h3><animated.div>
                                                                {props.number.to((n) => n.toFixed(0))}
                                                            </animated.div></h3>

                                                            <h5>More than a <br />
                                                                hundred successful <br />
                                                                projects</h5>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`carousel-item ${currentSlide === 1 ? 'active' : ''}`} style={fadePropsNext}>
                                        <div className="row">
                                            <div class="col-sm-6 mb-3 mb-sm-0 card-container order-2 order-md-1">
                                                <div class="card cards-background home_mainImgText" >
                                                    <div class="card-body text_left" >
                                                        <motion.div initial={{ y: 50 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ duration: "1", delay: "0" }}>
                                                            <h3
                                                            >We Create Modern <br /> & Minimal Website</h3>
                                                            <br />
                                                            <p>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia.</p>
                                                            <p class="mb-0"><a href="#" class="btn btn-primary py-md-3 py-2 px-2 px-md-4">Explore Projects</a></p>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col-12 col-md-6 card-container2 order-1 order-md-2">
                                                <div class="card cards-background home_mainImgText">
                                                    <div class="card-body text_right">
                                                        <motion.div initial={{ y: 50 }}
                                                            animate={{ y: 0 }}
                                                            transition={{ duration: "1", delay: "0" }}>
                                                            <h3><animated.div>
                                                                {props2.number.to((n) => n.toFixed(0))}
                                                            </animated.div></h3>

                                                            <h5>Years <br />
                                                                of Experience
                                                            </h5>
                                                        </motion.div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </section >

            <section>
                <div className='margin'>
                    <AboutUs />
                </div>
            </section>

            <section>
                <div>
                    <div className='home-ourworktop-angled-section'>
                        <div class="angle-left"></div>
                        <div class="angle-right"></div>
                    </div>
                    <OurWork />
                    <div className='home-ourworkbottom-angled-section'>
                        <div class="home-ourworkbottom-left-angled-section"></div>
                        <div class="home-ourworkbottom-right-angled-section"></div>
                    </div>
                </div>
            </section>

            <section>
                <div >
                    <Clients />
                </div>
            </section>

            <section>
                <Image />
            </section>

            <section className='grey_background_card'>
                <motion.div ref={ref}
                    initial={{ y: 100, opacity: 0 }}
                    animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="grey_background_card ">
                    {/* <div className='home_work_angled-section6'></div> */}
                    <div className='home-ourworktop-angled-section'>
                        <div class="angle-left"></div>
                        <div class="angle-right"></div>
                    </div>
                    <h1 className="text-center recent_blogs_top_margin">
                        RECENT BLOG
                    </h1>

                    <div className='container grey_background_card'>
                        <OurBlogs />
                    </div>
                </motion.div>
            </section>


            <section>
                <div className='home-footer-angled-section'>
                    <div class="angle-left"></div>
                    <div class="angle-right"></div>
                </div>
                <div>
                    <Footer />
                </div>
            </section>
        </>
    )
}

export default Home