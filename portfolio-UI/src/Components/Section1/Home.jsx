import React from 'react'
import { Image } from 'lucide';
import{
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedin
}from 'react-icons/fa';
const  Home = () => {
  return (
    <div className='Home'>
         <div className="Intro">
        <p><span>hi,
            </span>
            <span> i'm aryan...!</span></p>
        <p>BCA Student | Frontend Developer</p>
        <p>I,m a BCA student passionate about web development.I enjoy building responsive and user-friendly websites using HTML,CSS,javaScript,and React.I'm constantly learning new technologies and improving my skills through real world projects.</p>

        <div className='Button'>
            <button>View Projects</button>
            <button>Contact Me</button>
        </div>

        <div className='icons'>
          <p className='icon-title'>Connect & Tech Stack</p>
          <a href='https://github.com/Ryen471'className='skill-icon'style={{color:'black'}}><FaGithub/></a>
         <a href='https://www.linkedin.com/in/aryan-rawal-5b2a94284/'className='skill-icon' style={{color:'black'}}> <FaLinkedin/></a>
          <FaHtml5 className='skill-icon'/>
          <FaReact className='skill-icon'/>
          <FaCss3Alt className='skill-icon'/>
          <FaJs className='skill-icon'/>
        </div>
       </div>
       <div className='image'>
        <img src="src/Image/image.jpeg"></img>
       </div>
       </div>
   
  
   
   

  )
}

export default  Home;