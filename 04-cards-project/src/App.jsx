import React from 'react'
import Card from'./components/Card'

const App=()=>
{
  const jobOpenings = [
  {
  
    brandlogo: "https://th.bing.com/th/id/OIP.sdbRxKqeKaVRLkMfKSDyDAHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 45,
    location: "Mumbai, India"
  },
  {
    
    brandlogo: "https://th.bing.com/th/id/OIP._1XYFmzg9gMHjcqm2SjWaQHaHa?w=201&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 60,
    location: "Bangalore, India"
  },
  {
   
    brandlogo: "https://th.bing.com/th/id/OIP.rjchiTEU8DhRrNd7O92HaAAAAA?w=152&h=159&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Amazon",
    datePosted: "10 weeks ago",
    post: "Cloud Support Associate",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 35,
    location: "Hyderabad, India"
  },
  {
    
    brandlogo: "https://th.bing.com/th/id/OIP.ncsnzSQZTHXiVomWmyrelAHaEw?w=266&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "IBM",
    datePosted: "3 days ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 25,
    location: "Pune, India"
  },
  {
    
    brandlogo: "https://th.bing.com/th/id/OIP.-czXndc5C-c6QFOZSUa4FAHaEo?w=272&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Accenture",
    datePosted: "1 month ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 40,
    location: "Chennai, India"
  },
  {
   
    brandlogo: "data:image/webp;base64,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",
    nameOfCompany: "Infosys",
    datePosted: "4 weeks ago",
    post: "Java Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 55,
    location: "Delhi, India"
  },
  {
    
    brandlogo: "https://th.bing.com/th/id/OIP.YjODjDA0O2rDqD_LQUzKDgHaEK?w=279&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Wipro",
    datePosted: "6 days ago",
    post: "Python Developer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: 30,
    location: "Noida, India"
  },
  {
    
    brandlogo: "data:image/webp;base64,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",
    nameOfCompany: "TCS",
    datePosted: "8 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: 50,
    location: "Kolkata, India"
  },
  {
    
    brandlogo: "https://th.bing.com/th/id/OIP.qGcRjuPF4mebcyT3IOdjPQHaHa?w=165&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    nameOfCompany: "Zoho",
    datePosted: "12 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: 28,
    location: "Coimbatore, India"
  },
  {
   
    brandlogo: "data:image/webp;base64,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",
    nameOfCompany: "Adobe",
    datePosted: "7 weeks ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: 45,
    location: "Mumbai, India"
  }
];


  return(
    <div className='parent'>
      {
      jobOpenings.map(function(elem,idx){
        return <div key={idx}>
          <Card nameOfCompany={elem.nameOfCompany}
          datePosted={elem.datePosted} 
          post={elem.post} 
          tag1={elem.tag1} 
          tag2={elem.tag2} 
          pay={elem.pay} 
          location={elem.location}
           brandlogo={elem.brandlogo}/> 
           
        </div>
      })}

    </div>
  )
}
export default App;