import React, { useRef } from 'react'
import Navbar from '../Components/Navbar'
import '../Style/style.css'
import { motion, useInView } from 'framer-motion'
import Footer from '../Components/Footer'
import OurBlogs from '../Components/OurBlogs'


const Blog = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <section>
        <div className="work_angled-section" id="home_img" >
          <Navbar />
          <div className="home_mainImgText ">
            <motion.div ref={ref}
              initial={{ y: 100, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 100, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0 }} className='main_img_textpadding'>
              <p className='rendering_text'>
                <span><a href="/" className='a text-decoration-none'>Home &nbsp;&nbsp;</a></span>
                <i  className="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
                &nbsp;&nbsp;Blog <i  className="fa fa-chevron-right" aria-hidden="true" style={{ color: "red" }}></i>
              </p>
              <h1 style={{ color: "white", fontSize: "50px" }}>Blog</h1>
            </motion.div>
          </div>
        </div>
      </section>

      <section >
        <div className="grey_background_card ourblogs_screenmargin">
          <OurBlogs />
        </div>
      </section>

      <section>
        <div className='work-footer-angled-section'>
          <div  className="work-footer-angle-left"></div>
          <div  className="work-footer-angle-right"></div>
        </div>
        <div>
          <Footer />
        </div>
      </section>
    </>
  )
}

export default Blog