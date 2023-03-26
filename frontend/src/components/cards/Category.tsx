import React from 'react'

const Category = (props: {image: string,title: string}) => {
  return (
    <div className='rounded-xl border-[5px] relative transition-all duration-1000 ease-in-out transform hover:scale-110 cursor-pointer'>
        <img className='rounded-xl object-fill h-full w-full' src={props.image} alt="" />
        <h1 className='absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-slate-800 font-bold text-xl'>{props.title}</h1>
    </div>
  )
}

export default Category