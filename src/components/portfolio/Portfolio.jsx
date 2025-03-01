import React from 'react'
import './portfolio.css'
import IMG3 from '../../assets/aj2.png'
import IMG4 from '../../assets/aa3.png'
import IMG5 from '../../assets/al2.PNG'
import IMG6 from '../../assets/cont2.PNG'
import IMG1 from '../../assets/aa1.png'
import IMG2 from '../../assets/aa2.png'
import IMG7 from '../../assets/ac2.png'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Reach Accountant',
    para: 'The Only Accounting Software Which Can Run Your Business End-to-end',
    soft: '#HTML #Bootstrap #JavaScript #PHP #Figma',
    github: '',
    demo: 'https://www.reachaccountant.com/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Zeppay',
    para: 'Automated Patient Payment Solutions Can Save You Time & Money ',
    soft: '#HTML #Bootstrap #JavaScript #PHP #Figma',
    github: 'https://github.com',
    demo: 'http://www.zeppay.com/en-us/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'ABC Jobs Portal Project',
    para: 'A website application that allows user find job and apply for job opportuinites',
    soft: '#Bootstrap #SpringMVC #JSP #MySQL',
    github: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG4,
    title: 'Kambaii Health',
    para: 'Kambaii Health provided comprehensive healthcare services',
    soft: '#Manual Testing #Test Case #Bug Report #Bug Trucking',
    github: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG7,
    title: 'ABC Cars Portal Project',
    para: 'A website application that offers a convenient marketplace for buying and selling used cars',
    soft: '#Bootstrap #Spring Boot #Spring Security #JSP #MySQL',
    github: '',
    demo: ''
  },
  {
    id: 6,
    image: IMG6,
    title: 'Wordpress Content Management',
    para: 'Website name: www.coderclick.com',
    soft: '#keyword research  #content management #SEO',
    github: '',
    demo: ''
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Work</h5>
      <h2>My Project</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, para, soft, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              <h3>{title}</h3>
              <h5>{para}</h5>
              <h4 style={{color: 'steelblue'}}>{soft}</h4>
              </div>
              {/* <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div> */}
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio