import React from 'react';
import{
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGithub,
  FaLinkedin
}from 'react-icons/fa';

const Skills = () => {
  return (
    <div className="skills" >

    <h1>My Skills</h1>

    <div className="skills-container">

        <div className="skill-card">
        <FaHtml5 className='skill-icon'/>
            <h3>HTML</h3>
        </div>

        <div className="skill-card">
         <FaCss3Alt className='skill-icon'/>
            <h3>CSS</h3>
        </div>

        <div className="skill-card">
            <FaJs className='skill-icon'/>
            <h3>JavaScript</h3>
        </div>

        <div className="skill-card">
            <FaReact className='skill-icon'/>
            <h3>React</h3>
        </div>

        <div className="skill-card">
            <FaGithub className='skill-icon'/>
            <h3>GitHub</h3>
        </div>

    </div>

</div>
    
  )
}

export default Skills



