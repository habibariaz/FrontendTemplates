import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'
import tape from '../Images/tape.jpg'
import person from '../Images/person.jpg'
import person1 from '../Images/person1.jpg'
import person2 from '../Images/person2.jpg'
import person3 from '../Images/person3.jpg'
import clock from '../Images/clock.jpg'
import developer from '../Images/ui-ux developer.jpg'
import handwriting from '../Images/handwriting.jpg'
import spiral from '../Images/spiral.jpg'
import keyboard from '../Images/keyboard.jpg'

const OurWork = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const ref1 = useRef(null);
    const isInView1 = useInView(ref1, { once: true, amount: 0.2 });

    const ref2 = useRef(null);
    const isInView2 = useInView(ref2, { once: true, amount: 0.2 });

    const ref3 = useRef(null);
    const isInView3 = useInView(ref3, { once: true, amount: 0.2 });

    const ref4 = useRef(null);
    const isInView4 = useInView(ref4, { once: true, amount: 0.2 });

    const ref5 = useRef(null);
    const isInView5 = useInView(ref5, { once: true, amount: 0.2 });

    const ref6 = useRef(null);
    const isInView6 = useInView(ref6, { once: true, amount: 0.2 });

    return (
        <>
            <motion.div ref={ref1}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className="container-fluid grey_background_card">
                {/* Heading Text */}
                <h1 className="text-center " style={{ paddingBottom: "100px", paddingTop: "100px" }}>
                    <b>Our Works</b>
                </h1>
            </motion.div>

            {/* First Card  */}
            {/* Right Side Image with Left Text */}
            <div className="container-fluid grey_background_card"  >
                <div className="row ">
                    {/* Image Card */}
                    <div
                        className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={tape} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                    </div>

                    {/* Text Card */}
                    <motion.div
                        ref={ref}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        className="col-sm-6" style={{ marginTop: "50px" }}>
                        <div className="card border_none grey_background_card ">
                            <div className="card-body">
                                <span>Web Design</span>
                                <h2>
                                    Cassette tape
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-center mb-4">
                                            <div>
                                                <img src={person} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div >

            {/* Second Card  */}
            {/* Left Side Image with Right Text */}
            <div className="container-fluid  grey_background_card" >
                <div className="row">
                    {/* Text Card */}
                    <motion.div
                        ref={ref2}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card" style={{ textAlign: "right", marginBottom: "150px", marginTop: "40px" }}>
                            <div className="card-body">
                                <span>Application</span>
                                <h2>
                                    Miniwall Clock
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                <div className="row justify-content-end">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-right mb-4">
                                            <div className='right'>
                                                <img src={person1} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Card */}
                    <div
                        className="col-sm-6" style={{ marginTop: "-50px" }}>
                        <div className="card border_none grey_background_card">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={clock} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Third Card  */}
            {/* Right Side Image with Left Text */}
            <div className="container-fluid  grey_background_card" >
                <div className="row">
                    {/* Image Card */}
                    <div
                        className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card" style={{ marginTop: "-20px" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={developer} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                    </div>
                    {/* Text Card */}
                    <motion.div
                        ref={ref3}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, delay: 0, ease: "easeOut" }}
                        className="col-sm-6" style={{ marginTop: "50px" }}>
                        <div className="card border_none grey_background_card">
                            <div className="card-body">
                                <span>UI/UX Design</span>
                                <h2>
                                    Avo Portfolio Agency
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-center mb-4">
                                            <div>
                                                <img src={person3} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div >

            {/* Forth Card  */}
            {/* Left Side Image with Right Text */}
            <div className="container-fluid grey_background_card" >
                <div className="row">
                    {/* Text Card */}
                    <motion.div
                        ref={ref4}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card" style={{ textAlign: "right", marginBottom: "150px", marginTop: "40px" }}>

                            <div className="card-body">
                                <span>Web Development</span>
                                <h2>
                                    Hand Writing
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                {/* Image Card */}
                                <div className="row justify-content-end">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-right mb-4">
                                            <div className='right'>
                                                <img src={person} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    <div className="col-sm-6" style={{ marginTop: "-50px" }}>
                        <div className="card border_none grey_background_card">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={handwriting} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fifth Card  */}
            {/* Right Side Image with Left Text */}
            <div className="container-fluid  grey_background_card" >
                <div className="row">
                    {/* Image Card */}
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card" style={{ marginTop: "-20px" }}>
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={keyboard} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                    </div>

                    {/* Text Card */}
                    <motion.div
                        ref={ref5}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.2, delay: 1, ease: "easeOut" }}
                        className="col-sm-6" style={{ marginTop: "50px" }}>
                        <div className="card border_none grey_background_card">
                            <div className="card-body">
                                <span>Illustration</span>
                                <h2>
                                    Keyboard
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                <div className="row">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-center mb-4">
                                            <div>
                                                <img src={person1} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div >
            </div >

            {/* Sixth Card  */}
            {/* Left Side Image with Right Text */}
            <div className="container-fluid  grey_background_card" >
                <div className="row">
                    {/* Text Card */}
                    <motion.div
                        ref={ref6}
                        initial={{ y: 100, opacity: 0 }}
                        animate={isInView6 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
                        className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card border_none grey_background_card" style={{ textAlign: "right", marginBottom: "150px", marginTop: "40px" }}>
                            <div className="card-body">
                                <span>Web Development</span>
                                <h2>
                                    Spiral
                                </h2>
                                <p style={{ color: "grey", lineHeight: "25px" }}> Far far away, behind the word mountains, far from the countries <br />
                                    Vokalia and Consonantia, there live the blind texts.  </p>
                                <br />

                                <div className="row justify-content-end">
                                    <div className="col-sm-5">
                                        <div className="icon d-flex align-items-right mb-4">
                                            <div className='right'>
                                                <img src={person2} className="img-fluid round_img_Work" alt=" " />
                                            </div>
                                            <div className="position ps-3">
                                                <h4 className="mb-0">Jamie Jonson</h4>
                                                <span style={{ color: "grey" }}>avo.com</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button className='btn btn-light'>
                                    View Portfolio
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    {/* Image Card */}
                    <div className="col-sm-6" style={{ marginTop: "-50px", backgroundColor: "#F3F3F3" }}>
                        <div className="card border_none grey_background_card">
                            <div className="card-body d-flex justify-content-center align-items-center">
                                <img src={spiral} className="img-fluid tape-img" alt=" " />
                            </div>
                        </div>
                        <br /><br />
                    </div>
                </div>
            </div>




        </>
    )
}

export default OurWork