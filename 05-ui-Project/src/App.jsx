import React from "react"
import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const App=()=>
{

  const users=[
    {
      img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Aspiring software engineer with a professional mindset',
      color:'blue',
      tag:'Satisfied.'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Analytical thinker with a focus on data-driven decision making.',
      color:'green',
      tag:'Analysis.'
    },
    {
      img:'https://images.unsplash.com/photo-1570717173024-ec8081c8f8e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWx8ZW58MHx8MHx8fDA%3D',
      intro:'Passionate developer building scalable backend solutions.',
      color:'pink',
      tag:'Code.',
    },
    {
      img:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Collaborative learner thriving in team environments',
      color:'black',
      tag:'Team',
    },
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      
    </div>
    
  )
}
 export default App;