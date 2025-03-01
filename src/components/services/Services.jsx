import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import {BsFillBagDashFill} from 'react-icons/bs'


const Services = () => {
  return (
    <section id='services'>
      <h5>What Experience I Have</h5>
      <h2>My Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Designer</h3>
            <h3> <BsFillBagDashFill className='service__head-icon' /> Reach Process Outsourcing Pte Ltd. </h3>
            <h3>Oct 2023 – Aug 2024 (Full time-Remote)</h3>      
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed clean, organized responsive websites using HTML, CSS, JavaScript, & Bootstrap.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed Website link: <a href="https://www.reachaccountant.com/" target="_blank">Reach Accountant,</a> <a href="http://www.zeppay.com/en-us//" target="_blank">zeppay</a></p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Github Link: <a href="https://nabilax.github.io/reachaccountant/" target="_blank">Reach Accountant,</a> <a href="https://nabilax.github.io/zeppay-v1/" target="_blank">zeppay</a></p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Software Engineer (Intern)</h3>
            <h3> <BsFillBagDashFill className='service__head-icon' /> CRID-DAM Robotic Labs Ltd. </h3>
            <h3>Oct 2023 – Dec 2023 (Part time-Remote)</h3>      
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Developed project work flow process, requirements doc, functional spec.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>  Maintained comprehensive test plans and test cases.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p> Performed manual testing to ensure high-quality software releases: kambaiihealth.com.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Research & Development Executive</h3>
            <h3> <BsFillBagDashFill className='service__head-icon' /> EMACO Solutions Ltd. </h3>
            <h3>Jan 2019 - Mar 2021 (Full time)</h3>   
            <h3>Nov 2021 - Dec 2024 (Part time - Remote)</h3>    
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed product datasheet, catalogs, submittals.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed project proposal, web content: <a href="https://emacoglobal.com/all-solutions/emaco-clean-agent-fire-suppression-system/" target="_blank">emacoglobal.com</a> , social media content.</p>
            </li>
          </ul>
        </article>
        <article className="service">

        </article>
        <article className="service">
          <div className="service__head">
            <h3>Junior Project Manager</h3>
            <h3> <BsFillBagDashFill className='' /> suPPPort Ltd </h3>
            <h3>Mar 2022 – Aug 2022 (Full time - Remote) </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed project proposal, project report, project documentation </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed web content: <a href="https://suppport.org/fashion-revolution-week-2022-money-fashion-power/" target="_blank">suPPPort.org</a></p>
            </li>
            
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>WordPress Web Content Manager</h3>
            <h3> <BsFillBagDashFill className='' /> Writing School, BD </h3>
            <h3>Aug 2019 – Mar 2021 (Part time - Remote) </h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed website content: <a href="https://www.coderclick.com/how-to-remove-scratches-from-apple-watch-screen/3244/" target="_blank">coderclick.com</a>, <a href="https://minitipsx.com/" target="_blank">minitipsx.com</a>, <a href="https://outdoorkitsx.com/" target="_blank">outdoorkitsx.com.</a>  </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managed a group of content writers and graphic designers.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services