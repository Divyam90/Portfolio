import React from 'react'
import './intro.css'
import image from '../../assets/image2.png'
import { LuContact2 } from "react-icons/lu";
import { Link } from 'react-scroll'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import resume from '/Resume.pdf'
const Intro = () => {
    const [text] = useTypewriter({
        words:['Web Developer' , 'Designer' , 'Frontend' , 'Backend' , 'MERN Stack'],
        loop:{},
        typeSpeed:80,
        deleteSpeed:40
    })
  return (
      <section id="intro">
          <div className="introContent">
              <span className="hello">Hello,</span>
              <span className="introText">I'm <span className="introName"> Divyam Kalra</span>
              <br/>
              <span>{text}.</span>
              </span>
              <p className="introPara">I am a Skilled and passionate web developer with experience in creating visually <br/> appealing and user-friendly website both Frontend and Backend</p>
           <a href={resume} download="Resume" className="btn1"><LuContact2 size="20" />Download CV</a>
          </div>
          <img  src={image} alt="Profile" className="bg"/>

      </section>

    )
}

export default Intro