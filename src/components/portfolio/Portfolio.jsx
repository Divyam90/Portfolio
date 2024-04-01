import React from 'react'
import './portfolio.css'
import { images } from '../../data'

const Portfolio = () => {
  return (
      <section id="works">
          <h2 className="workstitle">My Portfolio</h2>
              <span className="workDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio aliquam at, alias est quisquam similique sunt porro placeat iure obcaecati!</span>
              <div className="worksImgs">
                  {images.map((index,i)=>(
                      <div className="card">
                      <div className="card-body"></div>

                      <img className="worksImg" key={i} src={index.img} alt="" />
                      </div>
                 ) )}
              </div>
              <button className="workbtn">See more</button>
      </section>
  )
}

export default Portfolio