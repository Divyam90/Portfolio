import React from 'react'
import './about.css'
import aboutData from '../../data'
import './about.css'

const About = () => {
  return (
      <section id="skills">
          <span className="skillTitle"> What I do?</span>
          <span className="skillDesc">As a full stack developer, I excel in both frontend and backend development, with proficiency in a wide range of technologies and frameworks. I specialize in building dynamic and scalable web applications from concept to deployment. With expertise in frontend technologies such as HTML, CSS, JavaScript, and React.js, coupled with backend skills in Node.js, Express.js, and MongoDB, I create seamless user experiences and robust server-side solutions. </span>
          {aboutData.map((index,i)=>(
               <div className="skillBars" key={i}>
               <div className="skillBar">
                   <img className="skillBarImg" src={index.img} alt="" />
                   <div className="skillBarText">
                       <h1 className="heading">{index.title}</h1>
                       <p className="para">{index.desc}</p>
                   </div>
               </div>
           </div>
          ))}
         
      </section>

    )
}  

export default About