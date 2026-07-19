import React from 'react'
import RightCardContent from './RightCardContent'

const RightCard = (props) => {
  return (
    <div className=' h-full shrink-0  overflow-hidden relative  w-80  rounded-4xl'> 
    <img  className='h-[80vh] w-full object-cover'src={props.img}></img>
    <RightCardContent color={props.color} id={props.id} tag={props.tag} intro={props.intro}/>
    
    
    </div>
    
  )
}

export default RightCard