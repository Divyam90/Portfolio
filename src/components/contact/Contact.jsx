import React,{useState} from 'react'
import './contact.css'
import { icons } from '../../data'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [message, setmessage] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();

        const serviceId = 'service_x9wm8te';
        const templateId = 'template_daa6rjo';
        const publicKey = 'UmZdgi0Yf2eoJQO5D';

        const templateParams = {
            from_name: name,
            from_email:email,
            to_name:'Divyam Kalra',
            message:message,
        }
        emailjs.send(serviceId,templateId,templateParams,publicKey)
        .then((response)=>{
            console.log('Email Sent Successfully',response);
            setname('');
            setemail('');
            setmessage('');
        })
        .catch((error)=>{
            console.log('Error sending email',error)
        })
    }

  return (
      <div id="contact">
     
          <h1 className="contactPageTitle">Contact Me</h1>
          <span className="contactDesc">Please fill out the form to discuss any work opportunities</span>
          <form className="contactForm" onSubmit={handleSubmit}>
              <input type="text" className="name" value={name} onChange={(e)=>setname(e.target.value)} placeholder="Your Name" />
              <input type="email" className="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder="Your Email" />
              <textarea className="msg"  value={message} onChange={(e)=>setmessage(e.target.value)} placeholder="Your Message" rows="5"></textarea>
              <button type="submit" value="send" className="submitBtn">Submit</button>
              <div className="links">
                  {icons.map((index,id)=>(
                      <a href={index.link} target="_blank">
                  <img  key={id} src={index.img} alt="" className="link" />
                  </a>
                  ))}
              </div>
          </form>
      </div>

  )
}

export default Contact