import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import OurWork from '../Components/OurWork'
import Footer from '../Components/Footer'
import '../Style/style.css'
import { motion, useInView } from 'framer-motion'



const Work = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <section>
        <div className="work_angled-section" id="home_img" >
          <Navbar />
          <div className="home_mainImgText">
            <motion.div ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className='main_img_textpadding'>
              <p className='rendering_text'>
                <span><a href="/" className='a text-decoration-none'>Home &nbsp;&nbsp;</a></span>
                <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
                &nbsp;&nbsp;Work <i class="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
              </p>
              <h1 style={{ color: "white", fontSize: "50px" }}>Work</h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className='work_margin'>
        <div className='grey_background_card'>
          <OurWork />
        </div>
      </section>

      {/* Page Numbers */}
      <section className='grey_background_card' style={{ paddingBottom: "100px" }}>
        <div className='container'>
          <ul className='align-items-center justify-content-center d-flex list-type'>
            <li className='blog-list'><a className='text-decoration-none a-blog' href="#">&lt;</a></li>
            <li class="active blog-list" style={{ backgroundColor: "red", color: "white" }}><span>1</span></li>
            <li className='blog-list'><a href="#" a-blog>2</a></li>
            <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>3</a></li>
            <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>4</a></li>
            <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>5</a></li>
            <li className='blog-list'><a href="#" className='text-decoration-none a-blog'>&gt;</a></li>
          </ul>
        </div>
      </section>


      {/* Footer */}
      <section>
        <div className='work-footer-angled-section'>
          <div class="work-footer-angle-left"></div>
          <div class="work-footer-angle-right"></div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Work