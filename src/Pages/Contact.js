import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import address from '../Images/map.png'
import phone from '../Images/phone.png'
import email from '../Images/email.png'
import website from '../Images/website.png'
import Footer from '../Components/Footer'
import '../Style/style.css'
import { motion, useInView } from 'framer-motion'

const Contact = () => {

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

  return (
    <>
      {/* Navbar or Image Section*/}
      <section>
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
                &nbsp;&nbsp;Contact <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
              </p>
              <h1 style={{ color: "white", fontSize: "50px" }}>Contact</h1>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Heading Section */}
      <section>
        <div className="container-fluid top_margin">
          <motion.div ref={ref1}
            initial={{ y: 100, opacity: 0 }}
            animate={isInView1 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className='text-center'>
            <span style={{ color: "red", fontSize: "20px" }}>Contact Us</span>
            <h1><b>Have a Project?</b></h1><br />
            <p className='grey'>Far far away, behind the word mountains, far from the countries Vokalia and <br />
              Consonantia</p>
          </motion.div>
        </div> <br /><br />

        {/* Input Form Start */}
        <div className="container-fluid">
          <div class="row">
            <div class="col-sm-7 mb-3 mb-sm-0">
              <div class="card px-5 border_none">
                <div class="card-body" style={{ height: "515px", backgroundColor: "#F3F3F3" }}>
                  <form style={{ paddingTop: "50px" }}>
                    <div className='col-md-6 form-group'>
                      <label>Name</label>
                      <input className="form-control" type="text" name="" id="" /><br />
                    </div>

                    <div className='col-md-6 form-group'>
                      <label>Phone</label>
                      <input className="form-control" type="text" name="" id="" /><br />
                    </div>

                    <div className='col-md-12 form-group'>
                      <label>Email</label><br />
                      <input className="form-control" type="text" name="" id="" /><br />
                    </div>

                    <div className="col-md-12 form-group">
                      <label>Write A Message</label><br />
                      <textarea className="form-control" name="" id="" rows={4}></textarea><br />
                    </div><br />

                    <div className="col-md-6 form-group">
                      <button class="btn btn-danger">Send Message</button><br />

                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* Input Form End*/}

            {/* Information Cards Start */}
            <div class="col-sm-5">
              <div class="card border_none">
                <div class="card-body">
                  <div class="row">

                    {/* Card 1 */}
                    <motion.div ref={ref2}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isInView2 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} class="col-sm-12">
                      <div class="card border_none">
                        <div class="card-body ">
                          <div class="icon d-flex align-items-right mb-4">
                            <div className='right'>
                              <img src={address} class="img-fluid contact_round_img" alt="Responsive image" />
                            </div>
                            <div class="position ps-3">
                              <h4 class="mb-0">Address:</h4><br />
                              <span style={{ color: "grey", fontSize: "15px" }}>198 West 21th Street, Suite 721 <br />
                                New York NY 10016</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 2 */}
                    <motion.div ref={ref3}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isInView3 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} class="col-sm-12">
                      <div class="card border_none">
                        <div class="card-body">
                          <div class="icon d-flex align-items-right mb-4">
                            <div className='right'>
                              <img src={phone} class="img-fluid contact_round_img" alt="Responsive image" />
                            </div>
                            <div class="position ps-3">
                              <h4 class="mb-0">Phone:</h4><br />
                              <a className="a text-decoration-none text-danger" href="tel://1234567920" style={{ color: "red", fontSize: "15px" }}>+ 1235 2355 98</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 3 */}
                    <motion.div ref={ref4}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isInView4 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} class="col-sm-12">
                      <div class="card border_none">
                        <div class="card-body">
                          <div class="icon d-flex align-items-right mb-4">
                            <div className='right'>
                              <img src={email} class="img-fluid contact_round_img" alt="Responsive image" />
                            </div>
                            <div class="position ps-3">
                              <h4 class="mb-0">Email:</h4><br />
                              <a className="a text-decoration-none text-danger" href="mailto:info@yoursite.com" style={{ color: "red", fontSize: "15px" }}>info@yoursite.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Card 4 */}
                    <motion.div ref={ref5}
                      initial={{ y: 100, opacity: 0 }}
                      animate={isInView5 ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeOut", delay: 0 }} class="col-sm-12">
                      <div class="card border_none">
                        <div class="card-body">
                          <div class="icon d-flex align-items-right mb-4">
                            <div className='right'>
                              <img src={website} class="img-fluid contact_round_img" alt="Responsive image" />
                            </div>
                            <div class="position ps-3">
                              <h4 class="mb-0">Website:</h4><br />
                              <a className="a text-decoration-none text-danger" href="/" style={{ color: "red", fontSize: "15px" }}>yoursite.com</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div><br /><br />
      </section>

      {/* Footer  */}
      <section >
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

export default Contact