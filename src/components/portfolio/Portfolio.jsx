import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  const data = [
    {
      id: 1,
      img: IMG1,
      title: 'Chart template & infographics in Figma'      
    },
    {
      id: 2,
      img: IMG2,
      title: 'Maintaining task and tracking progress'      
    },
    {
      id: 3,
      img: IMG3,
      title: 'Figma dashboard UI kit for data web design app'      
    },
    {
      id: 4,
      img: IMG4,
      title: 'Mobile chat app in dark mode'      
    },
    {
      id: 5,
      img: IMG5,
      title: 'Data scaince monitoring'      
    },
    {
      id: 6,
      img: IMG6,
      title: 'Figma UI kit for design app'      
    },
  ]
  return (
    <section id='portfolion'>
      <h5>My recent Work</h5>
      <h2>Portfolion</h2>

      <div className="container portfolio__container">
        {data.map((val, index) => (
            <article className="portfolio__item" key={index}>
              <div className="portfoion__item-image">
                <img src={val.img} alt="" />
              </div>
              <h3>{val.title}</h3>
              <div className="portfolio__item-cta">
                <a href="#tes" className='btn'>Github</a>
                <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
              </div>
            </article>
          ) )
        }
        {/* <article className="portfolio__item">
          <div className="portfoion__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#tes" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfoion__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#tes" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfoion__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#tes" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfoion__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#tes" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfoion__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="#tes" className='btn'>Github</a>
            <a href="https://dribbble.com/shots/18266409-Fragment" className='btn btn-primary'>Live Demo</a>
          </div>
        </article> */}
      </div>
    </section>
  )
}

export default Portfolio