import React from 'react'
import './about.css'
import ME from '../../assets/me0.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { BiBook } from 'react-icons/bi'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useState } from 'react'

const About = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Skills</a>

            </article>

            <article className='about__card'>
              <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}>Experience</a>

            </article>

            <article className='about__card'>
              <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}>Projects</a>

            </article>
          </div>
          <p>I am a proactive and self-motivated professional with a strong passion for Software Quality Assurance (SQA). After switching to the IT field, my journey started in web design, where I spent a year developing front-end websites using HTML, CSS, and JavaScript. However, my curiosity about ensuring software quality led me to dive deeper into testing methodologies. </p>
          <p>
          I have 3 months of internship experience in manual testing, where I gained hands-on exposure to test case design, bug tracking, and ensuring software meets quality standards. Currently, I am pursuing a 3-month intensive SQA training focused on both manual and automation testing, equipping myself with tools like Selenium, JUnit, and Postman.
          </p>
          <p>
          Beyond technical expertise, I thrive in collaborative environments and understand the importance of clear communication in cross-functional teams. I am eager to contribute my skills and continue learning in an SQA role that challenges and grows my abilities.
          </p>
          <a href="https://youtu.be/wgTbYVTJ_Os" className='btn btn-primary'>Video Introduction</a>
        </div>
      </div>
    </section>
  )
}

export default About