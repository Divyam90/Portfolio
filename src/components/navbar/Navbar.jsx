import React,{useState} from 'react'
import './navbar.css';
import logo from '../../assets/logo.png'
import { IoMdContact } from "react-icons/io";
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png'
const Navbar = () => {

const [menu, setmenu] = useState(false)

  return (
      <nav className="navbar">
          <img  src={logo} alt="logo" className='logo' />
          <div className="desktopMenu">
              <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist">Home</Link>
              <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist">About</Link>
              <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="desktopmenulist">Portfolio</Link>
              <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-80} duration={500} className="desktopmenulist">Contact</Link>
          </div>
          <button onClick={()=>{
              document.getElementById('contact').scrollIntoView({behavior:'smooth'});
          }} className="desktopMenuBtn"><IoMdContact size="20" /> Contact Me </button>

<img src={Menu} alt="logo" className='mobMenu' onClick={()=>setmenu(!menu)} />
          <div className="navMenu" style={{display:menu?'flex':'none'}}>
              <Link activeClass='active' to="intro" spy={true} smooth={true} offset={-50} duration={500} className="navitem" onClick={()=>setmenu(false)} >Home</Link>
              <Link activeClass='active' to="skills" spy={true} smooth={true} offset={-50} duration={500} className="navitem" onClick={()=>setmenu(false)} >About</Link>
              <Link activeClass='active' to="works" spy={true} smooth={true} offset={-50} duration={500} className="navitem" onClick={()=>setmenu(false)} >Portfolio</Link>
              <Link activeClass='active' to="contact" spy={true} smooth={true} offset={-80} duration={500} className="navitem" onClick={()=>setmenu(false)} >Contact</Link>
          </div>
      </nav>
  )
} 

export default Navbar