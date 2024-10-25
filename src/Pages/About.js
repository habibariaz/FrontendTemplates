import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import AboutUs from '../Components/AboutUs'
import { motion, useInView } from 'framer-motion'
import '../Style/style.css'
import team1 from '../Images/team1.jpg'
import team2 from '../Images/team2.jpg'
import team3 from '../Images/team3.jpg'
import team4 from '../Images/team4.jpg'
import team5 from '../Images/team5.jpg'
import team6 from '../Images/team6.jpg'
import team7 from '../Images/team7.jpg'
import team8 from '../Images/team8.jpg'
import Clients from '../Components/Clients'
import Footer from '../Components/Footer'
import Image from '../Components/Image'

const About = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const ref7 = useRef(null);
  const isInView7 = useInView(ref7, { once: true, amount: 0.2 });

  const ref8 = useRef(null);
  const isInView8 = useInView(ref8, { once: true, amount: 0.2 });

  const ref9 = useRef(null);
  const isInView9 = useInView(ref9, { once: true, amount: 0.2 });

  const ref10 = useRef(null);
  const isInView10 = useInView(ref10, { once: true, amount: 0.2 });

  const ref11 = useRef(null);
  const isInView11 = useInView(ref11, { once: true, amount: 0.2 });

  return (
    <>
      {/* Navbar or Image Section*/}
      < section >
        <div className="angled-section4" id="home_img" >
          <Navbar />
          <div className="home_mainImgText">
            <motion.div ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className='main_img_textpadding'>
              <p className='rendering_text'>
                <span><a href="/" className='a text-decoration-none'>Home &nbsp;&nbsp;</a></span>
                <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
                &nbsp;&nbsp;About <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
              </p>
              <h1 style={{ color: "white", fontSize: "50px" }}>About</h1>
            </motion.div>
          </div>
        </div>
      </section >

      {/* Content */}
      <section>
        <AboutUs />
      </section>

      {/* Image */}
      <section>
        <div style={{ marginTop: "100px" }}>
          <Image />
        </div>
      </section>

      <section className='grey_background_card'>
        <div className="grey_background_card ">
          <div className='home-ourworktop-angled-section'>
            <div class="angle-left"></div>
            <div class="angle-right"></div>
          </div>
          <div>
            <h1 className="text-center">
              EXPERT TEAM
            </h1>
          </div>
          <div className="container">
            {/* First Row Of Cards */}
            <motion.div ref={ref2}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="row grey_background_card" style={{ marginTop: "100px" }}>

              {/* Card 1 */}
              <motion.div ref={ref3}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team1} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>JOHN WILSON</h3>
                      <span style={{ color: "red" }}>Web Designer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div ref={ref4}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team2} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>ROBERT WILLS</h3>
                      <span style={{ color: "red" }}>Web Developer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div ref={ref5}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3 ">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team3} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>Mike Smith</h3>
                      <span style={{ color: "red" }}>Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div ref={ref6}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView6 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team5} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>Adrian Henderson</h3>
                      <span style={{ color: "red" }}>System Analyst</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div><br /><br />
            {/* First Row Of Cards End */}

            {/* Second Row Of Cards */}
            <motion.div ref={ref7}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView7 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="row grey_background_card" >
              {/* Card 1 */}
              <motion.div ref={ref8}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView8 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team6} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>John Wilson</h3>
                      <span style={{ color: "red" }}>Web Programmer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div ref={ref9}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView9 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team7} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>Robert Wills</h3>
                      <span style={{ color: "red" }}>Web Designer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div ref={ref10}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView10 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team4} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>Mike Smith</h3>
                      <span style={{ color: "red" }}>Graphic Designer</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div ref={ref11}
                initial={{ y: 100, opacity: 0 }}
                animate={isInView11 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} class="col-sm-3">
                <div class="card border_none team grey_background_card">
                  <div class="card-body" >
                    {/* Image */}
                    <img src={team8} class="img-fluid" alt="Responsive image" />
                    {/* Social Media Icons */}
                    <div class="overlay align-items-center">
                      <ul>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-facebook icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="me-3 text-white"><i class="fa fa-twitter icons-clr"></i></a>
                        </li>
                        <li className='icons_list'>
                          <a href="/About" class="text-white" style={{ marginLeft: "10px" }}><i class="fa fa-instagram icons-clr"></i></a>
                        </li>
                      </ul>
                    </div>
                    <div >
                      <h3>Adrian Henderson</h3>
                      <span style={{ color: "red" }}>SEO</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Second Row of Cards End */}
          </div>
          <div className='home-ourworkbottom-angled-section'>
            <div class="home-ourworkbottom-left-angled-section"></div>
            <div class="home-ourworkbottom-right-angled-section"></div>
          </div>
        </div>
      </section>


      <section>

        <div className="container">
          <Clients />
        </div>
      </section>

      <section>
        <div className='footer-angled-section'>
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

export default About