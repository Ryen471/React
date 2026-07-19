import React from 'react'
import RightCard from './RightCard';
import RightCardContext from './RightCardContent';


const RightContent = (props) => {
  return (
    <div id='right' className='h-full  flex  rounded-4xl overflow-x-auto flex-nowrap gap-10 w-2/3 p-6 '>
      {props.users.map(function(elem,indx)
      {
         return <RightCard key={indx} id={indx} img={elem.img} tag={elem.tag} color={elem.color}  intro={elem.intro}/>
      })
      }
    </div>
  )
}

export default RightContent;