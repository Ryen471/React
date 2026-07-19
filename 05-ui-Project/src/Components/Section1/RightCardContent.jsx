import React from 'react'


const  RightCardContext= (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>{props.intro}</p>
            <div className='flex justify-between'>
                <button style={{backgroundColor:props.color}} className=' text-white font-semibolde px-8 py-2 rounded-full'>{props.tag}</button>
            <button className=' text-white font-medium px-3 py-2 rounded-full' ><i className="ri-arrow-right-long-line"></i></button>
            </div>
            
        </div>
    </div>
  )
}

export default RightCardContext